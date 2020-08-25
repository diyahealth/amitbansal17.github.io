import { CaptchaStateHolder } from "./scripts/CaptchaStateHolder";
import { CarouselManager } from "./scripts/CarouselManager";
import { ContactUsForm } from "./scripts/ContactUsForm";
import { initGoogleMap } from "./scripts/GoogleMap";
import { LayoutManager } from "./scripts/LayoutManager";
import { prepareTwitterFeed } from "./scripts/PrepareTwitterFeed";
import { toAnchor, ToAnchor } from "./scripts/toAnchor";

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
    };
    map: {
        init: () => void;
    };
    carousel: CarouselManager;
    toAnchor: ToAnchor;
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
    },
    map: {
        init: initGoogleMap,
    },
    prepareTwitterFeed,
    toAnchor,
};
