const headerSearch = document.getElementById("headerSearch");
const container = document.getElementById("container");
const headerCart = document.getElementById("headerCart");
const headerMobileBar = document.getElementById("header__mobile-bar");
const navBar = document.getElementById("nav-bar");
const logIn = document.getElementById("login");
const register = document.getElementById("register");
const modal = document.getElementById("modal");
const registerForm = document.getElementById("register_form");
const loginForm = document.getElementById("login_form");
const switch_btn = document.querySelectorAll(".auth-form__switch-btn");
showHeaderSearch = () => {
  if (headerSearch.classList.contains("openSearch") == false) {
    headerSearch.style.display = "flex";
    headerSearch.classList.add("openSearch");
  } else {
    headerSearch.style.display = "none";
    headerSearch.classList.remove("openSearch");
  }
};
container.onclick = () => {
  if (headerSearch.classList.contains("openSearch") == true) {
    headerSearch.classList.remove("openSearch");
    headerSearch.style.display = "none";
  }
};
headerCart.onclick = () => {
  if (headerCart.classList.contains("showCartList") == false) {
    headerCart.classList.add("showCartList");
    document.getElementsByClassName("header__cart-list").style.display =
      "block";
  } else {
    headerCart.classList.remove("showCartList");
    document.getElementsByClassName("header__cart-list").style.display = "none";
  }
};
headerMobileBar.onclick = () => {
  if (navBar.classList.contains("active")) {
    navBar.classList.remove("active");
    navBar.style.transform = "translateX(-100%)";
  } else {
    navBar.classList.add("active");
    navBar.style.transform = "translateX(0%)";
  }
};
logIn.onclick = () => {
  modal.classList.remove("disable");
  modal.classList.add("active");
  registerForm.classList.add("disable");
  loginForm.classList.remove("disable");
};
register.onclick = () => {
  modal.classList.remove("disable");
  modal.classList.add("active");
  registerForm.classList.remove("disable");
  loginForm.classList.add("disable");
};
switch_btn.forEach(
  (sw) =>
    (sw.onclick = () => {
      if (registerForm.classList.contains("disable")) {
        registerForm.classList.remove("disable");
        loginForm.classList.add("disable");
      } else {
        registerForm.classList.add("disable");
        loginForm.classList.remove("disable");
      }
    })
);
document.getElementById("modal__overlay").onclick = () => {
  modal.classList.add("disable");
};
