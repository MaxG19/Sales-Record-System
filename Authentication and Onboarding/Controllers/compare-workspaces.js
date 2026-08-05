document.addEventListener("DOMContentLoaded", () => {

    const DEBUG = true;

    // -------------------------
    // DOM
    // -------------------------

    const chooseButtons = document.querySelectorAll("[data-action='choose-workspace']");
    const returnLinks   = document.querySelectorAll("[data-action='return-to-selection']");

    // -------------------------
    // Guards
    // -------------------------

    app.require(STORAGE.BUSINESS, "businessDetails");

    // -------------------------
    // Init
    // -------------------------

    if (DEBUG) {
        console.log("Compare Workspaces loaded.");
    }

    // -------------------------
    // Events
    // -------------------------

    chooseButtons.forEach((btn) => {
        btn.addEventListener("click", () => navigate());
    });

    returnLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            navigate();
        });
    });

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
