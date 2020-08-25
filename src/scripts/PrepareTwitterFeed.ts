export function prepareTwitterFeed(id: string) {
    const frameDocument = (document.getElementById(id) as HTMLFrameElement).contentDocument;

    const style = document.createElement("style");
    style.innerHTML = `
                .timeline-Widget { overflow-y: auto; position: relative; height: 100%; }
                .timeline-Widget::-webkit-scrollbar { display: none; }
                .timeline-Header { position: sticky; background-color: #fff; top: 0; z-index: 100; }
            `;
    frameDocument.head.appendChild(style);
}
