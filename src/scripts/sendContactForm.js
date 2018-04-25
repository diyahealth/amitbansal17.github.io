var isReCaptchaPassed = false;

function showSuccessPopup() {
    var title = "Your message has been sent";
    var text = "Thank you for contacting us! We will get in touch with you as soon as possible.";
    return showPopup(title, text);
}

function showErrorPopup(reason) {
    var title = "Your message hasn't been sent";
    var text = "An error occured during message sending: " + reason;
    return showPopup(title, text);
}

function showPopup(title, text) {
    alert(title);
}

function formAsJson(form) {
    return form.elements.reduce((data, element)=> {
        data[element.name] = element.value;
        return data;
    }, {});
}

export function sendContactForm(e, form) {
    var data = formAsJson(form);

    if (!isReCaptchaPassed) {
        return false;
    }

    var request = new XMLHttpRequest();
    request.open("post", "https://diyagroup-contactus.azurewebsites.net/api/SaveMessage?code=8NtqotFumIOq16p5MeZM2hw4elRI1SETunMU8k5aXWVbhRbL4emiJQ==")
    request.setRequestHeader("content-type", "application/json");
    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            showSuccessPopup();
        } else {
            showErrorPopup(request.responseText);
        }
    }
    request.onerror = function() {
        showErrorPopup("Can't reach target server.")
    }
    request.send(JSON.stringify(data));

    return false;
}

export function requireReCaptcha() {
    isReCaptchaPassed = true;
}

export function expireReCaptcha() {
    isReCaptchaPassed = false;
}
