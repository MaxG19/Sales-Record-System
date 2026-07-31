document.addEventListener("DOMContentLoaded", () => {

    const DEBUG = true;

    // -------------------------
    // DOM
    // -------------------------

    const pageTitle   = document.getElementById("page-title");
    const continueBtn = document.getElementById("continue-btn");
    const cards       = document.querySelectorAll(".workspace-card");
    const compareLink = document.getElementById("compare-link");
    const capLibLink  = document.getElementById("cap-lib-link");

    // -------------------------
    // State
    // -------------------------

    const state = {
        business:          null,
        selectedWorkspace: null
    };

    // -------------------------
    // Guards
    // -------------------------

    app.require(STORAGE.BUSINESS, "businessDetails");

    // -------------------------
    // Init
    // -------------------------

    state.business = app.session.business();

    renderWelcome(state.business);
    setButtonState(false);

    if (DEBUG) {
        console.log("Workspace Selection loaded for:", state.business?.name);
    }

    // -------------------------
    // Events
    // -------------------------

    cards.forEach((card) => {
        card.addEventListener("click", () => {
            state.selectedWorkspace = getWorkspaceName(card);
            renderSelection(card);
            setButtonState(true);

            if (DEBUG) {
                console.log("Workspace selected:", state.selectedWorkspace);
            }
        });
    });

    continueBtn.addEventListener("click", () => {
        if (!validateSelection()) return;
        save();
        navigate();
    });

    if (compareLink) {
        compareLink.addEventListener("click", (e) => {
            e.preventDefault();
            app.go("compareWorkspaces");
        });
    }

    if (capLibLink) {
        capLibLink.addEventListener("click", (e) => {
            e.preventDefault();
            app.go("capabilityLibrary");
        });
    }

    // -------------------------
    // Helpers
    // -------------------------

    function getWorkspaceName(card) {
        return card.querySelector("h3")?.textContent.trim() ?? null;
    }

    function setButtonState(enabled) {
        continueBtn.disabled = !enabled;
    }

    // -------------------------
    // Rendering
    // -------------------------

    function renderWelcome(business) {
        const name = business?.name;
        pageTitle.textContent = name
            ? `Let's configure ${name}`
            : "Choose Your Workspace";
    }

    function renderSelection(selectedCard) {
        cards.forEach((card) => {
            const isSelected = card === selectedCard;
            card.classList.toggle("selected-card", isSelected);

            const existingDot = card.querySelector(".selection-dot");
            if (existingDot) existingDot.remove();

            if (isSelected) {
                const dot = document.createElement("div");
                dot.className = "selection-dot";
                dot.innerHTML = `<svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></path>
                </svg>`;
                card.appendChild(dot);
            }
        });
    }

    // -------------------------
    // Validation
    // -------------------------

    function validateSelection() {
        if (!state.selectedWorkspace) {
            alert("Please select a workspace to continue.");
            return false;
        }
        return true;
    }

    // -------------------------
    // Save
    // -------------------------

    function save() {
        app.setState(STORAGE.WORKSPACE, state.selectedWorkspace);

        if (DEBUG) {
            console.log("Workspace saved:", app.getState(STORAGE.WORKSPACE));
        }
    }

    // -------------------------
    // Navigation
    // -------------------------

    function navigate() {
        if (DEBUG) {
            console.log("Advancing onboarding from workspaceSelection...");
        }

        Onboarding.next();
    }

});
