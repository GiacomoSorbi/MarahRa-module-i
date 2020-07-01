function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "REPORT ON BREXIT";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "REPORT ON BREXIT";
    moreText.style.display = "inline";
  }
}
function newFunction() {
  var dots2 = document.getElementById("dots2");
  var moreText2 = document.getElementById("more2");
  var btnText2 = document.getElementById("newBtn");

  if (dots2.style.display === "none") {
    dots2.style.display = "inline";
    btnText2.innerHTML = "PKG PRIME MINISTER";
    moreText2.style.display = "none";
  } else {
    dots2.style.display = "none";
    btnText2.innerHTML = "PKG PRIME MINISTER";
    moreText2.style.display = "inline";
  }
}

function myNewFunction() {
  var dots3 = document.getElementById("dots3");
  var moreText3 = document.getElementById("more3");
  var btnText3 = document.getElementById("newerBtn");

  if (dots3.style.display === "none") {
    dots3.style.display = "inline";
    btnText3.innerHTML = "RESEARCH ARTICLE COVID-19";
    moreText3.style.display = "none";
  } else {
    dots3.style.display = "none";
    btnText3.innerHTML = "RESEARCH ARTICLE COVID-19";
    moreText3.style.display = "inline";
  }
}

function myNewestFunction() {
  var dots4 = document.getElementById("dots4");
  var moreText4 = document.getElementById("more4");
  var btnText4 = document.getElementById("newestBtn");

  if (dots4.style.display === "none") {
    dots4.style.display = "inline";
    btnText4.innerHTML = "REPORT ON COVID-19";
    moreText4.style.display = "none";
  } else {
    dots4.style.display = "none";
    btnText4.innerHTML = "REPORT ON COVID-19";
    moreText4.style.display = "inline";
  }
}

function clicked() {
  confirm("Do you agree to terms & conditions?");

  alert("Thank you for applying!");
}

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
