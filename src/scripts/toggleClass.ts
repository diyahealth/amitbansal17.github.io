export type ToggleClass = (id: string, classToAdd: string) => void;

export function toggleClass(id: string, classToAdd: string) {
    window.location.hash = "#" + id;

    if (!classToAdd) {
        return;
    }

    const element = document.getElementById(id);
    if (!element) {
        return;
    }

    element.classList.toggle(classToAdd);
}
