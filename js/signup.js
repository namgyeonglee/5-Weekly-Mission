import { togglePassword, } from "./utils.js";

// *---* 이메일 에러메시지 *---* //

const inputEmail = document.querySelector(".input-email");
const emailInput = document.querySelector(".email");
const emailErrorMessage = document.querySelector(".email-error-message");
const emailP = document.createElement("p");
emailP.classList.add("input--helper-text__error");

// 이메일 값 입력했는지 확인하는 함수
function validateEmailInput() {
  if (!emailInput.value) {
    // 박스 아래 에러 메시지 노출
    emailP.textContent = "이메일을 입력해 주세요.";
    inputEmail.appendChild(emailP);

    // 박스 테두리 빨간색으로 변경
    emailInput.classList.add("error-border");
  } else {
    // 박스 테두리 빨간색으로 변경하는 클래스 제거
    emailInput.classList.remove("error-border");

    // p 태그 내 에러메시지 문자열 제거
    emailP.textContent = "";
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
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // 에러 메시지 처리
  if (!emailRegex.test(email)) {
    // 박스 아래 에러 메시지 노출
    emailP.textContent = "올바른 이메일 주소가 아닙니다.";
    inputEmail.appendChild(emailP);

    // 박스 테두리 빨간색으로 변경
    emailInput.classList.add("error-border");
  } else {
    // 박스 테두리 빨간색으로 변경하는 클래스 제거
    emailInput.classList.remove("error-border");

    // p 태그 내 에러메시지 문자열 제거
    emailP.textContent = "";
  }
}

// 포커스 인 되면 에러메시지 리셋하는 함수
function resetEmailErrorMessage() {
  emailP.textContent = "";
}

emailInput.addEventListener("focusout", () => {
  validateEmailInput();
  validateEmailFormat();
});
emailInput.addEventListener("focusin", resetEmailErrorMessage);

// *---* 패스워드 에러메시지 *---* //

const inputPassword = document.querySelector(".input-password");
const inputPasswordSecond = document.querySelector(".input-password--second");

const passwordInput = document.querySelector(".password");
const passwordFirstInput = document.querySelector(".password--first-input");
const passwordSecondInput = document.querySelector(".password--second-input");

const passwordErrorMessage = document.querySelector(".password-error-message");
const passwordP = document.createElement("p");
passwordP.classList.add("input--helper-text__error");

// 비밀번호 값 입력했는지 확인하는 함수
function validatePasswordInput() {
  if (!passwordInput.value) {
    // 박스 아래 에러 메시지 노출
    passwordP.textContent = "비밀번호를 입력해 주세요.";
    inputPassword.appendChild(passwordP);

    // 박스 테두리 빨간색으로 변경
    passwordInput.classList.add("error-border");
  } else {
    // 박스 테두리 빨간색으로 변경하는 클래스 제거
    passwordInput.classList.remove("error-border");

    // p 태그 내 에러메시지 문자열 제거
    passwordP.textContent = "";
  }
}

// 포커스 인 되면 박스 에러메시지 리셋하는 함수
function resetPasswordErrorMessage() {
  passwordP.textContent = "";
}

// 비밀번호 유효성 검사 함수
function validatePassword() {
  if (
    passwordInput.value.length < 8 ||
    !/[a-zA-Z]/.test(passwordInput.value) ||
    !/[0-9]/.test(passwordInput.value)
  ) {
    // 첫번째 박스 아래 에러 메시지 노출
    passwordP.textContent =
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
    inputPassword.appendChild(passwordP);

    // 첫번째 박스 테두리 빨간색으로 변경
    passwordInput.classList.add("error-border");
  }
}

// 비밀번호 값과 비밀번호 확인 값 일치하는지 확인하는 함수
function validatePasswordConfirmation() {
  if (!(passwordInput.value === passwordSecondInput.value)) {
    // 두번째 박스 아래 에러 메시지 노출
    passwordP.textContent = "비밀번호가 일치하지 않아요.";
    inputPasswordSecond.appendChild(passwordP);

    // 두번째 박스 테두리 빨간색으로 변경
    passwordSecondInput.classList.add("error-border");
  }
}

passwordInput.addEventListener("focusout", () => {
  validatePasswordInput();
  validatePassword();
});
passwordFirstInput.addEventListener("focusin", resetPasswordErrorMessage);

passwordSecondInput.addEventListener("focusout", () => {
  validatePasswordInput();
  validatePassword();
  validatePasswordConfirmation();
});
passwordSecondInput.addEventListener("focusin", resetPasswordErrorMessage);

// *---* 비밀번호 토글 처리 *---* //

const passwordToggleButton = document.querySelector("#password-toggle");
passwordToggleButton.addEventListener("click", () =>
  togglePassword(passwordInput, passwordToggleButton)
);

const PasswordSecondToggleButton = document.querySelector("#second-password-toggle");
PasswordSecondToggleButton.addEventListener("click", () =>
  togglePassword(passwordSecondInput, PasswordSecondToggleButton)
);

// *---* 회원가입 시도 에러메시지 *---* //

const loginBtn = document.querySelector(".login .button");

async function signUp() {
  const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-up", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: emailInput.value,
      password: passwordInput.value
    }),
  });

  if (response.ok) {
    let link = "/folder";
    location.href = link;
    return;

  } else {
    // 알 수 없는 에러 발생
    const error = await response.json();
    console.error("회원가입 요청 실패:", error);
  }
}

async function checkEmailUnique() {
  const response = await fetch("https://bootcamp-api.codeit.kr/api/check-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: emailInput.value
    }),
  });

  if (response.ok) {
    if (emailP.textContent === "" && passwordP.textContent === "") {
      return signUp();

    } else {
      // 이외의 이메일 ID 입력 후 로그인 버튼 클릭 시 에러 메시지 노출
      emailP.textContent = "이메일을 확인해 주세요.";
      inputEmail.appendChild(emailP);

      // 이메일 박스 테두리 빨간색으로 변경
      emailInput.classList.add("error-border");

      // 이외의 패스워드 입력 후 로그인 버튼 클릭 시 에러 메시지 노출
      passwordP.textContent = "비밀번호를 확인해 주세요.";
      inputPassword.appendChild(passwordP);

      // 패스워드 박스 테두리 빨간색으로 변경
      passwordInput.classList.add("error-border");
    }

  } else {
    if (response.status === 409) {
      // 이메일 중복 에러 메시지 표시
      emailP.textContent = "이미 사용 중인 이메일입니다.";
      inputEmail.appendChild(emailP);

    } else {
      // 알 수 없는 에러 발생
      const error = await response.json();
      console.error("이메일 중복 확인 실패:", error);
    }
  }
}

loginBtn.addEventListener("click", checkEmailUnique);
