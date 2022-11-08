import { CaptchaStateHolder } from "./CaptchaStateHolder";
import { LayoutManager } from "./LayoutManager";

// tslint:disable-next-line:max-line-length
const endpoint = "https://diyagroup-contactus.azurewebsites.net/api/SaveMessage?code=KscVNoNPrcCjbIuLcu8jOLWnJDX__iN-Opu6lMmuK3tCAzFucSC2Qw==";

type RequestCallback = (request: XMLHttpRequest) => void;

export class ContactUsForm {
    private _captcha: CaptchaStateHolder;
    private _layout: LayoutManager;

    constructor(captcha: CaptchaStateHolder, layout: LayoutManager) {
        this._captcha = captcha;
        this._layout = layout;
    }

    send(event: Event, form: HTMLFormElement) {
        event.preventDefault();
        const data = this.formAsJson(form);

        if (!this._captcha.isPassed) {
            return false;
        }

        this._layout.hideErrorMessage();
        this._layout.showLoader();
        this._layout.disableForm();

        this.postData(data, this.handleSuccessSubmit, this.handleFailedSubmit);

        return false;
    }

    reset() {
        this._layout.hideErrorMessage();
        this._layout.enableForm();
        this._layout.showForm();
    }

    private handleSuccessSubmit(request: XMLHttpRequest) {
        this._layout.hideLoader();
        this._layout.hideForm();
        this._layout.showSuccessMessage();
    }

    private handleFailedSubmit(request: XMLHttpRequest) {
        this._layout.hideLoader();
        this._layout.hideForm();
        this._layout.showErrorMessage("Your message hasn't been sent");
    }

    private postData(data: object, success: RequestCallback, failed: RequestCallback): XMLHttpRequest {
        const request = new XMLHttpRequest();
        request.open("post", endpoint);
        request.setRequestHeader("content-type", "application/json");
        request.onload = () => this.handleLoad(request, success, failed);
        request.onerror = () => failed.bind(this)(request);

        request.send(JSON.stringify(data));

        return request;
    }

    private handleLoad(request: XMLHttpRequest, success: RequestCallback, failed: RequestCallback) {
        const handler = request.status >= 200 && request.status < 400 ? success : failed;
        handler.bind(this)(request);
    }

    private formAsJson(form: HTMLFormElement): object {
        const collect = (data: object, element: HTMLInputElement) => {
            if (element.name && element.value) {
                data[element.name] = element.value;
            }

            return data;
        };

        const formResult = [].reduce.call(form.elements, collect, {});
        formResult["referUrl"] = window.location.href;
        return formResult;
    }
}
