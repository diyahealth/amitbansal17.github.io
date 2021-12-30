export type ToggleClass = (id: string, classToAdd: string, hash?:boolean) => void;

export function toggleClass(id: string, classToAdd: string, hash:boolean=true) {
    if (!classToAdd) {
        return;
    }

    const element = document.getElementById(id);
    if (!element) {
        return;
    }

    if (hash) {
        window.location.hash = "#" + id;
    }

    
    element.classList.toggle(classToAdd);
}

export type toggleClassWithoutHash = (id: string, classToAdd: string) => void;

export function toggleClassWithoutHash(id: string, classToAdd: string) {
    if (!classToAdd) {
        return;
    }

    const element = document.getElementById(id);
    if (!element) {
        return;
    }

    
    element.classList.toggle(classToAdd);
}
