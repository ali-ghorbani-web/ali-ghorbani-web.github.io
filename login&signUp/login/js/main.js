let $ = document;
let PhoneNumber = $.getElementById("phoneNumber");
let password = $.getElementById("password");
let confirmPassword = $.getElementById("confirmPass");
let btnSubmit = $.getElementById('btnSubmit')

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
btnSubmit.addEventListener('click', function(event) {
  event.preventDefault();
})

// not a paste
password.addEventListener('paste', function(event) {
  event.preventDefault();
})

let outsideModal = $.getElementById('outsideModal')
let modal = $.getElementById('modal')
let hiddenModal = $.getElementById('hiddenModal')
// outside modal
outsideModal.addEventListener('click', function(event) {
  event.preventDefault();
  modal.classList.add('show-modal')
})
// hidden modal
hiddenModal.addEventListener('click', function(event) {
  modal.classList.remove('show-modal')
})
