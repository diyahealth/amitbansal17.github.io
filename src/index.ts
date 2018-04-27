import { CaptchaStateHolder } from "./scripts/CaptchaStateHolder";
import { ContactUsForm } from "./scripts/ContactUsForm";
import { initGoogleMap } from "./scripts/GoogleMap";
import { LayoutManager } from "./scripts/LayoutManager";
import "./styles/main.scss";
import "./typings";

declare global {
    interface Window {
        diya: DiyaGroupWebSite;
    }
}

interface DiyaGroupWebSite {
    contactUs: {
        captcha: {
            pass: () => void,
            reset: () => void,
        },
        form: ContactUsForm,
    };
    map: {
        init: () => void;
    };
}

const layout = new LayoutManager();
const captcha = new CaptchaStateHolder();

window.diya = {
    contactUs: {
        captcha: {
            pass: () => captcha.pass(),
            reset: () => captcha.reset(),
        },
        form: new ContactUsForm(captcha, layout),
    },
    map: {
        init: initGoogleMap,
    },
};
