document.addEventListener("DOMContentLoaded", () => {

    const DEBUG = true;

    // -------------------------
    // DOM
    // -------------------------

    const form        = document.getElementById("business-form");
    const businessName  = document.getElementById("business-name");
    const businessType  = document.getElementById("business-type");
    const country       = document.getElementById("country");
    const businessPhone = document.getElementById("business-phone");
    const businessEmail = document.getElementById("business-email");
    const branchName    = document.getElementById("branch-name");
    const businessAddress = document.getElementById("business-address");

    // -------------------------
    // Events
    // -------------------------

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const business = buildBusiness();

        if (!validateBusiness(business)) return;

        save(business);
        navigate();
    });

    // -------------------------
    // Helpers
    // -------------------------

    function buildBusiness() {
        return {
            name:    businessName.value.trim(),
            type:    businessType.value,
            country: country.value,
            phone:   businessPhone.value.trim(),
            email:   businessEmail.value.trim(),
            branch:  branchName.value.trim(),
            address: businessAddress.value.trim()
        };
    }

    // -------------------------
    // Validation
    // -------------------------

    function validateBusiness(business) {
        if (!business.name || !business.type || !business.phone || !business.email) {
            alert("Please fill in all required fields.");
            return false;
        }
        return true;
    }

    // -------------------------
    // Save
    // -------------------------

    function save(business) {
        app.save("business", business);

        if (DEBUG) {
            console.log("Business saved:", app.get("business"));
        }
    }

    // -------------------------
    // Navigation
    // -------------------------

    function navigate() {
        if (DEBUG) {
            console.log("Navigating to workspaceSelection...");
        }

        app.go("workspaceSelection");
    }

});
