let label = document.getElementById("label");
let ShoppingCart = document.getElementById("shopping-cart");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();

let generateCartItems = () => {
  if (basket.length !== 0) {
    return (ShoppingCart.innerHTML = basket
      .map((x) => {
        let { id, item } = x;
        let search = readyMadeItems.find((y) => y.id === id) || [];
        let formattedPrice = search.price.toLocaleString(); // Format price with commas
        let totalPrice = (item * search.price).toLocaleString(); // Format total price with commas
        return `
      <div class="cart-item">
        <div class="cart-product-image-box" >
          <img class="cart-item-image" width="100" src=${search.img} alt="" />
        </div>
        
        <div class="cart-details">
          <div class="title-price-x">
              <h4 class="title-price">
                <p>${search.name}</p>
                <span  class="cart-price">&#8358; ${formattedPrice}</span> <!-- Use formattedPrice -->
              </h4>
             
              
          </div>

          <div class="cart-buttons-tprice">
          <span  class="price">&#8358; ${totalPrice}</span> <!-- Use totalPrice -->
          <div class="buttons">
              <ion-icon class="reduceitem" onclick="decrement(${id})" name="remove-outline"></ion-icon>
              <div id=${id} class="quantity">${item}</div>
              <ion-icon class="additem" onclick="increment(${id})" name="add-outline"></ion-icon>
              </div>
          </div>

          
          <div class="removeitem-box" onclick="removeItem(${id})" >
          
          <ion-icon class="removeitem" name="trash-outline"></ion-icon>
          <p>REMOVE ITEM</p>
          </div>
        </div>
      </div>
      `;
      })
      .join(""));
  } else {
    ShoppingCart.innerHTML = ``;
    label.innerHTML = `
    <span class="cart-is-empty">Cart is Empty</span>
    <a href="index.html">
      <button class="HomeBtn">Back to home</button>
    </a>
    `;
  }
};

generateCartItems();

let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  generateCartItems();
  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
};
let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(selectedItem.id);
  basket = basket.filter((x) => x.item !== 0);
  generateCartItems();
  localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  // console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculation();
  TotalAmount();
};

let removeItem = (id) => {
  let selectedItem = id;
  // console.log(selectedItem.id);
  basket = basket.filter((x) => x.id !== selectedItem.id);
  generateCartItems();
  TotalAmount();
  localStorage.setItem("data", JSON.stringify(basket));
};

let clearCart = () => {
  basket = [];
  generateCartItems();
  localStorage.setItem("data", JSON.stringify(basket));
};

let TotalAmount = () => {
  if (basket.length !== 0) {
    let amount = basket
      .map((x) => {
        let { item, id } = x;
        let search = readyMadeItems.find((y) => y.id === id) || [];

        return item * search.price;
      })
      .reduce((x, y) => x + y, 0);
    // console.log(amount);
    label.innerHTML = `
    <span class="total-bill" >TOTAL BILL : &#8358; ${amount}</span>
    <div>
    <button class="checkout">Checkout</button>
    <button onclick="clearCart()" class="removeAll">Clear Cart</button>
    </div>
    `;
  } else return;
};

TotalAmount();
