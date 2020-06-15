export type ToAnchor = (id: string, focusSelector?: "button" | "input") => void;

export function toAnchor(id: string, focusSelector?: "button" | "input") {
    window.location.hash = "#" + id;

    if (!focusSelector) {
        return;
    }

    const element = document.getElementById(id);
    if (!element) {
        return;
    }

    const focusElement = element.querySelector(focusSelector);

    if (focusElement) {
        focusElement.focus();
    }
}
