/**
 * Manager Dashboard Controller
 *
 * Coordinates dashboard-specific metric card clicks, quick actions, and alerts,
 * while delegating shell components (sidebar, top header, notification drawer,
 * profile dropdown, sign out modal) to ManagerShell.
 */

document.addEventListener("DOMContentLoaded", () => {

    const DEBUG = true;

    // -------------------------
    // Cache DOM
    // -------------------------
    const elements = {
        // Quick Actions
        qaAddProduct: document.getElementById("qa-add-product"),
        qaReceiveGoods: document.getElementById("qa-receive-goods"),
        qaCreatePo: document.getElementById("qa-create-po"),
        qaStockCount: document.getElementById("qa-stock-count"),
        qaAdjustStock: document.getElementById("qa-adjust-stock"),
        qaProcessReturns: document.getElementById("qa-process-returns"),

        // Dashboard Metric Cards
        cardProducts: document.getElementById("card-products"),
        cardInventory: document.getElementById("card-inventory"),
        cardPurchaseOrders: document.getElementById("card-purchase-orders"),
        cardSuppliers: document.getElementById("card-suppliers"),
        cardCustomers: document.getElementById("card-customers"),
        cardSales: document.getElementById("card-sales"),
        cardReports: document.getElementById("card-reports"),
        cardEmployees: document.getElementById("card-employees"),

        // Priority / Metric Summary Cards
        kpiGrossProfit: document.getElementById("kpi-gross-profit"),
        kpiRevenue: document.getElementById("kpi-revenue"),
        kpiLiabilities: document.getElementById("kpi-liabilities"),
        kpiLowStock: document.getElementById("kpi-low-stock"),

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
            console.log("Manager Dashboard Controller ready.");
        }
    }

    checkGuards();

    // -------------------------
    // Bind Events
    // -------------------------
    function bindEvents() {
        // Quick Actions
        bindRoute(elements.qaAddProduct, "addProduct");
        bindRoute(elements.qaReceiveGoods, "receiveGoods");
        bindRoute(elements.qaCreatePo, "createPurchaseOrder");
        bindRoute(elements.qaStockCount, "stockCount");
        bindRoute(elements.qaAdjustStock, "adjustStock");
        bindRoute(elements.qaProcessReturns, "processReturns");

        // Module Overview Cards
        bindRoute(elements.cardProducts, "products");
        bindRoute(elements.cardInventory, "inventory");
        bindRoute(elements.cardPurchaseOrders, "purchaseOrders");
        bindRoute(elements.cardSuppliers, "suppliers");
        bindRoute(elements.cardCustomers, "customers");
        bindRoute(elements.cardSales, "sales");
        bindPermissionRoute(elements.cardReports, "reports", state.permissions.canViewReports);
        bindPermissionRoute(elements.cardEmployees, "employees", state.permissions.canViewEmployees);

        // KPI Summary Metric Tiles
        bindRoute(elements.kpiGrossProfit, "reports");
        bindRoute(elements.kpiRevenue, "sales");
        bindRoute(elements.kpiLiabilities, "suppliers");
        bindRoute(elements.kpiLowStock, "inventory");

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

    // -------------------------
    // Render Dashboard Specifics
    // -------------------------
    function render() {
        const titleEl = document.getElementById("dashboard-title");
        if (titleEl && state.user?.name) {
            titleEl.textContent = `Welcome back, ${state.user.name}`;
        }
    }

    // Initialize
    bindEvents();
    render();

});
