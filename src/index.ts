import { CaptchaStateHolder } from "./scripts/CaptchaStateHolder";
import { CarouselManager } from "./scripts/CarouselManager";
import { contactSavings } from "./scripts/ContactSavings";
import { estimatedSavings } from "./scripts/EstimatedSavings";
import { ContactUsForm } from "./scripts/ContactUsForm";
import { initGoogleMap } from "./scripts/GoogleMap";
import { LayoutManager } from "./scripts/LayoutManager";
import { prepareTwitterFeed } from "./scripts/PrepareTwitterFeed";
import { toAnchor, ToAnchor } from "./scripts/toAnchor";
import { toggleClass, ToggleClass } from "./scripts/toggleClass";

import "./styles/main.scss";
import "./typings";

declare global {
    interface Window {
        diya: DiyaHealthWebSite;
        // Google reCaptcha requires callbacks directly in window object.
        passCaptcha: () => void;
        resetCaptcha: () => void;
    }
}

interface DiyaHealthWebSite {
    contactUs: {
        captcha: CaptchaStateHolder,
        form: ContactUsForm,
        savings: (event:any, form:any) => void;
        estimatedSavings: (event:any, form:any) => void;
    };
    map: {
        init: () => void;
    };
    carousel: CarouselManager;
    toAnchor: ToAnchor;
    toggleClass: ToggleClass;
    prepareTwitterFeed: (id: string) => void;
}

const layout = new LayoutManager();
const captcha = new CaptchaStateHolder();

window.passCaptcha = () => captcha.pass();
window.resetCaptcha = () => captcha.reset();

window.diya = {
    carousel: new CarouselManager(),
    contactUs: {
        captcha,
        form: new ContactUsForm(captcha, layout),
        savings: contactSavings,
        estimatedSavings: estimatedSavings
    },
    map: {
        init: initGoogleMap,
    },
    prepareTwitterFeed,
    toAnchor,
    toggleClass,
};

function appendReturnUrl() {
    const link = document.getElementById("sign-in");
    if (link != null) {
        const urlParams = new URLSearchParams(window.location.search);
        const returnUrl = urlParams.get("returnUrl");
        if (returnUrl == null || returnUrl === '') {
            return;
        }
        const currentUrl = link.getAttribute("href");
        const newUrl = currentUrl + '?returnUrl=' + returnUrl;

        link.setAttribute("href", newUrl);
                
    }
    window.removeEventListener("DOMContentLoaded", appendReturnUrl);
}
window.addEventListener('DOMContentLoaded',appendReturnUrl)
