let headers = document.querySelectorAll(".header");

headers.forEach((header) => {
  header.innerHTML = `
      <nav class="navbar">
        <div class="logo" onclick="goToPage('index.html')">
          <img
            src="/src/logoo.png"
            alt="logo of we care nature"
            height="100%"
            width="160px"
          />
        </div>
        <div class="nav-content-1">
          <ul style="font-size: 18px">
            <li onclick="goToPage('index.html')">Home</li>
            <li onclick="goToPage('product.html')">Products</li>
            <li onclick="goToPage('about.html')">About Us</li>
            <li onclick="goToPage('contact.html')">Contact</li>
          </ul>
        </div>
        <div class="nav-content-2">
          <ul>
            <li>
              <span onclick="toggleDisplay('sidebar_1')"
                ><i class="fa-solid fa-user"></i
              ></span>
            </li>
           
            <li>
              <span onclick="goToPage('cart.html')"
                ><i class="fa-solid fa-cart-shopping"></i
              ></span>
            </li>
          </ul>
        </div>
        <li id="bars">
            <span class="bars" onclick="toggleDisplay('sidebar_2')"
              ><i class="fa-solid fa-bars" style="color: white"></i
            ></span>
          </li>
      </nav>
      <div class="sidebar" id="sidebar_1">
        <ul style="list-style: none; width: 100%">
          <span class="sidebar-items" style="font-size: 12px">
            Hello<i
              class="fa-regular fa-xl fa-circle-xmark sidebar-items-icons"
              id="circle-cross"
              onclick="hideElement('sidebar_1')"
            ></i>
          </span>
          <li class="home_user">User</li>
          <li class="sidebar-items">
            <span>Wishlist</span>
            <i class="fa-solid fa-heart sidebar-items-icons"></i>
          </li>
          <li class="sidebar-items" onclick="goToPage('cart.html')">
            <span >Cart</span>
            <i class="fa-solid fa-cart-shopping sidebar-items-icons" ;></i>
          </li>

          <li class="sidebar-items">
            <span class="isLogged">Login/Register</span>
            <i class="fa-solid fa-right-from-bracket sidebar-items-icons"></i>
          </li>
        </ul>
      </div>
      <div class="sidebar" id="sidebar_2">
        <ul style="list-style: none; width: 100%">
          <li
            style="
              margin: -20px 0 20px 0;
              background: white;
              border-bottom: 1px solid black;
            "
          >
            <img src="/src/logo-clear.png" alt="" width="100%" />
          </li>
          <li
            style="font-size: 12px; display: flex; align-items: center"
            class="sidebar-items"
          >
            Hello<i
              class="fa-regular fa-xl fa-circle-xmark sidebar-items-icons"
              id="circle-cross"
              onclick="hideElement('sidebar_2')"
            ></i>
          </li>

          <li class="home_user">User</li>
          <li class="sidebar-items2"><span>Home</span></li>
          <li class="sidebar-items2">
            <span onclick="goToPage('product.html')">Products</span>
          </li>
          <li class="sidebar-items2"><span>Shop</span></li>
          <li class="sidebar-items2"><span>About</span></li>
          <li class="sidebar-items2" style="margin-bottom: 25px">
            <span>Contact</span>
          </li>
          <li class="sidebar-items">
            <span> Wishlist</span>
            <i class="fa-solid fa-heart sidebar-items-icons"></i>
          </li>
          <li class="sidebar-items">
            <span onclick="goToPage('cart.html')">Cart</span>
            <i class="fa-solid fa-cart-shopping sidebar-items-icons" ;></i>
          </li>
          <li class="sidebar-items" onclick="goToPage('sign_in.html')">
            <span class="isLogged">Login/Register</span>
            <i class="fa-solid fa-right-from-bracket sidebar-items-icons"></i>
          </li>
        </ul>
      </div>`;
});
// else {
//   const addToCartButtons = document.querySelectorAll(".addCart");
//   addToCartButtons.forEach((button) => {
//     button.addEventListener("click", (btn) => {
//       btn.preventDefault();
//       window.location.href = "sign_in.html";
//     });
//   });
// }

//

let validUser = localStorage.getItem("username");
let homeUser = document.querySelectorAll(".home_user");
let login = document.querySelectorAll(".isLogged");
if (validUser != "" && validUser != "User") {
  for (let i = 0; i < homeUser.length; i++) {
    homeUser[i].innerHTML = validUser.toUpperCase();
  }
  for (let i = 0; i < login.length; i++) {
    login[i].innerHTML = "Sign Out";
  }
}

document.querySelectorAll(".isLogged").forEach((element) => {
  element.addEventListener("click", () => {
    if (validUser == "" || validUser == "User") {
      window.location.href = "sign_in.html";
    } else {
      localStorage.setItem("username", "User");
      window.location.href = "index.html";
    }
  });
});
function hideElement(id) {
  $(`#${id}`).css("display", "none");
}
function showElement(id) {
  $(`#${id}`).css("display", "flex");
}
function toggleDisplay(id) {
  if ($(`#${id}`).css("display") === "none") {
    $(`#${id}`).css("display", "flex");
  } else {
    $(`#${id}`).css("display", "none");
  }
}
