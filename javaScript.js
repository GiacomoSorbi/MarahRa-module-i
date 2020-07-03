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

const form = document.getElementsByTagName("form")[0];
const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");

email.addEventListener("input", function (event) {
  if (email.validity.valid) {
    emailError.innerHTML = "";
    emailError.className = "error";
  } else {
    showError();
  }
});

form.addEventListener("submit", function (event) {
  if (!email.validity.valid) {
    showError();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    emailError.textContent = "Please provide an email address";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Please enter a valid email address";
  }
  emailError.className = "error active";
}
