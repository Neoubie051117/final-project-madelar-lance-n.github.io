document.addEventListener("DOMContentLoaded", function () {
    const prevBtn = document.querySelector(".navButton:first-of-type");
    const nextBtn = document.querySelector(".navButton:last-of-type");

    // Extract the current page number from the URL
    const match = window.location.pathname.match(/activity(\d+)\.html/);
    const currentPage = match ? parseInt(match[1]) : 1; // Default to 1 if not found

    prevBtn.addEventListener("click", function () {
        if (currentPage > 1) {
            window.location.href = `activity${currentPage - 1}.html`;
        }
    });

    nextBtn.addEventListener("click", function () {
        if (currentPage < 42) { // Change 42 to the highest activity number
            window.location.href = `activity${currentPage + 1}.html`;
        }
    });
});
