export const scrollToSection = (section) => {
    const id = section.toLowerCase().replace(/\s+/g, "-");
    const element = document.getElementById(id);
    if (element) {
        const offset = -115;
        const y = element.getBoundingClientRect().top + window.scrollY + offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
};