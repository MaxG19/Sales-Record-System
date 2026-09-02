/**
 * Reusable Manager Navigation Shell Component
 *
 * Provides persistent sidebar navigation, top app header, slide-over Notification Drawer
 * (All / Unread / Critical tabs), Profile Summary Card dropdown, and Sign Out Confirmation Modal.
 */

(function () {

    const ManagerShell = {

        init() {
            this.injectOverlays();
            this.bindSidebarToggle();
            this.bindSidebarLinks();
            this.bindHeaderControls();
            this.bindActionButtons();
            this.bindNotificationDrawer();
            this.bindProfileDropdown();
            this.bindSignOutModal();
            this.updateActiveSidebar();
            this.updateBreadcrumbs();
            this.renderStateInfo();
        },

        // -----------------------------------------------------------------
        // Overlay Injection (Notification Drawer, Profile Card, SignOut Modal)
        // -----------------------------------------------------------------
        injectOverlays() {
            if (!document.getElementById("shell-overlay-container")) {
                const container = document.createElement("div");
                container.id = "shell-overlay-container";
                container.innerHTML = `
                    <!-- Notification Drawer Backdrop & Slide-Over -->
                    <div id="notification-drawer-backdrop" class="fixed inset-0 bg-on-surface/40 backdrop-blur-xs z-50 hidden transition-opacity duration-300"></div>
                    <div id="notification-drawer" class="fixed top-0 right-0 h-screen w-full max-w-md bg-surface shadow-2xl z-50 transform translate-x-full transition-transform duration-300 flex flex-col border-l border-outline-variant">
                        <!-- Drawer Header -->
                        <div class="px-lg py-md border-b border-outline-variant flex justify-between items-center bg-surface-container-low/50">
                            <div class="flex items-center gap-2">
                                <span class="material-symbols-outlined text-primary">notifications</span>
                                <h3 class="font-hanken text-headline-sm font-bold text-primary">Notifications</h3>
                                <span class="px-2 py-0.5 bg-primary/10 text-primary font-label-sm text-label-sm font-semibold rounded-full" id="notif-count-badge">3 New</span>
                            </div>
                            <button id="close-notif-drawer" class="p-2 text-on-surface-variant hover:bg-surface-container-low rounded-full transition-colors cursor-pointer" type="button">
                                <span class="material-symbols-outlined">close</span>
                            </button>
                        </div>
                        
                        <!-- Notification Tabs -->
                        <div class="flex border-b border-outline-variant px-lg bg-surface">
                            <button class="notif-tab py-3 px-4 font-label-md text-label-md font-semibold border-b-2 border-primary text-primary cursor-pointer transition-colors" data-tab="all" type="button">All (4)</button>
                            <button class="notif-tab py-3 px-4 font-label-md text-label-md font-semibold border-b-2 border-transparent text-outline hover:text-primary cursor-pointer transition-colors" data-tab="unread" type="button">Unread (2)</button>
                            <button class="notif-tab py-3 px-4 font-label-md text-label-md font-semibold border-b-2 border-transparent text-outline hover:text-primary cursor-pointer transition-colors" data-tab="critical" type="button">Critical (2)</button>
                        </div>

                        <!-- Notification Content List -->
                        <div class="flex-1 overflow-y-auto p-lg space-y-3 nav-scrollbar" id="notif-list-container">
                            <!-- Items injected dynamically -->
                        </div>

                        <!-- Drawer Footer -->
                        <div class="p-md border-t border-outline-variant bg-surface-container-low/30 flex justify-between items-center">
                            <button id="mark-all-read-btn" class="font-label-sm text-label-sm font-semibold text-primary hover:underline cursor-pointer" type="button">Mark all as read</button>
                            <button id="view-all-notifications-btn" class="font-label-sm text-label-sm font-semibold text-primary hover:underline cursor-pointer" type="button">Notification Settings</button>
                        </div>
                    </div>

                    <!-- Profile Summary Card Dropdown -->
                    <div id="profile-dropdown-card" class="fixed top-16 right-6 w-80 bg-surface rounded-2xl border border-outline-variant shadow-xl z-50 hidden transition-all duration-200 p-lg">
                        <div class="flex items-center gap-3 pb-md border-b border-outline-variant/40">
                            <div class="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-lg">
                                <span class="material-symbols-outlined" style="font-size: 28px;">person</span>
                            </div>
                            <div class="min-w-0">
                                <h4 class="font-hanken font-bold text-body-lg text-primary truncate" id="profile-card-name">Alex Sterling</h4>
                                <p class="font-label-sm text-label-sm text-outline truncate" id="profile-card-role">Store Manager</p>
                                <p class="font-label-sm text-label-sm text-on-surface-variant truncate" id="profile-card-email">alex.sterling@bms.com</p>
                            </div>
                        </div>

                        <div class="py-md space-y-1">
                            <button id="profile-card-view-btn" class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-on-surface-variant hover:bg-surface-container-low transition-colors text-left cursor-pointer" type="button">
                                <span class="material-symbols-outlined text-primary">account_circle</span>
                                <span class="font-body-md text-body-md font-medium">View Full Profile</span>
                            </button>
                            <button id="profile-card-settings-btn" class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-on-surface-variant hover:bg-surface-container-low transition-colors text-left cursor-pointer" type="button">
                                <span class="material-symbols-outlined text-primary">settings</span>
                                <span class="font-body-md text-body-md font-medium">Account Preferences</span>
                            </button>
                        </div>

                        <div class="pt-sm border-t border-outline-variant/40">
                            <button id="profile-card-signout-btn" class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-error hover:bg-error/10 transition-colors text-left cursor-pointer" type="button">
                                <span class="material-symbols-outlined">logout</span>
                                <span class="font-body-md text-body-md font-semibold">Sign Out</span>
                            </button>
                        </div>
                    </div>

                    <!-- Sign Out Confirmation Modal -->
                    <div id="signout-modal-backdrop" class="fixed inset-0 bg-on-surface/40 backdrop-blur-xs z-50 hidden transition-opacity duration-200"></div>
                    <div id="signout-modal" class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-surface rounded-2xl border border-outline-variant shadow-2xl z-50 hidden p-xl space-y-lg">
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 rounded-2xl bg-error/10 text-error flex items-center justify-center">
                                <span class="material-symbols-outlined" style="font-size: 28px;">warning</span>
                            </div>
                            <div>
                                <h3 class="font-hanken text-headline-sm font-bold text-primary">Sign Out Confirmation</h3>
                                <p class="font-label-sm text-label-sm text-outline">Confirm session logout</p>
                            </div>
                        </div>

                        <p class="font-body-md text-body-md text-on-surface-variant">
                            Are you sure you want to sign out of your Manager Workspace? Any unsaved session updates will be safely preserved.
                        </p>

                        <div class="flex justify-end gap-md pt-sm">
                            <button id="signout-cancel-btn" class="px-lg py-2.5 border border-outline-variant rounded-xl text-on-surface-variant hover:bg-surface-container-low font-body-md font-semibold transition-colors cursor-pointer" type="button">
                                Cancel
                            </button>
                            <button id="signout-confirm-btn" class="px-lg py-2.5 bg-error text-white rounded-xl hover:bg-error/90 font-body-md font-semibold transition-colors cursor-pointer" type="button">
                                Sign Out
                            </button>
                        </div>
                    </div>
                `;
                document.body.appendChild(container);
            }
        },

        // -----------------------------------------------------------------
        // Sidebar Toggle (Retractable Sidebar)
        // -----------------------------------------------------------------
        bindSidebarToggle() {
            const toggleBtn = document.getElementById("menu-toggle");
            const sidebar = document.getElementById("sidebar");
            const mainContent = document.getElementById("main-content");

            // Restore saved collapse state
            const isCollapsed = localStorage.getItem("bms_sidebar_collapsed") === "true";
            if (isCollapsed && sidebar && mainContent) {
                sidebar.classList.add("sidebar-collapsed");
                mainContent.classList.add("content-expanded");
            }

            if (toggleBtn && sidebar && mainContent) {
                toggleBtn.addEventListener("click", (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const currentlyCollapsed = sidebar.classList.toggle("sidebar-collapsed");
                    mainContent.classList.toggle("content-expanded");
                    localStorage.setItem("bms_sidebar_collapsed", currentlyCollapsed ? "true" : "false");
                });
            }
        },

        // -----------------------------------------------------------------
        // Relative Route Navigation Helper
        // -----------------------------------------------------------------
        getRelativePath(routeKey) {
            if (window.ROUTES && window.ROUTES[routeKey]) {
                const rawPath = window.ROUTES[routeKey];
                if (rawPath.startsWith("http://") || rawPath.startsWith("https://")) {
                    return rawPath;
                }
                const scripts = document.querySelectorAll("script[src*='routes.js']");
                let prefix = "";
                if (scripts.length > 0) {
                    prefix = scripts[0].getAttribute("src").replace(/js\/routes\.js$/, "");
                }
                return prefix + rawPath.replace(/^\//, "");
            }
            return "#";
        },

        navigateTo(routeKey) {
            const relPath = this.getRelativePath(routeKey);
            if (relPath && relPath !== "#") {
                window.location.href = relPath;
            } else if (window.app && typeof window.app.go === "function") {
                window.app.go(routeKey);
            }
        },

        // -----------------------------------------------------------------
        // Sidebar Navigation
        // -----------------------------------------------------------------
        bindSidebarLinks() {
            const routesMap = {
                "nav-dashboard": "dashboard",
                "nav-products": "products",
                "nav-inventory": "inventory",
                "nav-categories": "categories",
                "nav-purchase-orders": "purchaseOrders",
                "nav-suppliers": "suppliers",
                "nav-customers": "customers",
                "nav-sales": "sales",
                "nav-reports": "reports",
                "nav-employees": "employees",
                "nav-notifications": "notifications",
                "nav-help": "help",
                "nav-profile": "profile"
            };

            Object.entries(routesMap).forEach(([id, routeKey]) => {
                const el = document.getElementById(id);
                if (el) {
                    el.addEventListener("click", (e) => {
                        e.preventDefault();
                        this.navigateTo(routeKey);
                    });
                }
            });

            const logoutBtn = document.getElementById("nav-logout");
            if (logoutBtn) {
                logoutBtn.addEventListener("click", (e) => {
                    e.preventDefault();
                    this.openSignOutModal();
                });
            }
        },

        // -----------------------------------------------------------------
        // Header Controls
        // -----------------------------------------------------------------
        bindHeaderControls() {
            const branchSelect = document.getElementById("header-branch-select");
            if (branchSelect) {
                branchSelect.addEventListener("click", (e) => {
                    e.preventDefault();
                    this.navigateTo("branchSelection");
                });
            }

            const searchForm = document.getElementById("header-search-form");
            if (searchForm) {
                searchForm.addEventListener("submit", (e) => {
                    e.preventDefault();
                    this.navigateTo("search");
                });
            }

            const notifBtn = document.getElementById("header-notification-btn");
            if (notifBtn) {
                notifBtn.addEventListener("click", (e) => {
                    e.stopPropagation();
                    this.toggleNotificationDrawer();
                });
            }

            const avatarBtn = document.getElementById("header-avatar-btn");
            if (avatarBtn) {
                avatarBtn.addEventListener("click", (e) => {
                    e.stopPropagation();
                    this.toggleProfileDropdown();
                });
            }
        },

        // -----------------------------------------------------------------
        // Action Button Wiring (Modals and Sub-Pages)
        // -----------------------------------------------------------------
        bindActionButtons() {
            document.querySelectorAll("button, a").forEach(el => {
                if (el.dataset.route) {
                    el.addEventListener("click", (e) => {
                        e.preventDefault();
                        this.navigateTo(el.dataset.route);
                    });
                    return;
                }

                const text = (el.textContent || "").trim().toLowerCase();

                if (text.includes("new product") || text.includes("add product")) {
                    el.addEventListener("click", (e) => {
                        e.preventDefault();
                        this.navigateTo("newProductModal");
                    });
                }
                else if (text.includes("adjust stock") || text.includes("stock adjustment")) {
                    el.addEventListener("click", (e) => {
                        e.preventDefault();
                        this.navigateTo("adjustStock");
                    });
                }
                else if (text.includes("move stock") || text.includes("transfer stock") || text.includes("new transfer")) {
                    el.addEventListener("click", (e) => {
                        e.preventDefault();
                        this.navigateTo("moveStockModal");
                    });
                }
                else if (text.includes("new purchase order") || text.includes("create po") || text.includes("create purchase order")) {
                    el.addEventListener("click", (e) => {
                        e.preventDefault();
                        this.navigateTo("createPurchaseOrder");
                    });
                }
                else if (text.includes("add supplier") || text.includes("new supplier")) {
                    el.addEventListener("click", (e) => {
                        e.preventDefault();
                        this.navigateTo("supplierModal");
                    });
                }
                else if (text.includes("pos workstation") || text.includes("cashier pos") || text.includes("new sale")) {
                    el.addEventListener("click", (e) => {
                        e.preventDefault();
                        this.navigateTo("posInterface");
                    });
                }
                else if (text.includes("export report") || (text === "export" && !el.closest("form") && !el.closest("table"))) {
                    el.addEventListener("click", (e) => {
                        e.preventDefault();
                        this.navigateTo("exportReports");
                    });
                }
                else if (text.includes("schedule report") || text.includes("schedule reports")) {
                    el.addEventListener("click", (e) => {
                        e.preventDefault();
                        this.navigateTo("scheduleReports");
                    });
                }
                else if (text.includes("add employee") || text.includes("new employee")) {
                    el.addEventListener("click", (e) => {
                        e.preventDefault();
                        this.navigateTo("addEmployee");
                    });
                }
                else if (text.includes("employee schedule") || text.includes("shift schedule")) {
                    el.addEventListener("click", (e) => {
                        e.preventDefault();
                        this.navigateTo("employeeSchedule");
                    });
                }
                else if (text.includes("add category") || text.includes("new category")) {
                    el.addEventListener("click", (e) => {
                        e.preventDefault();
                        this.navigateTo("addCategoryModal");
                    });
                }
            });
        },

        // -----------------------------------------------------------------
        // Notification Drawer Logic (All / Unread / Critical)
        // -----------------------------------------------------------------
        notificationsData: [
            { id: 1, title: "Low Stock Alert: Organic Tea 250g", desc: "Current stock level is 4 units (threshold: 15).", type: "critical", isRead: false, time: "10m ago" },
            { id: 2, title: "Overdue Invoice: Apex Supplies", desc: "Invoice #INV-9021 of KES 128,300 is past due date.", type: "critical", isRead: false, time: "1h ago" },
            { id: 3, title: "Inbound Shipment Arrived", desc: "PO-2026-089 has been delivered at West Storage.", type: "unread", isRead: false, time: "2h ago" },
            { id: 4, title: "New Customer Registration", desc: "Sarah Jenkins completed profile registration.", type: "all", isRead: true, time: "4h ago" }
        ],

        bindNotificationDrawer() {
            const backdrop = document.getElementById("notification-drawer-backdrop");
            const closeBtn = document.getElementById("close-notif-drawer");
            const markAllBtn = document.getElementById("mark-all-read-btn");
            const notifSettingsBtn = document.getElementById("view-all-notifications-btn");

            if (backdrop) backdrop.addEventListener("click", () => this.closeNotificationDrawer());
            if (closeBtn) closeBtn.addEventListener("click", () => this.closeNotificationDrawer());
            if (markAllBtn) {
                markAllBtn.addEventListener("click", () => {
                    this.notificationsData.forEach(n => n.isRead = true);
                    this.renderNotifications("all");
                });
            }
            if (notifSettingsBtn) {
                notifSettingsBtn.addEventListener("click", () => {
                    this.closeNotificationDrawer();
                    app.go("notifications");
                });
            }

            // Tabs
            const tabs = document.querySelectorAll(".notif-tab");
            tabs.forEach(tab => {
                tab.addEventListener("click", (e) => {
                    tabs.forEach(t => {
                        t.classList.remove("border-primary", "text-primary");
                        t.classList.add("border-transparent", "text-outline");
                    });
                    e.target.classList.remove("border-transparent", "text-outline");
                    e.target.classList.add("border-primary", "text-primary");

                    const tabType = e.target.dataset.tab;
                    this.renderNotifications(tabType);
                });
            });

            this.renderNotifications("all");
        },

        renderNotifications(filter) {
            const list = document.getElementById("notif-list-container");
            if (!list) return;

            let filtered = this.notificationsData;
            if (filter === "unread") filtered = this.notificationsData.filter(n => !n.isRead);
            if (filter === "critical") filtered = this.notificationsData.filter(n => n.type === "critical");

            if (filtered.length === 0) {
                list.innerHTML = `
                    <div class="p-xl text-center text-outline space-y-md">
                        <span class="material-symbols-outlined text-outline" style="font-size: 36px;">notifications_off</span>
                        <p class="font-body-md">No notifications found in this view.</p>
                    </div>
                `;
                return;
            }

            list.innerHTML = filtered.map(n => `
                <div class="p-md bg-surface-container-low/60 rounded-xl border border-outline-variant/40 hover:bg-surface-container transition-colors cursor-pointer flex items-start gap-3">
                    <span class="material-symbols-outlined ${n.type === 'critical' ? 'text-error' : 'text-primary'} mt-0.5" style="font-size: 20px;">
                        ${n.type === 'critical' ? 'warning' : 'info'}
                    </span>
                    <div class="flex-1 min-w-0">
                        <div class="flex justify-between items-start">
                            <h4 class="font-body-md font-semibold text-on-surface truncate">${n.title}</h4>
                            <span class="font-label-sm text-label-sm text-outline ml-2">${n.time}</span>
                        </div>
                        <p class="font-label-sm text-label-sm text-on-surface-variant mt-1">${n.desc}</p>
                    </div>
                </div>
            `).join("");
        },

        toggleNotificationDrawer() {
            const drawer = document.getElementById("notification-drawer");
            const backdrop = document.getElementById("notification-drawer-backdrop");
            if (!drawer || !backdrop) return;

            const isHidden = drawer.classList.contains("translate-x-full");
            if (isHidden) {
                this.closeProfileDropdown();
                backdrop.classList.remove("hidden");
                drawer.classList.remove("translate-x-full");
            } else {
                this.closeNotificationDrawer();
            }
        },

        closeNotificationDrawer() {
            const drawer = document.getElementById("notification-drawer");
            const backdrop = document.getElementById("notification-drawer-backdrop");
            if (drawer) drawer.classList.add("translate-x-full");
            if (backdrop) backdrop.classList.add("hidden");
        },

        // -----------------------------------------------------------------
        // Profile Dropdown Card Logic
        // -----------------------------------------------------------------
        bindProfileDropdown() {
            const card = document.getElementById("profile-dropdown-card");
            const viewBtn = document.getElementById("profile-card-view-btn");
            const settingsBtn = document.getElementById("profile-card-settings-btn");
            const signoutBtn = document.getElementById("profile-card-signout-btn");

            if (viewBtn) {
                viewBtn.addEventListener("click", () => {
                    this.closeProfileDropdown();
                    app.go("profile");
                });
            }

            if (settingsBtn) {
                settingsBtn.addEventListener("click", () => {
                    this.closeProfileDropdown();
                    app.go("profile");
                });
            }

            if (signoutBtn) {
                signoutBtn.addEventListener("click", () => {
                    this.closeProfileDropdown();
                    this.openSignOutModal();
                });
            }

            document.addEventListener("click", (e) => {
                if (card && !card.classList.contains("hidden")) {
                    const avatarBtn = document.getElementById("header-avatar-btn");
                    if (!card.contains(e.target) && (!avatarBtn || !avatarBtn.contains(e.target))) {
                        this.closeProfileDropdown();
                    }
                }
            });
        },

        toggleProfileDropdown() {
            const card = document.getElementById("profile-dropdown-card");
            if (!card) return;
            const isHidden = card.classList.contains("hidden");
            if (isHidden) {
                this.closeNotificationDrawer();
                card.classList.remove("hidden");
            } else {
                this.closeProfileDropdown();
            }
        },

        closeProfileDropdown() {
            const card = document.getElementById("profile-dropdown-card");
            if (card) card.classList.add("hidden");
        },

        // -----------------------------------------------------------------
        // Sign Out Confirmation Modal Logic
        // -----------------------------------------------------------------
        bindSignOutModal() {
            const backdrop = document.getElementById("signout-modal-backdrop");
            const cancelBtn = document.getElementById("signout-cancel-btn");
            const confirmBtn = document.getElementById("signout-confirm-btn");

            if (backdrop) backdrop.addEventListener("click", () => this.closeSignOutModal());
            if (cancelBtn) cancelBtn.addEventListener("click", () => this.closeSignOutModal());
            if (confirmBtn) {
                confirmBtn.addEventListener("click", () => {
                    app.clearOnboarding();
                    app.remove(STORAGE.USER);
                    app.go("login");
                });
            }
        },

        openSignOutModal() {
            const backdrop = document.getElementById("signout-modal-backdrop");
            const modal = document.getElementById("signout-modal");
            if (backdrop) backdrop.classList.remove("hidden");
            if (modal) modal.classList.remove("hidden");
        },

        closeSignOutModal() {
            const backdrop = document.getElementById("signout-modal-backdrop");
            const modal = document.getElementById("signout-modal");
            if (backdrop) backdrop.classList.add("hidden");
            if (modal) modal.classList.add("hidden");
        },

        // -----------------------------------------------------------------
        // Active Sidebar & Breadcrumb Highlighting
        // -----------------------------------------------------------------
        updateActiveSidebar() {
            const currentPath = decodeURIComponent(window.location.pathname).toLowerCase();

            const pathMap = [
                { id: "nav-dashboard",       match: "manager dashboard" },
                { id: "nav-products",        match: "products" },
                { id: "nav-inventory",       match: "inventory" },
                { id: "nav-categories",      match: "category" },
                { id: "nav-purchase-orders", match: "purchase" },
                { id: "nav-suppliers",       match: "supplier" },
                { id: "nav-customers",       match: "customer" },
                { id: "nav-sales",           match: "sales" },
                { id: "nav-reports",         match: "reports" },
                { id: "nav-employees",       match: "employees" },
                { id: "nav-notifications",   match: "notification" },
                { id: "nav-help",            match: "help" },
                { id: "nav-profile",         match: "profile" }
            ];

            document.querySelectorAll("#sidebar nav a").forEach(link => {
                link.classList.remove("sidebar-active");
            });

            for (const entry of pathMap) {
                if (currentPath.includes(entry.match)) {
                    const el = document.getElementById(entry.id);
                    if (el) {
                        el.classList.add("sidebar-active");
                        break;
                    }
                }
            }
        },

        updateBreadcrumbs() {
            const container = document.getElementById("breadcrumb-container");
            if (!container) return;
            container.innerHTML = `<span class="text-primary font-bold">Dashboard</span>`;
        },

        renderStateInfo() {
            const b = app.getState(STORAGE.BUSINESS);
            const u = app.getState(STORAGE.USER);

            const businessEl = document.getElementById("header-business-name");
            const userEl = document.getElementById("header-user-name");
            const cardNameEl = document.getElementById("profile-card-name");
            const cardEmailEl = document.getElementById("profile-card-email");

            if (businessEl && b?.name) businessEl.textContent = b.name;
            if (userEl && u?.name) userEl.textContent = u.name;
            if (cardNameEl && u?.name) cardNameEl.textContent = u.name;
            if (cardEmailEl && u?.email) cardEmailEl.textContent = u.email;
        }

    };

    window.ManagerShell = ManagerShell;

    document.addEventListener("DOMContentLoaded", () => ManagerShell.init());

})();
