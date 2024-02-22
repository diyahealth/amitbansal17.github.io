export function activateViewportTracking() {
    const viewportEnterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-viewport');
                observer.unobserve(entry.target);
            }
        })
    }, { threshold: .1 });

    document
        .querySelectorAll('[data-viewport]')
        .forEach(el => viewportEnterObserver.observe(el));

    const fullyInViewportObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible-in-viewport');
                observer.unobserve(entry.target);
            }
        })
    }, { threshold: .9 });

    document
        .querySelectorAll('[data-full-viewport]')
        .forEach(el => fullyInViewportObserver.observe(el));
}
