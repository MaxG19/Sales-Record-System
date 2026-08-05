/**
 * Onboarding Stepper Component
 *
 * Reads Onboarding.current() and stamps completed / current / pending
 * classes onto every .stepper-step[data-step] element.
 * Pages never manage step classes manually.
 */

(function () {

    const STEP_ORDER = ["businessDetails", "workspaceSelection", "reviewSetup"];

    function init() {
        const steps = document.querySelectorAll(".stepper-step[data-step]");
        if (!steps.length) return;

        const current     = Onboarding.current();
        const currentIndex = STEP_ORDER.indexOf(current);

        steps.forEach((el) => {
            const stepKey   = el.dataset.step;
            const stepIndex = STEP_ORDER.indexOf(stepKey);

            el.classList.remove(
                "stepper-step--completed",
                "stepper-step--current",
                "stepper-step--pending"
            );

            if (stepIndex < currentIndex) {
                el.classList.add("stepper-step--completed");
                el.querySelector(".stepper-circle").innerHTML = checkmarkSVG();
            } else if (stepIndex === currentIndex) {
                el.classList.add("stepper-step--current");
            } else {
                el.classList.add("stepper-step--pending");
            }
        });
    }

    function checkmarkSVG() {
        return `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"/></svg>`;
    }

    document.addEventListener("DOMContentLoaded", init);

})();
