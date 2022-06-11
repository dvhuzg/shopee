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
const item = document.getElementById("row-item");
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
fetch("https://fakestoreapi.com/products?limit=40")
  .then((res) => res.json())
  .then(function (datas) {
    var htmls = datas.map((data) => {
      return `
    <div class="col l-2-4 m-4 c-6">
    <a href="" class="home-product-item-link">
      <div class="home-product-item">
        <div class="home-product-item__img" style="background-image: url(${
          data.image
        })"></div>
        <h4 class="home-product-item__name">${data.title}</h4>
        <div class="home-product-item__price">
          <span class="home-product-item__price-old">1.200$</span>
          <span class="home-product-item__price-current">${data.price}$</span>
        </div>
        <div class="home-product-item__action">
          <span class="home-product-item__action-like liked">
            <i class="like-empty far fa-heart"></i>
            <i class="like-fill fas fa-heart"></i>
          </span>
          <div class="home-product-item__action-rating">
            <i class="gold-star fas fa-star"></i>
            <i class="gold-star fas fa-star"></i>
            <i class="gold-star fas fa-star"></i>
            <i class="gold-star fas fa-star"></i>
            <i class="far fa-star"></i>
          </div>
          <span class="home-product-item__sold">${
            data.rating.count
          } đã bán<noscript></noscript></span>
        </div>
        <div class="home-product-item__origin">
          <span class="home-product-item__brand">${data.category}</span>
          <span class="home-product-item__origin-name">Japan</span>
        </div>
        <div class="home-product-item__favorite">
          <i class="fas fa-check"></i><span>Yêu thích</span>
        </div>
        <div class="home-product-item__sale-off">
          <span class="home-product-item__sale-off-percent">${
            Math.floor(Math.random() * 100)
          }%</span>
          <span class="home-product-item__sale-off-label">GIẢM</span>
        </div>
      </div>
    </a>
    
  </div>
    `;
    });
    var html = htmls.join("");
    item.innerHTML = html;
  });
