// Hero Slider Functionality
const heroBg = document.getElementById("hero-bg");
const heroText = document.getElementById("hero-text");

if (heroBg && heroText) {
    const slides = [
        { image: "./assets/Showcase1.png", text: "Machines learn, but humans create." },
        { image: "./assets/Showcase2.png", text: "Reboot and try again." },
        { image: "./assets/Showcase3.png", text: "Data is the new oil." },
        { image: "./assets/Showcase4.png", text: "Keep calm and code on." }
    ];
    
    let imagesLoaded = 0;
    slides.forEach(slide => {
        const img = new Image();
        img.src = slide.image;
        img.onload = () => {
            imagesLoaded++;
            if (imagesLoaded === slides.length) {
                heroBg.classList.add('loaded');
            }
        };
    });
    
    let currentIndex = 0;
    const slideDuration = 5000;
    
    function changeBackground() {
        currentIndex = (currentIndex + 1) % slides.length;
        heroBg.style.opacity = "0";
        heroText.style.opacity = "0";
        
        setTimeout(() => {
            heroBg.style.backgroundImage = `url('${slides[currentIndex].image}')`;
            heroText.innerHTML = `<h1>${slides[currentIndex].text.replace(/(create|Reboot|Data|code)/g, '<span>$1</span>')}</h1>`;
            heroBg.style.opacity = "1";
            heroText.style.opacity = "1";
        }, 1000);
    }
    
    const checkLoad = setInterval(() => {
        if (imagesLoaded === slides.length) {
            clearInterval(checkLoad);
            setInterval(changeBackground, slideDuration);
        }
    }, 100);
    
}