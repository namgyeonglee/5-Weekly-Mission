const inputEmail = document.querySelector('.input-email');
const emailInput = document.querySelector('.email');
const inputErrorMessage = document.querySelector('.input-error-message');
const formatErrorMessage = document.querySelector('.format-error-message');

// 이메일 값 입력했는지 확인하는 함수
function validateEmailInput() {
  if (!emailInput.value) {
    if (!inputErrorMessage) {
      // 박스 아래 에러 메시지 노출
      const p = document.createElement('p');
      p.classList.add('input-error-message');
      p.textContent = '이메일을 입력해 주세요.';
      inputEmail.appendChild(p);

      // 박스 테두리 빨간색으로 변경
      emailInput.classList.add('error-border');
    }
  } else {
    // 박스 테두리 빨간색으로 변경하는 클래스 제거
    emailInput.classList.remove('error-border');

    if (inputErrorMessage) {
      inputEmail.removeChild(inputErrorMessage);
    }
  }
}  

// 이메일 형식 맞는지 확인하는 함수
function validateEmailFormat() {
  // 이메일 값이 아예 없는 경우면 함수 종료
  if (!emailInput.value) {
    return;
  }

  const email = emailInput.value;

  // 이메일 형식 검증
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isValidEmail = emailRegex.test(email);

  // 에러 메시지 처리
  if (!isValidEmail) {
    if (!formatErrorMessage) {
      // 박스 아래 에러 메시지 노출
      const p = document.createElement('p');
      p.classList.add('format-error-message');
      p.textContent = '올바른 이메일 주소가 아닙니다.';
      inputEmail.appendChild(p);

      // 박스 테두리 빨간색으로 변경
      emailInput.classList.add('error-border');
    }
  } else {
    // 박스 테두리 빨간색으로 변경하는 클래스 제거
    emailInput.classList.remove('error-border');

    if (formatErrorMessage) {
      inputEmail.removeChild(formatErrorMessage);
    }
  }
}

emailInput.addEventListener('focusout', validateEmailInput);
emailInput.addEventListener('focusout', validateEmailFormat);



const inputPassword = document.querySelector('.input-password');
const passwordInput = document.querySelector('.password');
const passwordInputErrorMessage = document.querySelector('.password-input-error-message');

// 비밀번호 값 입력했는지 확인하는 함수
function validatePasswordInput() {
  if (!passwordInput.value) {
    if (!passwordInputErrorMessage) {
      // 박스 아래 에러 메시지 노출
      const p = document.createElement('p');
      p.classList.add('password-input-error-message');
      p.textContent = '비밀번호를 입력해 주세요.';
      inputPassword.appendChild(p);

      // 박스 테두리 빨간색으로 변경
      passwordInput.classList.add('error-border');
    }
  } else {
    // 박스 테두리 빨간색으로 변경하는 클래스 제거
    passwordInput.classList.remove('error-border');

    if (passwordInputErrorMessage) {
      inputPassword.removeChild(passwordInputErrorMessage);
    }
  }
}  

passwordInput.addEventListener('focusout', validatePasswordInput);


// test ID/PW와 일치할 경우 로그인 버튼 클릭 시 folder 페이지로 이동

const loginBtn = document.querySelector('.login .button');

function goFolder() {
  if (emailInput.value === "test@codeit.com" && passwordInput.value === "codeit101") {
    let link = '/folder';
    location.href = link;
  }
}

loginBtn.addEventListener('click', goFolder);