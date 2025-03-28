document.addEventListener("DOMContentLoaded", function () {
    // Configuration array for different activity categories
    // Each object defines the container, file naming pattern, range, and base path
    const activityConfigs = [
        {
            containerSelector: ".HTMLContainerHolder", // HTML activities container
            prefix: "activity", // File prefix
            start: 1, // Starting activity number
            end: 42, // Ending activity number
            baseHref: "./activity" // Base path for activity files
        },
        {
            containerSelector: ".CSSContainerHolder", // CSS activities container
            prefix: "css-activity", // File prefix
            start: 30, // Starting activity number
            end: 50, // Ending activity number
            baseHref: "./css-activity" // Base path for CSS activity files
        },
        {
            containerSelector: ".JavascriptContainerHolder", // JavaScript activities container
            prefix: "javascript-activity", // File prefix
            start: 1, // Starting activity number
            end: 10, // Ending activity number
            baseHref: "./javascript-activity" // Base path for JavaScript activity files
        }
    ];

    // Loop through each activity configuration and generate activity links
    activityConfigs.forEach(config => {
        const container = document.querySelector(config.containerSelector);
        if (!container) {
            console.error(`Container not found: ${config.containerSelector}`);
            return; // Skip processing if container is missing
        }

        // Generate and append activity links
        for (let i = config.start; i <= config.end; i++) {
            const activityLink = document.createElement("a");
            activityLink.href = `${config.baseHref}${i}.html`; // Set href dynamically
            activityLink.textContent = i; // Display the activity number
            activityLink.classList.add("activity-link");
            activityLink.title = `${config.prefix}${i}.html`; // Tooltip for better UX
            container.appendChild(activityLink);
        }
    });
});
