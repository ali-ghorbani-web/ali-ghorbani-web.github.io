let $ = document;
let PhoneNumber = $.getElementById("phoneNumber");
let password = $.getElementById("password");
let confirmPassword = $.getElementById("confirmPass");
let btnSubmit = $.getElementById("btnSubmit");
let eyeIcon = $.querySelectorAll(".eyeInput");

// Error message
PhoneNumber.addEventListener("blur", function () {
  let parentElem = PhoneNumber.parentElement.parentElement;
  if (PhoneNumber.value.length != 11) {
    parentElem.lastElementChild.style.display = "block";
  } else {
    parentElem.lastElementChild.style.display = "none";
  }
});
password.addEventListener("blur", function () {
  let parentElem = password.parentElement.parentElement;
  if (password.value.length < 8 || password.value.length > 16) {
    parentElem.lastElementChild.style.display = "block";
  } else {
    parentElem.lastElementChild.style.display = "none";
  }
});
confirmPassword.addEventListener("blur", function () {
  let parentElem = confirmPassword.parentElement.parentElement;
  if (confirmPassword.value != password.value) {
    parentElem.lastElementChild.style.display = "block";
  } else {
    parentElem.lastElementChild.style.display = "none";
  }
});
btnSubmit.addEventListener("click", function (event) {
  event.preventDefault();
});

// not a paste
confirmPassword.addEventListener("paste", function (event) {
  event.preventDefault();
});

// eye icon
eyeIcon.forEach(function (item) {
  item.addEventListener("click", function () {
    if (item.previousElementSibling.type == "password") {
      item.classList.remove("bi-eye-slash-fill");
      item.classList.add("bi-eye-fill");
      item.previousElementSibling.type = "text";
    } else {
      item.classList.remove("bi-eye-fill");
      item.classList.add("bi-eye-slash-fill");
      item.previousElementSibling.type = "password";
    }
  });
});