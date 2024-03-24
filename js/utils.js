export function togglePassword(input, toggleButton) {
  if (input.getAttribute("type") === "password") {
    input.setAttribute("type", "text");
    toggleButton.getElementsByTagName("img")[0].setAttribute("src", "../icons/eye-on.svg");
    return;
  }
  input.setAttribute("type", "password");
  toggleButton.getElementsByTagName("img")[0].setAttribute("src", "../icons/eye-off.svg");
};

