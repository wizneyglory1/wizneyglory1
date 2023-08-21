let shop = document.getElementById("shop");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
  return (shop.innerHTML = readyMadeItems
    .map((x) => {
      let { id, name, price, desc, img, addtocart } = x;
      let formattedPrice = price.toLocaleString(); // Format price with commas
      let search = basket.find((x) => x.id === id) || [];
      return `
      
          <div id=product-id-${id} class="item">
        <div class="product-image-box" >
          <img class="item-image"  src=${img} alt="picture of item">
        </div>
        <div class="details">
          <h4>${name}</h4>
          <p class="item-description">${desc}</p>
          <div class="price-quantity">
            <span  class="price">&#8358; ${formattedPrice} </span> <!-- Use formattedPrice -->
            <div class="buttons">
            <ion-icon class="reduceitem" onclick="decrement(${id})" name="remove-outline"></ion-icon>
              <div id=${id} class="quantity">
              ${search.item === undefined ? 0 : search.item}
              </div>
              <ion-icon class="additem" onclick="increment(${id})" name="add-outline"></ion-icon>
            </div>
          </div>
        </div>
        <a  onclick="increment(${id})" class="btn btn-primary btn-addtocart" >${addtocart}</a>
      </div>
    
    `;
    })
    .join(""));
};

generateShop();

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

  // console.log(basket);
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
  // console.log(basket);
  localStorage.setItem("data", JSON.stringify(basket));
};
let update = (id) => {
  let search = basket.find((x) => x.id === id);
  // console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();
