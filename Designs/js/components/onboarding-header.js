/**
 * Onboarding Header Component
 *
 * Renders Logo, Help, Save & Exit, and Avatar into <header id="onboarding-header">.
 * The stepper is a separate section rendered directly in each page's HTML.
 */

(function () {

    function render() {
        const el = document.getElementById("onboarding-header");
        if (!el) return;

        el.className = "onboarding-header";
        el.innerHTML = `
            <div class="onboarding-header__inner">
                <span class="onboarding-header__logo">BMS</span>

                <div class="onboarding-header__actions">
                    <button class="onboarding-header__action-btn" id="header-help-btn" type="button">
                        <span class="material-symbols-outlined" style="font-size:18px;">help_outline</span>
                        Help
                    </button>
                    <button class="onboarding-header__action-btn" id="header-save-exit-btn" type="button">
                        Save &amp; Exit
                    </button>
                    <div class="onboarding-header__avatar" id="header-avatar" title="Account">M</div>
                </div>
            </div>
        `;

        document.getElementById("header-save-exit-btn")
            .addEventListener("click", () => app.go("dashboard"));
    }

    document.addEventListener("DOMContentLoaded", render);

})();
