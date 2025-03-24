document.addEventListener("DOMContentLoaded", function () {
    const activities = Array.from({ length: 42 }, (_, i) => ({
        name: (i + 1).toString(),
        href: `./activity-page-structure/activity${i + 1}.html`
    }));

    const container = document.querySelector(".containerHolder");

    if (!container) {
        console.error("Error: .containerHolder not found in the document.");
        return;
    }

    activities.forEach(activity => {
        const activityElement = document.createElement("a");
        activityElement.href = activity.href;
        activityElement.textContent = `Activity ${activity.name}`;
        activityElement.classList.add("activity-link"); // Ensure it matches the CSS
        container.appendChild(activityElement);
    });
});
