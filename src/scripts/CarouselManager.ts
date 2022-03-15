interface CarouselElementsSelectors {
    indicatorSelector?: string;
    switchSlideControlSelector: string;
    backgroundSelector?: string;
    carouselItemSelector?: string;
}

const FALLBACK_INDICATOR_SELECTOR = ".indicator";
const FALLBACK_ITEM_SELECTOR = ".carousel-item-container";

export class CarouselManager {
    private intervalsMap: Map<string, number> = new Map();

    public init(id: string, selectors: CarouselElementsSelectors, speed: number) {
        const { indicatorSelector, switchSlideControlSelector } = selectors;

        const carouselRoot = document.getElementById(id);
        const indicators = Array.from(carouselRoot.querySelectorAll(indicatorSelector || FALLBACK_INDICATOR_SELECTOR));
        const controls = Array.from(carouselRoot.querySelectorAll(switchSlideControlSelector));

        indicators.forEach((indicator, index) => {
            indicator.addEventListener("click", () => this.setSlideTarget(id, index, selectors));
        });

        const changeSlideInterval = setInterval(() => this.nextSlide(id, selectors), speed);
        this.intervalsMap.set(id, changeSlideInterval);

        const leftControl = controls.find((el) => el.className.includes("left"));
        const rightControl = controls.find((el) => el.className.includes("right"));

        const getControlFunction = (moveSlideFunc: (id: string, classes: CarouselElementsSelectors) => void) => () => {
            moveSlideFunc(id, selectors);
            const existingInterval = this.intervalsMap.has(id) ? this.intervalsMap.get(id) : undefined;
            if (existingInterval) {
                clearInterval(existingInterval);
            }

            // const newInterval = setInterval(() => moveSlideFunc(id, selectors), speed);
            // this.intervalsMap.set(id, newInterval);
        };

        if (rightControl) {
            rightControl.addEventListener("click", getControlFunction(this.nextSlide.bind(this)));
        }

        if (leftControl) {
            leftControl.addEventListener("click", getControlFunction(this.prevSlide.bind(this)));
        }
    }

    private setSlideTarget(id: string, index: number, selectors: CarouselElementsSelectors) {
        this.setSlide(id, index, selectors);
        const existingInterval = this.intervalsMap.has(id) ? this.intervalsMap.get(id) : undefined;

        if (existingInterval) {
            clearInterval(existingInterval);
        }
    }

    private setSlide(id: string, index: number, selectors: CarouselElementsSelectors) {
        const { backgroundSelector, carouselItemSelector, indicatorSelector } = selectors;
        const carouselRoot = document.getElementById(id);
        const backgroundImagesNodes = carouselRoot.querySelectorAll(backgroundSelector);
        const textNodes = carouselRoot.querySelectorAll(carouselItemSelector || FALLBACK_ITEM_SELECTOR);
        const indicators = carouselRoot.querySelectorAll(indicatorSelector || FALLBACK_INDICATOR_SELECTOR);

        if (backgroundImagesNodes.length > 1) {
            this.toggleActive(backgroundImagesNodes, index);
        }

        this.toggleActive(textNodes, index);
        this.toggleActive(indicators, index);
    }

    private nextSlide(id: string, selectors: CarouselElementsSelectors) {
        const { indicatorSelector: indicatorClass } = selectors;
        const carouselRoot = document.getElementById(id);
        const indicators = carouselRoot.querySelectorAll(indicatorClass || FALLBACK_INDICATOR_SELECTOR);

        const activeIndex = this.findActiveElementIndex(indicators);

        if (activeIndex === undefined) {
            this.setSlide(id, 0, selectors);
        } else {
            const newActiveSlideIndex = activeIndex === indicators.length - 1 ? 0 : activeIndex + 1;
            this.setSlide(id, newActiveSlideIndex, selectors);
        }

    }

    private prevSlide(id: string, selectors: CarouselElementsSelectors) {
        const carouselRoot = document.getElementById(id);
        const indicators = carouselRoot.querySelectorAll(FALLBACK_INDICATOR_SELECTOR);

        const activeIndex = this.findActiveElementIndex(indicators);

        if (activeIndex === undefined) {
            this.setSlide(id, 0, selectors);
        } else {
            const newActiveSlideIndex = activeIndex === 0 ? indicators.length - 1 : activeIndex - 1;
            this.setSlide(id, newActiveSlideIndex, selectors);
        }

    }

    private toggleActive(list: NodeListOf<Element>, newActiveIndex: number, useNextFallback?: boolean) {
        const nodesArray = Array.from(list);

        const newActiveNode = nodesArray[newActiveIndex];

        const activeNode = nodesArray.find((el) => el.className.includes("active"));

        if (activeNode && newActiveNode) {
            activeNode.classList.toggle("active");
            newActiveNode.classList.toggle("active");
        }
    }

    private findActiveElementIndex(list: NodeListOf<Element>): number | undefined {
        let activeIndex;
        const nodesArray = Array.from(list);
        nodesArray.forEach((el, index) => {
            if (activeIndex !== undefined) {
                return;
            }
            if (el.className.includes("active")) {
                activeIndex = index;
                return;
            }
        });
        return activeIndex;
    }
}
