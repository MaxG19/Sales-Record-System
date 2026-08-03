/**
 * Manager Dashboard Controller
 *
 * Establishes the navigation hub for the Manager Workspace.
 *
 * Lifecycle:
 * DOMContentLoaded
 * ↓
 * Cache DOM
 * ↓
 * Load State (via app.getState())
 * ↓
 * Guard
 * ↓
 * Bind Events
 * ↓
 * Render (Highlight active sidebar item → Update breadcrumb → Display business name → Display current branch)
 * ↓
 * Navigate (via app.go())
 */

document.addEventListener("DOMContentLoaded", () => {

    const DEBUG = true;

    // -------------------------
    // Cache DOM
    // -------------------------
    const elements = {
        // Sidebar Navigation
        sidebar: document.getElementById("sidebar"),
        navDashboard: document.getElementById("nav-dashboard"),
        navProducts: document.getElementById("nav-products"),
        navInventory: document.getElementById("nav-inventory"),
        navPurchaseOrders: document.getElementById("nav-purchase-orders"),
        navSuppliers: document.getElementById("nav-suppliers"),
        navCustomers: document.getElementById("nav-customers"),
        navSales: document.getElementById("nav-sales"),
        navReports: document.getElementById("nav-reports"),
        navEmployees: document.getElementById("nav-employees"),
        navNotifications: document.getElementById("nav-notifications"),
        navHelp: document.getElementById("nav-help"),
        navProfile: document.getElementById("nav-profile"),
        navLogout: document.getElementById("nav-logout"),

        // Header Shell Controls
        headerBusinessName: document.getElementById("header-business-name"),
        headerBranchSelect: document.getElementById("header-branch-select"),
        headerSearchForm: document.getElementById("header-search-form"),
        headerSearchInput: document.getElementById("header-search-input"),
        headerNotificationBtn: document.getElementById("header-notification-btn"),
        headerAvatarBtn: document.getElementById("header-avatar-btn"),
        headerUserName: document.getElementById("header-user-name"),

        // Breadcrumbs & Titles
        breadcrumbContainer: document.getElementById("breadcrumb-container"),
        dashboardTitle: document.getElementById("dashboard-title"),
        dashboardSubtitle: document.getElementById("dashboard-subtitle"),

        // Quick Actions
        qaAddProduct: document.getElementById("qa-add-product"),
        qaReceiveGoods: document.getElementById("qa-receive-goods"),
        qaCreatePo: document.getElementById("qa-create-po"),
        qaStockCount: document.getElementById("qa-stock-count"),
        qaAdjustStock: document.getElementById("qa-adjust-stock"),
        qaProcessReturns: document.getElementById("qa-process-returns"),

        // Dashboard Module Cards
        cardProducts: document.getElementById("card-products"),
        cardInventory: document.getElementById("card-inventory"),
        cardPurchaseOrders: document.getElementById("card-purchase-orders"),
        cardSuppliers: document.getElementById("card-suppliers"),
        cardCustomers: document.getElementById("card-customers"),
        cardSales: document.getElementById("card-sales"),
        cardReports: document.getElementById("card-reports"),
        cardEmployees: document.getElementById("card-employees"),

        // Needs Attention Alerts
        alertLowStock: document.getElementById("alert-low-stock"),
        alertPendingDeliveries: document.getElementById("alert-pending-deliveries"),
        alertPurchaseOrders: document.getElementById("alert-purchase-orders"),
        alertInventoryIssues: document.getElementById("alert-inventory-issues"),
        alertPendingReturns: document.getElementById("alert-pending-returns"),

        // Recent Activity Items
        activityProductAdded: document.getElementById("activity-product-added"),
        activityGoodsReceived: document.getElementById("activity-goods-received"),
        activityPoCreated: document.getElementById("activity-po-created"),
        activityReturnProcessed: document.getElementById("activity-return-processed"),
        activitySupplierUpdated: document.getElementById("activity-supplier-updated")
    };

    // -------------------------
    // Load State
    // -------------------------
    const state = {
        business: app.getState(STORAGE.BUSINESS) || null,
        workspace: app.getState(STORAGE.WORKSPACE) || null,
        user: app.getState(STORAGE.USER) || null,
        branch: app.getState(STORAGE.BRANCH) || null,
        permissions: {
            canViewReports: true,
            canViewEmployees: true
        }
    };

    // -------------------------
    // Guard
    // -------------------------
    function checkGuards() {
        if (DEBUG) {
            console.log("Dashboard Controller initialized. Business state:", state.business);
        }
    }

    checkGuards();

    // -------------------------
    // Bind Events
    // -------------------------
    function bindEvents() {
        // Sidebar Navigation
        bindRoute(elements.navDashboard, "dashboard");
        bindRoute(elements.navProducts, "products");
        bindRoute(elements.navInventory, "inventory");
        bindRoute(elements.navPurchaseOrders, "purchaseOrders");
        bindRoute(elements.navSuppliers, "suppliers");
        bindRoute(elements.navCustomers, "customers");
        bindRoute(elements.navSales, "sales");
        
        // Permission-guarded sidebar items
        bindPermissionRoute(elements.navReports, "reports", state.permissions.canViewReports);
        bindPermissionRoute(elements.navEmployees, "employees", state.permissions.canViewEmployees);

        bindRoute(elements.navNotifications, "notifications");
        bindRoute(elements.navHelp, "help");
        bindRoute(elements.navProfile, "profile");

        if (elements.navLogout) {
            elements.navLogout.addEventListener("click", (e) => {
                e.preventDefault();
                handleSignOut();
            });
        }

        // Header Shell Interactions
        if (elements.headerNotificationBtn) {
            elements.headerNotificationBtn.addEventListener("click", () => app.go("notifications"));
        }
        if (elements.headerAvatarBtn) {
            elements.headerAvatarBtn.addEventListener("click", () => app.go("profile"));
        }
        if (elements.headerBranchSelect) {
            elements.headerBranchSelect.addEventListener("change", (e) => {
                const selectedBranch = e.target.value;
                app.setState(STORAGE.BRANCH, selectedBranch);
                app.go("branchSelection");
            });
        }
        if (elements.headerSearchForm) {
            elements.headerSearchForm.addEventListener("submit", (e) => {
                e.preventDefault();
                app.go("search");
            });
        } else if (elements.headerSearchInput) {
            elements.headerSearchInput.addEventListener("keydown", (e) => {
                if (e.key === "Enter") {
                    e.preventDefault();
                    app.go("search");
                }
            });
        }

        // Quick Actions
        bindRoute(elements.qaAddProduct, "addProduct");
        bindRoute(elements.qaReceiveGoods, "receiveGoods");
        bindRoute(elements.qaCreatePo, "createPurchaseOrder");
        bindRoute(elements.qaStockCount, "stockCount");
        bindRoute(elements.qaAdjustStock, "adjustStock");
        bindRoute(elements.qaProcessReturns, "processReturns");

        // Module Cards
        bindRoute(elements.cardProducts, "products");
        bindRoute(elements.cardInventory, "inventory");
        bindRoute(elements.cardPurchaseOrders, "purchaseOrders");
        bindRoute(elements.cardSuppliers, "suppliers");
        bindRoute(elements.cardCustomers, "customers");
        bindRoute(elements.cardSales, "sales");
        bindPermissionRoute(elements.cardReports, "reports", state.permissions.canViewReports);
        bindPermissionRoute(elements.cardEmployees, "employees", state.permissions.canViewEmployees);

        // Needs Attention Alerts
        bindRoute(elements.alertLowStock, "inventory");
        bindRoute(elements.alertPendingDeliveries, "receiveGoods");
        bindRoute(elements.alertPurchaseOrders, "purchaseOrders");
        bindRoute(elements.alertInventoryIssues, "adjustStock");
        bindRoute(elements.alertPendingReturns, "processReturns");

        // Recent Activity Items
        bindRoute(elements.activityProductAdded, "products");
        bindRoute(elements.activityGoodsReceived, "receiveGoods");
        bindRoute(elements.activityPoCreated, "purchaseOrders");
        bindRoute(elements.activityReturnProcessed, "processReturns");
        bindRoute(elements.activitySupplierUpdated, "suppliers");
    }

    function bindRoute(el, routeKey) {
        if (!el) return;
        el.addEventListener("click", (e) => {
            e.preventDefault();
            app.go(routeKey);
        });
    }

    function bindPermissionRoute(el, routeKey, hasPermission) {
        if (!el) return;
        el.addEventListener("click", (e) => {
            e.preventDefault();
            if (hasPermission) {
                app.go(routeKey);
            } else {
                alert("Permission required to access this module.");
            }
        });
    }

    function handleSignOut() {
        if (DEBUG) console.log("Signing out user...");
        app.clearOnboarding();
        app.remove(STORAGE.USER);
        app.go("login");
    }

    // -------------------------
    // Render
    // -------------------------
    function render() {
        renderSidebarActive();
        renderBreadcrumbs();
        renderBusinessShellInfo();
    }

    function renderSidebarActive() {
        const sidebarLinks = document.querySelectorAll("#sidebar nav a");
        sidebarLinks.forEach(link => {
            link.classList.remove("sidebar-active");
            link.classList.add("text-on-surface-variant");
        });
        if (elements.navDashboard) {
            elements.navDashboard.classList.add("sidebar-active");
            elements.navDashboard.classList.remove("text-on-surface-variant");
        }
    }

    function renderBreadcrumbs() {
        if (!elements.breadcrumbContainer) return;
        elements.breadcrumbContainer.innerHTML = `
            <span class="text-primary font-bold">Dashboard</span>
        `;
    }

    function renderBusinessShellInfo() {
        if (elements.headerBusinessName && state.business?.name) {
            elements.headerBusinessName.textContent = state.business.name;
        }
        if (elements.headerUserName && state.user?.name) {
            elements.headerUserName.textContent = state.user.name;
        }
        if (elements.dashboardTitle && state.user?.name) {
            elements.dashboardTitle.textContent = `Welcome back, ${state.user.name}`;
        }
    }

    // -------------------------
    // Initialize Lifecycle
    // -------------------------
    bindEvents();
    render();

});
