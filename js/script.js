let productsListHTML = document.querySelector(".productList");
let productsList = [];
let cartList = [];
// displaying our produts, stored in json file to web page.
const getProducts = () => {
  fetch("product.json")
    .then((response) => response.json())
    .then((data) => {
      productsList = data;
      cartList = getCartList();
      addProduct();
      addToCart();
    });
};
getProducts();

setInterval(() => {
  document.getElementById("sort").addEventListener("change", function () {
    var selectedOption = this.value;
    // Call your function based on the selected option
    if (selectedOption === "price") {
      sortByPrice();
    } else if (selectedOption === "name") {
      sortByName();
    } else {
      sortDefault();
    }
  });
}, 1000);

const addProduct = () => {
  productsListHTML.innerHTML = "";
  if (productsList.length > 0) {
    productsList.forEach((product) => {
      let newProduct = document.createElement("div");
      newProduct.classList.add("item");
      newProduct.innerHTML = `<img
        src="${product.image}"
        alt="image of ${product.name}"
      />
      <span class="productName">${product.name}</span>
      <div class="price">$${product.price}</div>
      <button class="addCart">Add To Cart</button>
      `;
      productsListHTML.appendChild(newProduct);
    });
  }
};
function sortByPrice() {
  // Function to sort by price
  productsList.sort((a, b) => a.price - b.price);
  addProduct();
}

function sortByName() {
  // Function to sort by name
  productsList.sort((a, b) => {
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();
    return nameA.localeCompare(nameB);
  });
  addProduct();
}
function sortDefault() {
  productsList.sort((a, b) => a.id - b.id);
  addProduct();
}

const getCartList = () => {
  // Retrieve the productsList array from localStorage
  const storedCart = localStorage.getItem("cartList");
  // Parse the retrieved JSON string into an array
  return storedCart ? JSON.parse(storedCart) : [];
};

const setCartList = () => {
  // Convert the productsList array to a JSON string
  const cartJson = JSON.stringify(cartList);
  // Save the JSON string to localStorage
  localStorage.setItem("cartList", cartJson);
};

const clearCartList = () => {
  const cartList = []; // Set cartList to an empty array
  const cartJson = JSON.stringify(cartList); // Convert the empty array to a JSON string
  localStorage.setItem("cartList", cartJson); // Save the empty cartList to localStorage
};

// Function to add a product to the cart
const addToCart = () => {
  // Select all "Add To Cart" buttons
  const addToCartButtons = document.querySelectorAll(".addCart");

  // Iterate over each button and attach click event listener
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Get the product details from the corresponding item
      const item = button.closest(".item");
      const productName = item.querySelector(".productName").innerHTML;
      const itemPrice = item.querySelector(".price").innerHTML;
      const imgSrc = item.querySelector("img").getAttribute("src");
      const btn = item.querySelector(".addCart");

      // Check if the product already exists in the cart
      const existingItemIndex = cartList.findIndex(
        (item) => item.name === productName
      );

      if (existingItemIndex !== -1) {
        // If the product exists, update its quantity
        cartList[existingItemIndex].quantity++;
      } else {
        // If the product doesn't exist, add it to the cart
        const cartItem = {
          name: productName,
          price: itemPrice,
          image: imgSrc,
          quantity: 1, // Initialize quantity to 1 for new items
        };
        cartList.push(cartItem);
      }

      // Save the updated cartList array to localStorage
      setCartList();

      btn.style.backgroundColor = "#336622";
      btn.textContent = "Added";
      setTimeout(() => {
        btn.style.backgroundColor = "#333";
        btn.textContent = "Add To Cart";
      }, 1000);
    });
  });
};
//
const displayCart = (item) => {
  let cartItem = document.querySelector(".table1");
  let cartRow = document.createElement("tr");
  cartRow.classList.add("cart-list");
  cartRow.innerHTML = `<td>
        <div class="cart-item">
          <img class="item-image" src="${item.image}" alt="${item.name}" />
          <div class="item-info">
            <p class="product-name">${item.name}</p>
            <p>Price: <span id="item_price">${item.price}</span>.00</p>
            <p id="delete">
              <span>Delete</span>
              <i id="delete_item" class="fa-solid fa-trash"></i>
            </p>
          </div>
        </div>
      </td>
      <td>
        <button
          class="change-qty increase_qty"
          style="border-radius: 10px 0 0 10px"
          >+</button
        ><span class="change-qty item_qty" style="padding: 9px 15px"
          >${item.quantity}</span
        ><button
          class="change-qty decrease_qty"
          style="border-radius: 0 10px 10px 0"
          >-</button
        >
      </td>
      <td>$ <span id="total">00.00</span></td>
    `;
  cartItem.appendChild(cartRow);
};

getCartList().forEach((item) => {
  displayCart(item);
});

const increaseQty = (event) => {
  const qtyElement = event.target.parentElement.querySelector(".item_qty");
  qtyElement.textContent = parseInt(qtyElement.textContent) + 1;
  totalEach();
  calculateTotal();
};

// Function to decrement quantity
const decreaseQty = (event) => {
  const qtyElement = event.target.parentElement.querySelector(".item_qty");
  const newQty = parseInt(qtyElement.textContent) - 1;
  if (newQty >= 0) {
    qtyElement.textContent = newQty;
    totalEach();
    calculateTotal();
  }
};

// Function to delete item
const deleteItem = (event) => {
  const itemRow = event.target.closest(".cart-list");
  itemRow.remove();

  // Get the index of the item to be deleted
  const itemName = itemRow.querySelector(".product-name").textContent;
  const itemIndex = cartList.findIndex((item) => item.name === itemName);

  // Remove the item from the cartList array
  cartList.splice(itemIndex, 1);

  // Update the localStorage with the modified cartList array
  setCartList();
  emptyCart();
  window.location.reload();
};
let emptyCart = () => {
  if (document.querySelector(".table1").childElementCount <= 1) {
    document.getElementById("empty").style.display = "visible";
  } else {
    document.getElementById("empty").style.display = "none";
  }
};
emptyCart();

// Attach event listeners for increase/decrease/delete buttons
document.querySelectorAll(".increase_qty").forEach((button) => {
  button.addEventListener("click", increaseQty);
});

document.querySelectorAll(".decrease_qty").forEach((button) => {
  button.addEventListener("click", decreaseQty);
});

document.querySelectorAll("#delete_item").forEach((button) => {
  button.addEventListener("click", deleteItem);
});
function totalEach() {
  document.querySelectorAll(".cart-list").forEach((item) => {
    let itemQty = item.querySelector(".item_qty").textContent;
    let itemPrice = item.querySelector("#item_price").textContent;
    let itemPriceOnly = itemPrice.replace("$", "");
    let total = itemQty * itemPriceOnly;
    item.querySelector("#total").innerHTML = `${total}.00`;
  });
}
totalEach();
let calculateTotal = () => {
  let total = 0;

  document.querySelectorAll(".cart-list").forEach((item) => {
    let itemTotal = item.querySelector("#total").textContent;
    total += parseInt(itemTotal);
  });

  document.getElementById("sub_total").innerHTML = total.toFixed(2);
  let shipping = document.getElementById("shipping");
  let shippingCost = 0;
  if (total > 1000) {
    shipping.innerHTML = "Free";
  } else {
    shippingCost = (10 / 100) * total;
    shipping.innerHTML = shippingCost.toFixed(2);
  }
  let finalTotal = total + shippingCost;
  document.getElementById("cart_total").innerHTML = finalTotal.toFixed(2);
  document.getElementById("final_total").innerHTML = finalTotal.toFixed(2);
};

calculateTotal();

const clearITEM = () => {
  clearCartList();
  setInterval(() => {
    window.location.reload();
  }, 2000);
};
// function to toggle paid message
const showPaidMsg = () => {
  let msg = $(".paid");
  if (msg.css("display") == "flex") {
    msg.css("display", "none");
  } else {
    msg.css("display", "flex");
  }
};
document.querySelector(".payment").addEventListener("click", play);

// function to toggle visibility of password
function play() {
  if (document.querySelector(".table1").childElementCount <= 1) {
    alert("Please add items to cart before payment");
    window.location.href = "product.html";
    return;
  } else {
    if (
      localStorage.getItem("username") == null ||
      localStorage.getItem("username") == "User"
    ) {
      alert("Please login to make payment");
      window.location.href = "sign_in.html";
    } else {
      clearITEM();
      showPaidMsg();
    }
  }
}
