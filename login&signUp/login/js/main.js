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
btnSubmit.addEventListener("click", function (event) {
  event.preventDefault();
});

// not a paste
password.addEventListener("paste", function (event) {
  event.preventDefault();
});

let outsideModal = $.getElementById("outsideModal");
let modal = $.getElementById("modal");
let hiddenModal = $.getElementById("hiddenModal");
// outside modal
outsideModal.addEventListener("click", function (event) {
  event.preventDefault();
  modal.classList.add("show-modal");
  document.querySelector('.dark-main').classList.add('show-dark-main')
});
// hidden modal
hiddenModal.addEventListener("click", function (event) {
  modal.classList.remove("show-modal");
  document.querySelector('.dark-main').classList.remove('show-dark-main')
});

// eye icon
eyeIcon.forEach(function (item) {
  item.addEventListener("click", function () {
    if (item.previousElementSibling.type == "password") {
      item.classList.remove("bi-eye-fill");
      item.classList.add("bi-eye-slash-fill");
      item.previousElementSibling.type = "text";
    } else {
      item.classList.remove("bi-eye-slash-fill");
      item.classList.add("bi-eye-fill");
      item.previousElementSibling.type = "password";
    }
  });
});
