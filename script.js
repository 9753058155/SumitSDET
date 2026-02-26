// Reveal elements on scroll
const reveal = () => {
    const items = document.querySelectorAll('.skill-card, .project-card');
    items.forEach(item => {
        const windowHeight = window.innerHeight;
        const revealTop = item.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (revealTop < windowHeight - revealPoint) {
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
        }
    });
};

window.addEventListener('scroll', reveal);

// Initial styling for reveal
document.querySelectorAll('.skill-card, .project-card').forEach(item => {
    item.style.opacity = "0";
    item.style.transform = "translateY(50px)";
    item.style.transition = "all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)";
});