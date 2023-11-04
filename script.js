document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-links a');

    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetUrl = link.getAttribute('href');
            window.open(targetUrl, '_blank');
        });
    });
});
