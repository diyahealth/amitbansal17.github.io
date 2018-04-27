import { CaptchaStateHolder } from "./scripts/CaptchaStateHolder";
import { ContactUsForm } from "./scripts/ContactUsForm";
import { initGoogleMap } from "./scripts/GoogleMap";
import { LayoutManager } from "./scripts/LayoutManager";
import "./styles/main.scss";
import "./typings";

declare global {
    interface Window {
        diya: DiyaGroupWebSite;
        // Google reCaptcha requires callbacks directly in window object.
        passCaptcha: () => void;
        resetCaptcha: () => void;
    }
}

interface DiyaGroupWebSite {
    contactUs: {
        captcha: CaptchaStateHolder,
        form: ContactUsForm,
    };
    map: {
        init: () => void;
    };
}

const layout = new LayoutManager();
const captcha = new CaptchaStateHolder();

window.passCaptcha = () => captcha.pass();
window.resetCaptcha = () => captcha.reset();

window.diya = {
    contactUs: {
        captcha,
        form: new ContactUsForm(captcha, layout),
    },
    map: {
        init: initGoogleMap,
    },
};
