document.addEventListener("DOMContentLoaded", () => {
    // Find the first and last navigation buttons
    const prevBtn = document.querySelector(".navButton:first-of-type");
    const nextBtn = document.querySelector(".navButton:last-of-type");
  
    // If the buttons aren't found, log an error and exit.
    if (!prevBtn || !nextBtn) {
      console.error("Navigation buttons not found in the DOM.");
      return;
    }
  
    // Get the current URL's pathname.
    const pathname = window.location.pathname;
    // Use a regex to extract the page number from the filename.
    const match = pathname.match(/css-activity(\d+)\.html/);
    // If there's no match, default to page 30.
    let currentPage = match ? parseInt(match[1], 10) : 30;
  
    // Disable the previous button if on the first page (30) and
    // the next button if on the last page (50)
    prevBtn.disabled = (currentPage <= 30);
    nextBtn.disabled = (currentPage >= 50);
  
    // When the previous button is clicked, go to the previous page if possible.
    prevBtn.addEventListener("click", () => {
      if (currentPage > 30) {
        const prevPage = currentPage - 1;
        window.location.href = `css-activity${prevPage}.html`;
      }
    });
  
    // When the next button is clicked, go to the next page if possible.
    nextBtn.addEventListener("click", () => {
      if (currentPage < 50) {
        const nextPage = currentPage + 1;
        window.location.href = `css-activity${nextPage}.html`;
      }
    });
  });
  