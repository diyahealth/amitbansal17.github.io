export type ToggleClass = (id: string, classToAdd: string) => void;

export function toggleClass(id: string, classToAdd: string) {
    if (!classToAdd) {
        return;
    }

    const element = document.getElementById(id);
    if (!element) {
        return;
    }

    window.location.hash = "#" + id;
    element.classList.toggle(classToAdd);
}
