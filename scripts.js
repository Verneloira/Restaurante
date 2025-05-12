document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth"});
} else {
                window.location.href = this.getAttribute("href");
}
});
});

    const sections = document.querySelectorAll("section");
    const revealOnScroll = () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
}
});
};

    window.addEventListener("scroll", revealOnScroll);
    window.addEventListener("load", revealOnScroll);


    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("mouseenter", () => {
            button.style.transform = "scale(1.1)";
});

        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1)";
});
});
});

