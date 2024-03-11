// *---* 이메일 에러메시지 *---* //

const inputEmail = document.querySelector('.input-email');
const emailInput = document.querySelector('.email');
const emailErrorMessage = document.querySelector('.email-error-message');

const emailP = document.createElement('p');
emailP.classList.add('email-error-message');

// 이메일 값 입력했는지 확인하는 함수
function validateEmailInput() {
  if (!emailInput.value) {
    if (!emailErrorMessage) {
      // 박스 아래 에러 메시지 노출
      emailP.textContent = '이메일을 입력해 주세요.';
      inputEmail.appendChild(emailP);

      // 박스 테두리 빨간색으로 변경
      emailInput.classList.add('error-border');
    }
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
  const isValidEmail = emailRegex.test(email);

  // 에러 메시지 처리
  if (!isValidEmail) {
    if (!emailErrorMessage) {
      // 박스 아래 에러 메시지 노출
      emailP.textContent = '올바른 이메일 주소가 아닙니다.';
      inputEmail.appendChild(emailP);

      // 박스 테두리 빨간색으로 변경
      emailInput.classList.add('error-border');
    }
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

emailInput.addEventListener('focusout', validateEmailInput);
emailInput.addEventListener('focusout', validateEmailFormat);
emailInput.addEventListener('focusin', resetEmailErrorMessage);



// *---* 패스워드 에러메시지 *---* //

const inputPassword = document.querySelector('.input-password');
const passwordInput = document.querySelector('.password');
const passwordErrorMessage = document.querySelector('.password-error-message');

const passwordP = document.createElement('p');
passwordP.classList.add('password-error-message');

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

passwordInput.addEventListener('focusout', validatePasswordInput);
passwordInput.addEventListener('focusin', resetPasswordErrorMessage);



// *---* 로그인 시도 에러메시지 *---* //

// test ID/PW와 일치할 경우 로그인 버튼 클릭 시 folder 페이지로 이동

const loginBtn = document.querySelector('.login .button');

function goFolder() {
  if (emailInput.value === "test@codeit.com" && passwordInput.value === "codeit101") {
    let link = '/folder';
    location.href = link;
  } else { 
    // 이외의 이메일 ID 입력 후 로그인 버튼 클릭 시 에러 메시지 노출
    emailP.textContent = '이메일을 확인해 주세요.';
    inputEmail.appendChild(emailP);
    
    // 이메일 박스 테두리 빨간색으로 변경
    emailInput.classList.add('error-border');

    // 이외의 패스워드 입력 후 로그인 버튼 클릭 시 에러 메시지 노출
    passwordP.textContent = '비밀번호를 확인해 주세요.';
    inputPassword.appendChild(passwordP);

    // 패스워드 박스 테두리 빨간색으로 변경
    passwordInput.classList.add('error-border');
  }
}

loginBtn.addEventListener('click', goFolder);