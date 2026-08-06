/*
==================================================
BMS Prototype v1.0
Navigation Controller
==================================================
*/

document.addEventListener("DOMContentLoaded", () => {

    // Get current page from the body tag
    const currentPage = document.body.dataset.page;

    if (!currentPage) return;

    // Remove any existing active state
    document.querySelectorAll(".nav-item").forEach(item => {
        item.classList.remove("sidebar-active");
    });

    // Activate the correct sidebar item
    const activeItem = document.querySelector(
        `[data-page="${currentPage}"]`
    );

    if (activeItem) {
        activeItem.classList.add("sidebar-active");
    }

});