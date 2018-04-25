import "./styles/main.scss";
import { initGoogleMap } from "./scripts/initGoogleMap";
import { sendContactForm, expireReCaptcha, requireReCaptcha } from "./scripts/sendContactForm";

window.sendContactForm = sendContactForm;
window.expireReCaptcha = expireReCaptcha;
window.requireReCaptcha = requireReCaptcha;
window.initGoogleMap = initGoogleMap;
