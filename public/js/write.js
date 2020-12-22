const form = document.querySelector('form');
const errorMessageElement = document.querySelector('#error-message');

form.onsubmit = () => {
    let errorMessage = '';
    errorMessageElement.innerHTML = '';

    if (!form.nickname.value) {
        errorMessage = '닉네임을 입력해주세요.';
    } 
    else if (!form.title.value) {
        errorMessage = '제목을 입력해주세요.';
    }
    else if (!form.text.value) {
        errorMessage = '본문이 없습니다.';
    }

    errorMessageElement.innerHTML = errorMessage;

    return !errorMessage;
};