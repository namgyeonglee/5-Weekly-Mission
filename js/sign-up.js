// import {
//   validateEmailInput,
//   validateEmailFormat,
//   resetEmailErrorMessage,
//   validatePasswordInput,
//   resetPasswordErrorMessage
// } from "./sign.js";

// *---* 이메일 에러메시지 *---* //

const inputEmail = document.querySelector('.input-email');
const emailInput = document.querySelector('.email');
const emailErrorMessage = document.querySelector('.email-error-message');
const emailP = document.createElement('p');
emailP.classList.add('input--helper-text__error');

// 이메일 값 입력했는지 확인하는 함수
function validateEmailInput() {
  if (!emailInput.value) {
    // 박스 아래 에러 메시지 노출
    emailP.textContent = '이메일을 입력해 주세요.';
    inputEmail.appendChild(emailP);

    // 박스 테두리 빨간색으로 변경
    emailInput.classList.add('error-border');
  } else {
    // 박스 테두리 빨간색으로 변경하는 클래스 제거
    emailInput.classList.remove('error-border');

    // p 태그 내 에러메시지 문자열 제거
    emailP.textContent = '';
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

  // 에러 메시지 처리
  if (!emailRegex.test(email)) {
    // 박스 아래 에러 메시지 노출
    emailP.textContent = '올바른 이메일 주소가 아닙니다.';
    inputEmail.appendChild(emailP);

    // 박스 테두리 빨간색으로 변경
    emailInput.classList.add('error-border');
  } else {
    // 박스 테두리 빨간색으로 변경하는 클래스 제거
    emailInput.classList.remove('error-border');

    // p 태그 내 에러메시지 문자열 제거
    emailP.textContent = '';
  }
}

// 포커스 인 되면 에러메시지 리셋하는 함수
function resetEmailErrorMessage() {
  emailP.textContent = '';
}

// signup.html 한정 함수 추가) 이메일 중복 검사하는 함수

function checkEmailUnique() {
  if (emailInput.value === 'test@codeit.com') { // 입력한 이메일 주소가 test@codeit.com 일 때
    // 박스 아래 에러 메시지 노출
    emailP.textContent = '이미 사용 중인 이메일입니다.';
    inputEmail.appendChild(emailP);

    // 박스 테두리 빨간색으로 변경
    emailInput.classList.add('error-border');
  }
}

emailInput.addEventListener('focusout', () => {
  validateEmailInput();
  validateEmailFormat();
  checkEmailUnique();
});

emailInput.addEventListener('focusin', resetEmailErrorMessage);



// *---* 패스워드 에러메시지 *---* //

const inputPassword = document.querySelector('.input-password');
const passwordInput = document.querySelector('.password');
const passwordErrorMessage = document.querySelector('.password-error-message');
const passwordP = document.createElement('p');
passwordP.classList.add('input--helper-text__error');

// 비밀번호 값 입력했는지 확인하는 함수
function validatePasswordInput() {
  if (!passwordInput.value) {
    if (!passwordErrorMessage) {
      // 박스 아래 에러 메시지 노출
      passwordP.textContent = '비밀번호를 입력해 주세요.';
      inputPassword.appendChild(passwordP);

      // 박스 테두리 빨간색으로 변경
      passwordInput.classList.add('error-border');
    }
  } else {
    // 박스 테두리 빨간색으로 변경하는 클래스 제거
    passwordInput.classList.remove('error-border');
    
    // p 태그 내 에러메시지 문자열 제거
    passwordP.textContent = '';
  }
}  

// 포커스 인 되면 에러메시지 리셋하는 함수
function resetPasswordErrorMessage() {
  passwordP.textContent = '';
}

// signup.html 한정 함수 추가) 비밀번호 유효성 검사 함수
function validatePassword() {
  // 비밀번호 형식 검증
  if (passwordInput.value.length < 8 || !/[a-zA-Z]/.test(passwordInput.value) || !/[0-9]/.test(passwordInput.value)) {
    passwordP.textContent = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.';
  }
}

passwordInput.addEventListener('focusout', () => {
  validatePasswordInput();
  validatePassword();
});

passwordInput.addEventListener('focusin', resetPasswordErrorMessage);