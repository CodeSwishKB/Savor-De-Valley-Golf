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

// const randomAllItems = allItems[Math.floor(Math.random() * allItems.length)]
// console.log(randomAllItems)

const menuItems = document.querySelector(".menu-items");
const searchInputs = document.querySelector(".search-bar input")
const filterBtns = document.querySelectorAll(".filter-btn");

window.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(allItems);

});

searchInputs.addEventListener('input', () => {
  const searchValue = searchInputs.value.toLowerCase();
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

  document.querySelectorAll(".order-btn").forEach(item => {
    item.addEventListener('click', addToCart)
  })

}


filterBtns.forEach(btn => {
  btn.addEventListener("click", e => {
    const category = e.currentTarget.dataset.filter;
    const all = e.currentTarget.dataset.filter;
    const filteredItems = allItems.filter(item => item.category === category);
    const itemAll = allItems.filter(item => item.all === all);
    const itemsToDisplay = [...filteredItems, ...itemAll];

    filterBtns.forEach(btn => btn.classList.remove('active'));
    e.currentTarget.classList.add('active');

    menuItems.innerHTML = '';

    menuItems.classList.add('filtering');

    setTimeout(() => {
      menuItems.classList.remove('filtering');
    }, 550);

    itemsToDisplay.forEach(item => {
      const itemElement = createItemElement(item);
      menuItems.appendChild(itemElement);
    });
  });
});

var cartData = []

function addToCart() {
  var itemToAdd = this.parentNode.querySelector('.item-info h4:first-of-type').textContent.trim();

  var itemObj = allItems.find(element => element.itemName === itemToAdd)

  console.log(itemObj)

  var index = cartData.indexOf(itemObj)
  if (index === -1) {
    // this cause error!!!!!!!!!!!!!!!!
    // this.parentNode.classList.add('active') - //
    cartData = [...cartData, itemObj]
  } else if (index > -1) {
    alert("Added to cart")
  }

  document.getElementById('cart-plus').innerText = ` ${cartData.length} Items`
  //document.getElementById('m-cart-plus').innerText = ` ${cartData.length}`
  totalAmount()
  cartItems()
}

function cartItems() {
  var tableBody = document.getElementById('table-body')
  tableBody.innerHTML = ''

  cartData.map(item => {
    var tableRow = document.createElement('tr')

    var rowData1 = document.createElement('td')
    var img = document.createElement('img')
    img.src = item.imgurl
    rowData1.appendChild(img)

    var rowData2 = document.createElement('td')
    rowData2.innerText = item.itemName

    var rowData3 = document.createElement('td')
    var btn1 = document.createElement('button')
    btn1.setAttribute('class', 'decrease-item')
    btn1.innerHTML = '-'
    var span = document.createElement('span')
    span.innerText = item.quantity
    var btn2 = document.createElement('button')
    btn2.setAttribute('class', 'increase-item')
    btn2.innerText = '+'

    rowData3.appendChild(btn1)
    rowData3.appendChild(span)
    rowData3.appendChild(btn2)

    var rowData4 = document.createElement('td')
    rowData4.innerText = `₱${item.price}`;

    tableRow.appendChild(rowData1)
    tableRow.appendChild(rowData2)
    tableRow.appendChild(rowData3)
    tableRow.appendChild(rowData4)

    tableBody.appendChild(tableRow)
  })

  document.querySelectorAll('.increase-item').forEach(item => {
    item.addEventListener('click', incrementItem)
  })
  document.querySelectorAll('.decrease-item').forEach(item => {
    item.addEventListener('click', decrementItem)
  })
}


var currentPrice = 0;

function incrementItem() {
  let itemToInc = this.parentNode.previousSibling.innerText
  console.log(itemToInc)

  var incObj = cartData.find(element => element.itemName == itemToInc)
  incObj.quantity += 1

  currentPrice = (incObj.price * incObj.quantity - incObj.price * (incObj.quantity - 1)) / (incObj.quantity - 1)

  incObj.price = currentPrice * incObj.quantity
  totalAmount()
  cartItems()
  console.log(currentPrice)
}

var flag = false;

function decrementItem() {
  let itemToDec = this.parentNode.previousSibling.innerText;
  let decObj = cartData.find(element => element.itemName == itemToDec)
  let ind = cartData.indexOf(decObj)
  console.log(decObj)

  if (decObj.quantity > 1) {
    currentPrice = (decObj.price * decObj.quantity - decObj.price * (decObj.quantity - 1)) / (decObj.quantity);
    decObj.quantity -= 1;
    decObj.price = currentPrice * decObj.quantity;

  } else {
    this.parentNode.classList.remove('active')
    cartData.splice(ind, 1)
    document.getElementById('cart-plus').innerHTML = ` ${cartData.length} Items`
    //document.getElementById('m-cart-plus').innerHTML = ` ${cartData.length}`

    if (cartData.length < 1 && flag) {
      // document.getElementById('food-items').classList.toggle('food-items')
      // document.getElementById('category-list').classList.toggle('food-items')
      // document.getElementById('m-cart-plus').classList.toggle('m-cart-toggle')
      document.getElementById('cart-page').classList.toggle('cart-toggle')
      //document.getElementById('category-header').classList.toggle('toggle-category')
      document.getElementById('checkout').classList.toggle('cart-toggle')
      flag = false
      alert("Currently no item in cart")
      console.log(flag)
    }
  }
  totalAmount()
  cartItems()
}

function totalAmount() {
  var sum = 0
  cartData.map(item => {
    sum += item.price
  })

  if (cartData.length > 1) {
    document.getElementById('total-item').innerText = `Total Items : ${cartData.length}`
  } else {
    document.getElementById('total-item').innerText = `Total Item : ${cartData.length}`
  }

  document.getElementById('total-price').innerText = `Total Price : ₱ ${sum}`
}

document.getElementById('cart-plus').addEventListener('click', cartToggle)
//document.getElementById('m-cart-plus').addEventListener('click', cartToggle)

function cartToggle() {
  if (cartData.length > 0) {
    document.getElementById('cart-page').classList.toggle('cart-toggle')
    //document.getElementById('category-header').classList.toggle('toggle-category')
    document.getElementById('checkout').classList.toggle('cart-toggle')
    // document.getElementById('overlay').classList.add('active')
    flag = true
  } else {
    alert('Currently no items in cart')
  }
}

const closeBtn = document.getElementById("close-page-btn");

closeBtn.addEventListener("click", function () { 
  const cartPage = document.getElementById("cart-page");
  cartPage.classList.remove("cart-toggle");
  // document.getElementById('overlay').classList.remove('active')
});
