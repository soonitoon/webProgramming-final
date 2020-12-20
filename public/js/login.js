const form = document.querySelector('form');
const errorMessageElement = document.querySelector('#error-message');

form.onsubmit = () => {
    let errorMessage = '';
    errorMessageElement.innerHTML = '';

    if (!form.username.value) {
        errorMessage = 'Username을 입력해주세요.';
    }
    else if (!form.password.value) {
        errorMessage = '비밀번호를 입력해주세요.';
    }

    errorMessageElement.innerHTML = errorMessage;

    return !errorMessage;
};