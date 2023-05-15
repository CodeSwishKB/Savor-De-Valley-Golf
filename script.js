import { drinks, foods, dessert } from '/items.js';

const toTop = document.querySelector(".to-top")
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active")
  } else {
    toTop.classList.remove("active")
  }
})

let allItems = [...foods, ...drinks, ...dessert]

const menuItems = document.querySelector(".menu-items");
const searchInput = document.querySelector(".search-bar input")
const filterBtns = document.querySelectorAll(".filter-btn");

window.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(allItems);
});


searchInput.addEventListener('input', () => {
  const searchValue = searchInput.value.toLowerCase();
  const filteredDrinks = drinks.filter(drink => drink.itemName.toLowerCase().includes(searchValue))
  const filteredFoods = foods.filter(food => food.itemName.toLowerCase().includes(searchValue))
  const filteredDesserts = dessert.filter(dessert => dessert.itemName.toLowerCase().includes(searchValue))

  const allItems = filteredDrinks.concat(filteredFoods, filteredDesserts)

  menuItems.innerHTML = '';

  // adds all filtered items to item list
  allItems.forEach(item => {
    const itemElement = createItemElement(item);
    menuItems.appendChild(itemElement);
  });
});

function createItemElement(item) {
  const itemElement = document.createElement('div');
  itemElement.className = `menu-item ${item.subCategory}`;
  itemElement.innerHTML = `
    <img src="${item.imgurl}" alt="${item.itemName}" class="photo">
    <div class="item-info">
      <header>
        <h4>${item.itemName}</h4>
        <h4 class="price">₱${item.price}</h4>
        <h4>${item.size}</h4>
      </header>
      <p class="item-text">${item.description}</p>
      <button class="order-btn">Order</button>
    </div>
  `;
  return itemElement;
}

function displayMenuItems(items) {
  var appetizers = document.getElementById("appetizers")
  var beers = document.getElementById("beers")
  var cake = document.getElementById("cake")
  var carbonateDrink = document.getElementById("carbonate-drink")
  var cold = document.getElementById("cold")
  var coldCoffee = document.getElementById("cold-coffee")
  var custard = document.getElementById("custard")
  var fried = document.getElementById("fried")
  var hot = document.getElementById("hot")
  var hotCoffee = document.getElementById("hot-coffee")
  var mainDish = document.getElementById("main-dish")
  var pasta = document.getElementById("pasta")
  var pizza = document.getElementById("pizza")
  var salad = document.getElementById("salad")
  var shakes = document.getElementById("shakes")
  var shavedIce = document.getElementById("shaved-ice")
  var shortBread = document.getElementById("short-bread")
  var sideDish = document.getElementById("side-dish")
  var soups = document.getElementById("soups")

  const appetizersData = items.filter(item => item.subCategory == 'Appetizers')
  const beersData = items.filter(item => item.subCategory == 'Beers')
  const cakeData = items.filter(item => item.subCategory == 'Cake')
  const carbonateDrinksData = items.filter(item => item.subCategory == 'Carbonated Drink')
  const coldData = items.filter(item => item.subCategory == 'Cold')
  const coldCoffeeData = items.filter(item => item.subCategory == 'Cold Coffee')
  const custardData = items.filter(item => item.subCategory == 'Custard')
  const friedData = items.filter(item => item.subCategory == 'Fried')
  const hotData = items.filter(item => item.subCategory == 'Hot')
  const hotCoffeeData = items.filter(item => item.subCategory == 'Hot Coffee')
  const mainDishData = items.filter(item => item.subCategory == 'Main Dish')
  const pastaData = items.filter(item => item.subCategory == 'Pasta')
  const pizzasData = items.filter(item => item.subCategory == 'Pizza')
  const saladData = items.filter(item => item.subCategory == 'Salad')
  const shakesData = items.filter(item => item.subCategory == 'Shakes')
  const shavedIceData = items.filter(item => item.subCategory == 'Shaved ice')
  const shortBreadData = items.filter(item => item.subCategory == 'Shortbread')
  const sideDishData = items.filter(item => item.subCategory == 'Side Dish')
  const soupsData = items.filter(item => item.subCategory == 'Soups')

  appetizers.innerHTML = 
  `<div class="menu-items-container">
   <p id="category-name">Appetizers</p>
    ${appetizersData.map(item => {
    return `
        <div class="menu-item ${item.subCategory}">
          <img src="${item.imgurl}" alt="${item.itemName}" class="photo">
          <div class="item-info">
            <header>
              <h4>${item.itemName}</h4>
              <h4 class="price">₱${item.price}</h4>
              <h4>${item.size}</h4>
            </header>
            <p class="item-text">${item.description}</p>
            <button class="order-btn">Order</button> 
          </div>
        </div>
        </div>
      `;
  }).join('')}`;

  beers.innerHTML = 
  `<div class="menu-items-container">
   <p id="category-name">Beers</p>
    ${beersData.map(item => {
    return `
        <div class="menu-item ${item.subCategory}">
          <img src="${item.imgurl}" alt="${item.itemName}" class="photo">
          <div class="item-info">
            <header>
              <h4>${item.itemName}</h4>
              <h4 class="price">₱${item.price}</h4>
              <h4>${item.size}</h4>
            </header>
            <p class="item-text">${item.description}</p>
            <button class="order-btn">Order</button> 
          </div>
        </div>
        </div>
      `;
  }).join('')}`;

  carbonateDrink.innerHTML = 
  `<div class="menu-items-container">
   <p id="category-name">Carbonated Drinks</p>
    ${carbonateDrinksData.map(item => {
    return `
        <div class="menu-item ${item.subCategory}">
          <img src="${item.imgurl}" alt="${item.itemName}" class="photo">
          <div class="item-info">
            <header>
              <h4>${item.itemName}</h4>
              <h4 class="price">₱${item.price}</h4>
              <h4>${item.size}</h4>
            </header>
            <p class="item-text">${item.description}</p>
            <button class="order-btn">Order</button> 
          </div>
        </div>
        </div>
      `;
  }).join('')}`;

  cake.innerHTML = 
  `<div class="menu-items-container">
   <p id="category-name">Cakes</p>
    ${cakeData.map(item => {
    return `
        <div class="menu-item ${item.subCategory}">
          <img src="${item.imgurl}" alt="${item.itemName}" class="photo">
          <div class="item-info">
            <header>
              <h4>${item.itemName}</h4>
              <h4 class="price">₱${item.price}</h4>
              <h4>${item.size}</h4>
            </header>
            <p class="item-text">${item.description}</p>
            <button class="order-btn">Order</button> 
          </div>
        </div>
        </div>
      `;
  }).join('')}`;

  cold.innerHTML = 
  `<div class="menu-items-container">
   <p id="category-name">Colds</p>
    ${coldData.map(item => {
    return `
        <div class="menu-item ${item.subCategory}">
          <img src="${item.imgurl}" alt="${item.itemName}" class="photo">
          <div class="item-info">
            <header>
              <h4>${item.itemName}</h4>
              <h4 class="price">₱${item.price}</h4>
              <h4>${item.size}</h4>
            </header>
            <p class="item-text">${item.description}</p>
            <button class="order-btn">Order</button> 
          </div>
        </div>
        </div>
      `;
  }).join('')}`;

  coldCoffee.innerHTML = 
  `<div class="menu-items-container">
   <p id="category-name">Cold Coffees</p>
    ${coldCoffeeData.map(item => {
    return `
        <div class="menu-item ${item.subCategory}">
          <img src="${item.imgurl}" alt="${item.itemName}" class="photo">
          <div class="item-info">
            <header>
              <h4>${item.itemName}</h4>
              <h4 class="price">₱${item.price}</h4>
              <h4>${item.size}</h4>
            </header>
            <p class="item-text">${item.description}</p>
            <button class="order-btn">Order</button> 
          </div>
        </div>
        </div>
      `;
  }).join('')}`;

  custard.innerHTML = 
  `<div class="menu-items-container">
   <p id="category-name">Custards</p>
    ${custardData.map(item => {
    return `
        <div class="menu-item ${item.subCategory}">
          <img src="${item.imgurl}" alt="${item.itemName}" class="photo">
          <div class="item-info">
            <header>
              <h4>${item.itemName}</h4>
              <h4 class="price">₱${item.price}</h4>
              <h4>${item.size}</h4>
            </header>
            <p class="item-text">${item.description}</p>
            <button class="order-btn">Order</button> 
          </div>
        </div>
        </div>
      `;
  }).join('')}`;

  fried.innerHTML = 
  `<div class="menu-items-container">
   <p id="category-name">Fried Dessert</p>
    ${friedData.map(item => {
    return `
        <div class="menu-item ${item.subCategory}">
          <img src="${item.imgurl}" alt="${item.itemName}" class="photo">
          <div class="item-info">
            <header>
              <h4>${item.itemName}</h4>
              <h4 class="price">₱${item.price}</h4>
              <h4>${item.size}</h4>
            </header>
            <p class="item-text">${item.description}</p>
            <button class="order-btn">Order</button> 
          </div>
        </div>
        </div>
      `;
  }).join('')}`;

  hot.innerHTML = 
  `<div class="menu-items-container">
   <p id="category-name">Hots</p>
    ${hotData.map(item => {
    return `
        <div class="menu-item ${item.subCategory}">
          <img src="${item.imgurl}" alt="${item.itemName}" class="photo">
          <div class="item-info">
            <header>
              <h4>${item.itemName}</h4>
              <h4 class="price">₱${item.price}</h4>
              <h4>${item.size}</h4>
            </header>
            <p class="item-text">${item.description}</p>
            <button class="order-btn">Order</button> 
          </div>
        </div>
        </div>
      `;
  }).join('')}`;

  hotCoffee.innerHTML = 
  `<div class="menu-items-container">
   <p id="category-name">Hot Coffees</p>
    ${hotCoffeeData.map(item => {
    return `
        <div class="menu-item ${item.subCategory}">
          <img src="${item.imgurl}" alt="${item.itemName}" class="photo">
          <div class="item-info">
            <header>
              <h4>${item.itemName}</h4>
              <h4 class="price">₱${item.price}</h4>
              <h4>${item.size}</h4>
            </header>
            <p class="item-text">${item.description}</p>
            <button class="order-btn">Order</button> 
          </div>
        </div>
        </div>
      `;
  }).join('')}`;

  mainDish.innerHTML = 
  `<div class="menu-items-container">
   <p id="category-name">Main Dishes</p>
    ${mainDishData.map(item => {
    return `
        <div class="menu-item ${item.subCategory}">
          <img src="${item.imgurl}" alt="${item.itemName}" class="photo">
          <div class="item-info">
            <header>
              <h4>${item.itemName}</h4>
              <h4 class="price">₱${item.price}</h4>
              <h4>${item.size}</h4>
            </header>
            <p class="item-text">${item.description}</p>
            <button class="order-btn">Order</button> 
          </div>
        </div>
        </div>
      `;
  }).join('')}`;

  pasta.innerHTML = 
  `<div class="menu-items-container">
   <p id="category-name">Pastas</p>
    ${pastaData.map(item => {
    return `
        <div class="menu-item ${item.subCategory}">
          <img src="${item.imgurl}" alt="${item.itemName}" class="photo">
          <div class="item-info">
            <header>
              <h4>${item.itemName}</h4>
              <h4 class="price">₱${item.price}</h4>
              <h4>${item.size}</h4>
            </header>
            <p class="item-text">${item.description}</p>
            <button class="order-btn">Order</button> 
          </div>
        </div>
        </div>
      `;
  }).join('')}`;

  pizza.innerHTML = 
  `<div class="menu-items-container">
   <p id="category-name">Pizzas</p>
    ${pizzasData.map(item => {
    return `
        <div class="menu-item ${item.subCategory}">
          <img src="${item.imgurl}" alt="${item.itemName}" class="photo">
          <div class="item-info">
            <header>
              <h4>${item.itemName}</h4>
              <h4 class="price">₱${item.price}</h4>
              <h4>${item.size}</h4>
            </header>
            <p class="item-text">${item.description}</p>
            <button class="order-btn">Order</button> 
          </div>
        </div>
        </div>
      `;
  }).join('')}`;

  salad.innerHTML = 
  `<div class="menu-items-container">
   <p id="category-name">Salads</p>
    ${saladData.map(item => {
    return `
        <div class="menu-item ${item.subCategory}">
          <img src="${item.imgurl}" alt="${item.itemName}" class="photo">
          <div class="item-info">
            <header>
              <h4>${item.itemName}</h4>
              <h4 class="price">₱${item.price}</h4>
              <h4>${item.size}</h4>
            </header>
            <p class="item-text">${item.description}</p>
            <button class="order-btn">Order</button> 
          </div>
        </div>
        </div>
      `;
  }).join('')}`;

  shakes.innerHTML = 
  `<div class="menu-items-container">
   <p id="category-name">Shakes</p>
    ${shakesData.map(item => {
    return `
        <div class="menu-item ${item.subCategory}">
          <img src="${item.imgurl}" alt="${item.itemName}" class="photo">
          <div class="item-info">
            <header>
              <h4>${item.itemName}</h4>
              <h4 class="price">₱${item.price}</h4>
              <h4>${item.size}</h4>
            </header>
            <p class="item-text">${item.description}</p>
            <button class="order-btn">Order</button> 
          </div>
        </div>
        </div>
      `;
  }).join('')}`;

  shavedIce.innerHTML = 
  `<div class="menu-items-container">
   <p id="category-name">Shaved Ices</p>
    ${shavedIceData.map(item => {
    return `
        <div class="menu-item ${item.subCategory}">
          <img src="${item.imgurl}" alt="${item.itemName}" class="photo">
          <div class="item-info">
            <header>
              <h4>${item.itemName}</h4>
              <h4 class="price">₱${item.price}</h4>
              <h4>${item.size}</h4>
            </header>
            <p class="item-text">${item.description}</p>
            <button class="order-btn">Order</button> 
          </div>
        </div>
        </div>
      `;
  }).join('')}`;

  shortBread.innerHTML = 
  `<div class="menu-items-container">
   <p id="category-name">Short Bread</p>
    ${shortBreadData.map(item => {
    return `
        <div class="menu-item ${item.subCategory}">
          <img src="${item.imgurl}" alt="${item.itemName}" class="photo">
          <div class="item-info">
            <header>
              <h4>${item.itemName}</h4>
              <h4 class="price">₱${item.price}</h4>
              <h4>${item.size}</h4>
            </header>
            <p class="item-text">${item.description}</p>
            <button class="order-btn">Order</button> 
          </div>
        </div>
        </div>
      `;
  }).join('')}`;

  sideDish.innerHTML = 
  `<div class="menu-items-container">
   <p id="category-name">Side Dishes</p>
    ${sideDishData.map(item => {
    return `
        <div class="menu-item ${item.subCategory}">
          <img src="${item.imgurl}" alt="${item.itemName}" class="photo">
          <div class="item-info">
            <header>
              <h4>${item.itemName}</h4>
              <h4 class="price">₱${item.price}</h4>
              <h4>${item.size}</h4>
            </header>
            <p class="item-text">${item.description}</p>
            <button class="order-btn">Order</button> 
          </div>
        </div>
        </div>
      `;
  }).join('')}`;

  soups.innerHTML = 
  `<div class="menu-items-container">
   <p id="category-name">Soups</p>
    ${soupsData.map(item => {
    return `
        <div class="menu-item ${item.subCategory}">
          <img src="${item.imgurl}" alt="${item.itemName}" class="photo">
          <div class="item-info">
            <header>
              <h4>${item.itemName}</h4>
              <h4 class="price">₱${item.price}</h4>
              <h4>${item.size}</h4>
            </header>
            <p class="item-text">${item.description}</p>
            <button class="order-btn">Order</button> 
          </div>
        </div>
        </div>
      `;
  }).join('')}`;


}

filterBtns.forEach(btn => {
  btn.addEventListener("click", e => {
    const category = e.currentTarget.dataset.filter;
    const all = e.currentTarget.dataset.filter;
    const filteredItems = allItems.filter(item => item.category === category);
    const itemAll = allItems.filter(item => item.all === all)

    filterBtns.forEach(btn => btn.classList.remove('active'));
    e.currentTarget.classList.add('active');

    menuItems.innerHTML = '';

    filteredItems.forEach(item => {
      const itemElement = createItemElement(item);
      menuItems.appendChild(itemElement);
    });

    itemAll.forEach(item => {
      const itemElement = createItemElement(item);
      menuItems.appendChild(itemElement);
    });
  });
});
