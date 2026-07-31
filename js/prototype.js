/**
 * Storage key constants.
 * Controllers should use these instead of string literals.
 */
const STORAGE = {
    BUSINESS:     "business",
    WORKSPACE:    "workspace",
    USER:         "user",
    ORGANIZATION: "organization",
    BRANCH:       "branch",
    CAPABILITIES: "capabilities"
};

window.STORAGE = STORAGE;


class Prototype {

    // -------------------------
    // Navigation
    // -------------------------

    /**
     * Navigates to a named route.
     * @param {string} route - Key from ROUTES.
     */
    go(route) {
        window.location.href = ROUTES[route];
    }

    /**
     * Navigates to the previous page in browser history.
     */
    back() {
        history.back();
    }

    /**
     * Guards a page by requiring a storage key to exist.
     * Redirects to the given route if the key is missing.
     * @param {string} key   - Storage key to check.
     * @param {string} route - Route to redirect to if key is missing.
     */
    require(key, route) {
        if (!this.exists(key)) {
            this.go(route);
        }
    }

    // -------------------------
    // Storage
    // -------------------------

    /**
     * Saves data into application storage.
     * @param {string} key
     * @param {*} data
     */
    save(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }

    /**
     * Retrieves and parses data from application storage.
     * @param {string} key
     * @returns {*}
     */
    get(key) {
        return JSON.parse(localStorage.getItem(key));
    }

    /**
     * Checks whether a key exists in application storage.
     * @param {string} key
     * @returns {boolean}
     */
    exists(key) {
        return localStorage.getItem(key) !== null;
    }

    /**
     * Removes a single key from application storage.
     * @param {string} key
     */
    remove(key) {
        localStorage.removeItem(key);
    }

    /**
     * Clears only onboarding-related keys from storage.
     * Does not affect other stored data.
     */
    clearOnboarding() {
        this.remove(STORAGE.BUSINESS);
        this.remove(STORAGE.WORKSPACE);
        this.remove(STORAGE.ORGANIZATION);
        this.remove(STORAGE.BRANCH);
    }

    // -------------------------
    // State
    // -------------------------

    /**
     * Saves application state. Internally delegates to save().
     * Prepared for future migration away from localStorage.
     * @param {string} key
     * @param {*} data
     */
    setState(key, data) {
        this.save(key, data);
    }

    /**
     * Retrieves application state. Internally delegates to get().
     * @param {string} key
     * @returns {*}
     */
    getState(key) {
        return this.get(key);
    }

    // -------------------------
    // Session
    // -------------------------

    /**
     * Session helpers for reading well-known onboarding keys.
     * Use these instead of app.get("business") etc.
     */
    session = {

        /** @returns {object|null} Saved business data. */
        business: () => this.get(STORAGE.BUSINESS),

        /** @returns {string|null} Selected workspace. */
        workspace: () => this.get(STORAGE.WORKSPACE),

        /** @returns {object|null} Saved organization data. */
        organization: () => this.get(STORAGE.ORGANIZATION),

        /** @returns {object|null} Saved user data. */
        user: () => this.get(STORAGE.USER)

    };

}

window.app = new Prototype();
