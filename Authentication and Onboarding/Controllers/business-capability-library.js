document.addEventListener("DOMContentLoaded", () => {

    const DEBUG = true;

    // -------------------------
    // DOM
    // -------------------------

    const cards          = document.querySelectorAll("[data-capability]");
    const continueBtn    = document.getElementById("continue-btn");
    const selectionCount = document.getElementById("selection-count");
    const drawer         = document.getElementById("detailDrawer");
    const drawerOverlay  = document.getElementById("drawerOverlay");

    // -------------------------
    // State
    // -------------------------

    const state = {
        business:     null,
        workspace:    null,
        capabilities: new Set()
    };

    // -------------------------
    // Guards
    // -------------------------

    app.require(STORAGE.BUSINESS,  "businessDetails");
    app.require(STORAGE.WORKSPACE, "workspaceSelection");

    // -------------------------
    // Init
    // -------------------------

    state.business  = app.session.business();
    state.workspace = app.session.workspace();

    // Restore any previously saved capabilities
    const saved = app.getState(STORAGE.CAPABILITIES);
    if (Array.isArray(saved)) {
        saved.forEach((key) => state.capabilities.add(key));
    }

    render();

    if (DEBUG) {
        console.log("Capability Library loaded.");
        console.log("Business:",  state.business);
        console.log("Workspace:", state.workspace);
    }

    // -------------------------
    // Events
    // -------------------------

    cards.forEach((card) => {
        card.addEventListener("click", () => onCardToggle(card));

        card.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onCardToggle(card);
            }
        });
    });

    continueBtn.addEventListener("click", () => {
        save();
        navigate();
    });

    if (drawerOverlay) {
        drawerOverlay.addEventListener("click", closeDrawer);
    }

    // -------------------------
    // Helpers
    // -------------------------

    function onCardToggle(card) {
        const key = card.dataset.capability;

        if (state.capabilities.has(key)) {
            state.capabilities.delete(key);
        } else {
            state.capabilities.add(key);
        }

        render();

        if (DEBUG) {
            console.log("Capabilities:", [...state.capabilities]);
        }
    }

    function openDrawer() {
        if (!drawer) return;
        drawer.classList.remove("translate-x-full");
        drawerOverlay.classList.remove("opacity-0", "pointer-events-none");
    }

    function closeDrawer() {
        if (!drawer) return;
        drawer.classList.add("translate-x-full");
        drawerOverlay.classList.add("opacity-0", "pointer-events-none");
    }

    // Expose drawer controls for any inline HTML onclick attributes
    window.openDrawer  = openDrawer;
    window.closeDrawer = closeDrawer;

    // -------------------------
    // Rendering
    // -------------------------

    function render() {
        renderCards();
        renderCount();
        renderContinueButton();
    }

    function renderCards() {
        cards.forEach((card) => {
            const key        = card.dataset.capability;
            const isSelected = state.capabilities.has(key);

            card.classList.toggle("border-primary",         isSelected);
            card.classList.toggle("border-2",               isSelected);
            card.classList.toggle("border-outline-variant", !isSelected);
            card.setAttribute("aria-checked", String(isSelected));
        });
    }

    function renderCount() {
        if (!selectionCount) return;
        const count = state.capabilities.size;
        selectionCount.textContent = count === 1
            ? "1 capability selected"
            : `${count} capabilities selected`;
    }

    function renderContinueButton() {
        // Allow continuing with zero capabilities — user may just want defaults
        continueBtn.disabled = false;
    }

    // -------------------------
    // Save
    // -------------------------

    function save() {
        app.setState(STORAGE.CAPABILITIES, [...state.capabilities]);

        if (DEBUG) {
            console.log("Capabilities saved:", app.getState(STORAGE.CAPABILITIES));
        }
    }

    // -------------------------
    // Navigation
    // -------------------------

    function navigate() {
        if (DEBUG) {
            console.log("Returning to Workspace Selection...");
        }

        app.back();
    }

});
