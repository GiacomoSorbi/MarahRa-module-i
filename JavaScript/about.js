var openPopUp = document.querySelectorAll("[data-modal-target]");
var closePopUp = document.querySelectorAll("[data-close-button]");

openPopUp.forEach((button) => {
  button.addEventListener("click", () => {
    var modal = document.querySelector(button.dataset.modalTarget);
    openModalPopUp(modal);
  });
});
closePopUp.forEach((button) => {
  button.addEventListener("click", () => {
    var modal = button.closest(".modal");
    closeModalPopUp(modal);
  });
});

function openModalPopUp(modal) {
  if (modal == null) return;
  modal.classList.add("active");
}

function closeModalPopUp(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
}

let openPopUpNew = document.querySelectorAll("[data-modal-target]");
let closePopUpNew = document.querySelectorAll("[data-close-button]");

openPopUpNew.forEach((button) => {
  button.addEventListener("click", () => {
    var modal2 = document.querySelector(button.dataset.modalTarget);
    openModalPopUpNew(modal2);
  });
});
closePopUpNew.forEach((button) => {
  button.addEventListener("click", () => {
    var modal2 = button.closest(".modal2");
    closeModalPopUpNew(modal2);
  });
});

function openModalPopUpNew(modal2) {
  if (modal2 == null) return;
  modal2.classList.add("active");
}

function closeModalPopUpNew(modal2) {
  if (modal2 == null) return;
  modal2.classList.remove("active");
}

let openPopUpNewer = document.querySelectorAll("[data-modal-target]");
let closePopUpNewer = document.querySelectorAll("[data-close-button]");

openPopUpNewer.forEach((button) => {
  button.addEventListener("click", () => {
    var modal3 = document.querySelector(button.dataset.modalTarget);
    openModalPopUpNewer(modal3);
  });
});
closePopUpNewer.forEach((button) => {
  button.addEventListener("click", () => {
    var modal3 = button.closest(".modal3");
    closeModalPopUpNewer(modal3);
  });
});

function openModalPopUpNewer(modal3) {
  if (modal3 == null) return;
  modal3.classList.add("active");
}

function closeModalPopUpNewer(modal3) {
  if (modal3 == null) return;
  modal3.classList.remove("active");
}
