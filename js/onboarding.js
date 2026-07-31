/**
 * Onboarding service.
 *
 * Owns the canonical onboarding FLOW and provides next() / complete()
 * so individual controllers never hard-code destination routes.
 *
 * Auxiliary pages (capabilityLibrary, compareWorkspaces) are NOT in the
 * flow — they use app.back() to return to their caller.
 */

const FLOW = [
    "businessDetails",
    "workspaceSelection",
    "reviewSetup",
    "dashboard"
];

/**
 * Maps each FLOW step key to the folder name that appears in its URL path.
 * Matching is done against the decoded pathname segments, so percent-encoded
 * spaces and special characters are handled transparently.
 */
const PAGE_MAP = {
    businessDetails:    "bms_onboarding_business_details",
    workspaceSelection: "workspace_selection_page",
    reviewSetup:        "bms_onboarding_review_complete",
    dashboard:          "Manager Dashboard"
};

const Onboarding = {

    /**
     * Returns the FLOW key for the current page by matching decoded pathname
     * segments against PAGE_MAP folder names.
     * Returns null when the current page is not a recognised onboarding step.
     *
     * @returns {string|null}
     */
    current() {
        const segments = decodeURIComponent(window.location.pathname).split("/");

        return FLOW.find((key) => segments.includes(PAGE_MAP[key])) ?? null;
    },

    /**
     * Advances to the next step after the current page.
     * Does nothing if the current page is not in the flow or is already
     * the last step.
     */
    next() {
        const currentKey  = this.current();

        if (currentKey === null) {
            console.warn("Onboarding.next(): current page is not a recognised onboarding step.", window.location.pathname);
            return;
        }

        const currentIndex = FLOW.indexOf(currentKey);
        const nextKey      = FLOW[currentIndex + 1];

        if (!nextKey) {
            console.warn("Onboarding.next(): no next step after", currentKey);
            return;
        }

        app.go(nextKey);
    },

    /**
     * Completes onboarding: clears onboarding state and navigates to
     * the dashboard. Called by the final CTA on the Review page.
     */
    complete() {
        app.clearOnboarding();
        app.go("dashboard");
    }

};

window.Onboarding = Onboarding;
