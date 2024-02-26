let signupEmail = $(`#signup-email`).val();
let signupUsername = $(`#signup-username`).val();
let signinUsername = $(`#signin-username`).val();
let signinPassword = $(`#signin-password`).val();
let submissionHandler = (event) => {
  event.preventDefault();
  passwordConfirmation();
};
let passwordConfirmation = () => {
  let signupPassword = $(`#signup-password`).val();
  let confirmPassword = $(`#confirm-password`).val();
  //clear previous error message
  $("#error-msg").empty();
  if (signupPassword !== confirmPassword) {
    $(`#error-msg`).append(`*Passwords do not match`);
  } else {
    $(`#register-form`).submit();
  }
};
showPassword = (id, iconc) => {
  let passwordInput = $(`#${id}`);
  let iconContainer = $(`#${iconc}`);
  let icon;
  if (passwordInput.prop("type") === "password") {
    passwordInput.prop("type", "text");
    icon = $(`<i class="fa-regular fa-eye" style="color: #000000"></i
    >`);
  } else {
    icon = $(`<i class="fa-regular fa-eye-slash" style="color: #000000"></i
    >`);
    passwordInput.prop("type", "password");
  }
  $(iconContainer).empty().append(icon);
};
iconChange = () => {
  let currentIcon = $(`.icon`);
  if (passwordInput.prop("")) {
    currentIcon = "a";
  }
};
goToPage = (page) => {
  window.location.href = `${page}`;
};
