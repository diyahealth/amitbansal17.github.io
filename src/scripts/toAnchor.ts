export type ToAnchor = (id: string, focusSelector?: "button" | "input") => void;

export function toAnchor(id: string, focusSelector?: "button" | "input") {

    const element = document.getElementById(id);

    if (!element) {
        return;
    }

    element.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      })

    if (!focusSelector) {
        return;
    }
  
    const focusElement = element.querySelector(focusSelector);

    if (focusElement) {
        focusElement.focus();
    }
}
