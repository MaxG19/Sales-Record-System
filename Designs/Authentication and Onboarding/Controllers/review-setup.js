document.addEventListener("DOMContentLoaded", () => {

    const DEBUG = true;

    // -------------------------
    // DOM
    // -------------------------

    const header            = document.querySelector("header");
    const mainFlow          = document.getElementById("main-flow");
    const loadingState      = document.getElementById("loading-state");
    const successState      = document.getElementById("success-state");

    const reviewBusinessName  = document.getElementById("review-business-name");
    const reviewBusinessType  = document.getElementById("review-business-type");
    const reviewCountry       = document.getElementById("review-country");
    const reviewBranch        = document.getElementById("review-branch");
    const reviewWorkspace     = document.getElementById("review-workspace");
    const reviewWorkspaceDesc = document.getElementById("review-workspace-desc");
    const reviewCapabilities  = document.getElementById("review-capabilities");
    const nextBusinessName    = document.getElementById("next-business-name");
    const successBusinessName = document.getElementById("success-business-name");

    const editBusinessBtn  = document.getElementById("edit-business-btn");
    const editWorkspaceBtn = document.getElementById("edit-workspace-btn");
    const backBtn          = document.getElementById("back-btn");
    const ctaComplete      = document.getElementById("cta-complete");
    const goToDashboardBtn = document.getElementById("go-to-dashboard-btn");
    const accordionBtn     = document.getElementById("accordion-btn");
    const accordionContent = document.getElementById("accordion-content");
    const accordionIcon    = document.getElementById("accordion-icon");

    // -------------------------
    // State
    // -------------------------

    const state = {
        business:     null,
        workspace:    null,
        capabilities: []
    };

    // -------------------------
    // Guards
    // -------------------------

    app.require(STORAGE.BUSINESS,  "businessDetails");
    app.require(STORAGE.WORKSPACE, "workspaceSelection");

    // -------------------------
    // Init
    // -------------------------

    state.business     = app.session.business();
    state.workspace    = app.session.workspace();
    state.capabilities = app.getState(STORAGE.CAPABILITIES) ?? [];

    render();

    if (DEBUG) {
        console.log("Review Setup loaded.");
        console.log("Business:",     state.business);
        console.log("Workspace:",    state.workspace);
        console.log("Capabilities:", state.capabilities);
    }

    // -------------------------
    // Events
    // -------------------------

    editBusinessBtn.addEventListener("click",  () => app.go("businessDetails"));
    editWorkspaceBtn.addEventListener("click", () => app.go("workspaceSelection"));
    backBtn.addEventListener("click",          () => app.back());
    ctaComplete.addEventListener("click",      () => startCreation());
    goToDashboardBtn.addEventListener("click", () => complete());
    accordionBtn.addEventListener("click",     () => toggleAccordion());

    // -------------------------
    // Rendering
    // -------------------------

    function render() {
        const b = state.business;
        const w = state.workspace;
        const c = state.capabilities;

        reviewBusinessName.textContent  = b?.name    || "—";
        reviewBusinessType.textContent  = b?.type    || "—";
        reviewCountry.textContent       = b?.country || "—";
        reviewBranch.textContent        = b?.branch  || "—";
        nextBusinessName.textContent    = b?.name    || "—";
        successBusinessName.textContent = b?.name    || "—";

        reviewWorkspace.textContent     = w || "—";
        reviewWorkspaceDesc.textContent = w
            ? `You selected the ${w} workspace. You can adjust capabilities at any time from Business Settings.`
            : "";

        if (reviewCapabilities) {
            reviewCapabilities.textContent = c.length > 0
                ? c.join(", ")
                : "Default workspace capabilities";
        }
    }

    // -------------------------
    // Helpers
    // -------------------------

    function toggleAccordion() {
        const isHidden = accordionContent.classList.contains("hidden");
        accordionContent.classList.toggle("hidden", !isHidden);
        accordionIcon.style.transform = isHidden ? "rotate(180deg)" : "rotate(0deg)";
    }

    function showPanel(panel) {
        [mainFlow, loadingState, successState, header].forEach((el) => {
            if (el) el.classList.add("hidden");
        });
        panel.classList.remove("hidden");
    }

    // -------------------------
    // Creation Flow
    // -------------------------

    function startCreation() {
        if (DEBUG) console.log("Starting business creation...");

        showPanel(loadingState);

        setTimeout(() => showCreationSuccess(), 3000);
    }

    function showCreationSuccess() {
        if (DEBUG) console.log("Business creation complete.");

        showPanel(successState);
    }

    // -------------------------
    // Navigation
    // -------------------------

    function complete() {
        if (DEBUG) console.log("Completing onboarding...");

        Onboarding.complete();
    }

});
