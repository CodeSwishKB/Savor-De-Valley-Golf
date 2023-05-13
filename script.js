import {drinks, foods, dessert} from '/items.js';

const toTop = document.querySelector(".to-top")

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100){
        toTop.classList.add("active")
    } else{
        toTop.classList.remove("active")
    }
})


let allItems = [ ...foods, ...drinks, ...dessert]

// const randomAllItems = allItems[Math.floor(Math.random() * allItems.length)]
// console.log(randomAllItems)

const menuItems = document.querySelector(".menu-items");
const searchInputs = document.querySelector(".search-bar input")
const filterBtns = document.querySelectorAll(".filter-btn");

window.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(allItems);

});

searchInputs.addEventListener('input', () =>{
    const searchValue = searchInputs.value.toLowerCase();
    const filteredDrinks = drinks.filter(drink =>  drink.itemName.toLowerCase().includes(searchValue))
    const filteredFoods = foods.filter(food =>  food.itemName.toLowerCase().includes(searchValue))
    const filteredDesserts = dessert.filter(dessert =>  dessert.itemName.toLowerCase().includes(searchValue))

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
  let display = items.map(item => {
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
    `;
  }).join("");

  menuItems.innerHTML = display;
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
