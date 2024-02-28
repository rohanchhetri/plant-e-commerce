let submissionHandler = (event) => {
  dataValidation(event);
};
let dataValidation = (event) => {
  let isValidEmail = emailValidation();
  let isValidPassword = passwordValidation();
  if (isValidEmail && isValidPassword) {
    passwordConfirmation(event);
  } else {
    event.preventDefault();
  }
};
let emailValidation = () => {
  let signupEmail = $(`#signup-email`).val();
  if (signupEmail !== "" && /@/.test(signupEmail)) {
    return true;
  } else {
    return false;
  }
};
let passwordValidation = () => {
  let signupUsername = $(`#signup-username`).val();
  let signupPassword = $(`#signup-password`).val();

  if (signupPassword !== "" && signupUsername !== "") {
    if (signupPassword.length >= 8 && signupPassword.length <= 24) {
      if (/\d/.test(signupPassword)) {
        if (/[A-Z]/.test(signupPassword)) {
          $(`#conditions`).css("display", "none");
          changeInputBorder("signup-password", "none");
          return true;
        } else {
          errorMessage("register-error", "Please fill all the above fields");
          return false;
        }
      } else {
        errorMessage("register-error", "Please fill all the above fields");
        return false;
      }
    } else {
      errorMessage("register-error", "Please fill all the above fields");
      changeInputBorder("red", "signup-password");
      return false;
    }
  } else {
    errorMessage("register-error", "Please fill all the above fields");
    return false;
  }
};

// function to check if password and confirm password are same
let passwordConfirmation = (event) => {
  if ($(`#signup-password`).val() === $(`#confirm-password`).val()) {
    $(`#register-form`).submit();
    window.alert("Registration successful!!!");
    setCredential();
  } else {
    errorMessage("register-error", "Passwords do not match");
    changeInputBorder("red", "confirm-password");
    event.preventDefault();
  }
};

//function to toggle visibility of password
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
goToPage = (page) => {
  window.location.href = `${page}`;
};
//
let errorMessage = (id, message) => {
  $("#" + id)
    .empty()
    .append(message);
};
//
let changeInputBorder = (color, id) => {
  if (color === "red") {
    $("#" + id).css("border", "1.5px solid red");
  } else {
    $("#" + id).css("border", "none");
  }
};
//function to save user credentials
let setCredential = () => {
  localStorage.setItem("username", $(`#signup-username`).val());
  localStorage.setItem("password", $(`#signup-password`).val());
  localStorage.setItem("email", $(`#signup-email`).val());
};
// function to retrive user credentials
let getCredential = (event) => {
  let storedUsername = localStorage.getItem("username");
  let storedPassword = localStorage.getItem("password");

  let enteredUsername = $(`#signin-username`).val();
  let enteredPassword = $(`#signin-password`).val();

  if (
    enteredUsername === storedUsername &&
    enteredPassword === storedPassword
  ) {
    $(`#signin-form`).submit();
  } else {
    event.preventDefault();
    errorMessage("login-error", "Incorrect username or password");
    changeInputBorder("red", "signin-username");
    changeInputBorder("red", "signin-password");
  }
};
