export class LayoutManager {
    private _hiddenCss = "hidden";
    private _loaderId = "loader";
    private _formId = "form";
    private _fieldsId = "fields";
    private _messageId = "success-message";
    private _errorId = "error-message";

    showLoader() {
        this.showElement(this._loaderId);
    }

    hideLoader() {
        this.hideElement(this._loaderId);
    }

    showForm() {
        this.showElement(this._formId);
    }

    hideForm() {
        this.hideElement(this._formId);
        (document.getElementById(this._formId) as HTMLFormElement).reset();
    }

    disableForm() {
        (document.getElementById(this._fieldsId) as HTMLFieldSetElement).disabled = true;
    }

    enableForm() {
        (document.getElementById(this._fieldsId) as HTMLFieldSetElement).disabled = false;
    }

    showSuccessMessage() {
        this.showElement(this._messageId);
    }

    showErrorMessage(message: string) {
        this.showElement(this._errorId);
    }

    hideErrorMessage() {
        this.hideElement(this._errorId);
    }

    showElement(id: string) {
        document.getElementById(id).classList.remove(this._hiddenCss);
    }

    hideElement(id: string) {
        document.getElementById(id).classList.add(this._hiddenCss);
    }
}
