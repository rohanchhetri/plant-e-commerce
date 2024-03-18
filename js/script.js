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
      <div>
      <button class="addCart">Add To Cart</button>
      <span class="heart"><i class="fa-solid fa-heart"></i></span>
      </div>`;
      productsListHTML.appendChild(newProduct);
    });
  }
};

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

      // Optionally, you can display an alert or perform any other action
      alert(productName + " added to cart");
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
        <span
          class="change-qty increase_qty"
          style="border-radius: 10px 0 0 10px"
          >+</span
        ><span class="change-qty item_qty" style="padding: 10px 15px"
          >${item.quantity}</span
        ><span
          class="change-qty decrease_qty"
          style="border-radius: 0 10px 10px 0"
          >-</span
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
  let itemElement = event.target.parentElement.querySelector(".item_qty");
  let itemQty = itemElement.innerHTML;
  itemQty++;
  itemElement.innerHTML = itemQty;
  calculateTotal(itemQty);
  alert(hi);
};
let increaseBtn = document.querySelectorAll(".increase_qty");
increaseBtn.forEach((btn) => {
  btn.addEventListener("click", increaseQty);
});

const decreaseQty = (event) => {
  let itemElement = event.target.parentElement.querySelector(".item_qty");
  let itemQty = itemElement.innerHTML;
  if (itemQty > 1) {
    itemQty--;
    itemElement.innerHTML = itemQty;
    calculateTotal(itemQty);
  }
};
let decreaseBtn = document.querySelectorAll(".decrease_qty");
decreaseBtn.forEach((btn) => {
  btn.addEventListener("click", decreaseQty);
});

const calculateTotal = (itemQty) => {
  if (itemQty === undefined) {
    itemQty = 1;
  }
  let price = document.getElementById("item_price").innerHTML;
  let total = itemQty * price;
  let shipping = document.getElementById("shipping");
  let shippingCost = 0;
  document.getElementById("total").innerHTML = total.toFixed(2);
  document.getElementById("sub_total").innerHTML = total.toFixed(2);
  if (total > 1000) {
    shipping.innerHTML = "Free";
  } else {
    shippingCost = (10 / 100) * total;
    shipping.innerHTML = shippingCost.toFixed(2);
  }
  document.getElementById("cart_total").innerHTML = (
    total + shippingCost
  ).toFixed(2);
};
calculateTotal();

let parentElement = document.querySelectorAll("#delete");
parentElement.forEach(function (parentElement) {
  parentElement.addEventListener("click", (event) => {
    event.target.closest("tr").remove();
  });
});
const deleteItem = (event) => {
  event.stopPropagation();
  event.target.parentElement.closest("tr").remove();
};
