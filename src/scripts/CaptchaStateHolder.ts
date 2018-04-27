export class CaptchaStateHolder {
    isPassed: boolean = false;
    pass() {
        this.isPassed = true;
    }
    reset() {
        this.isPassed = false;
    }
}
