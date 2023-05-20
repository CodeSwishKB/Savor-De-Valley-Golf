import { drinks, foods, dessert } from '/items.js';

const toTop = document.querySelector(".to-top")

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active")
  } else {
    toTop.classList.remove("active")
  }
})


let allItems = arrayShuffle([...foods, ...drinks, ...dessert])
const menuItems = document.querySelector(".menu-items");
const searchInputs = document.querySelector(".search-bar input")
const filterBtns = document.querySelectorAll(".filter-btn");

window.addEventListener("DOMContentLoaded", () => {
  const shuffledItems = arrayShuffle(allItems)
  displayMenuItems(shuffledItems);

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
  attachOrderButtonListeners()
  displayMenuItems(allItems);
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
  arrayShuffle(items)

  const container = document.createElement('div');
  container.classList.add('menu-container');

  const heading = document.createElement('h1');
  heading.textContent = 'Recommended';
  container.appendChild(heading);

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

  container.innerHTML += display;

  menuItems.innerHTML = display;
  menuItems.appendChild(container);

  attachOrderButtonListeners();
}

function attachOrderButtonListeners() {
  document.querySelectorAll(".order-btn").forEach(item => {
    item.addEventListener('click', addToCart);
  });
}

function arrayShuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const r = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[r]] = [arr[r], arr[i]];
  }
  return arr;
}

filterBtns.forEach(btn => {
  btn.addEventListener("click", e => {
    const category = e.currentTarget.dataset.filter;
    const all = e.currentTarget.dataset.filter;
    const filteredItems = allItems.filter(item => item.category === category);
    const itemAll = allItems.filter(item => item.all === all);
    const itemsToDisplay = [...filteredItems, ...itemAll];

    const shuffledItems = arrayShuffle(itemsToDisplay);

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

    attachOrderButtonListeners()
    displayMenuItems(shuffledItems);
  });
});

var cartData = []

function addToCart() {
  var itemToAdd = this.parentNode.querySelector('.item-info h4:first-of-type').textContent.trim();
  var itemObj = allItems.find(element => element.itemName === itemToAdd)
  var index = cartData.indexOf(itemObj)
  if (index === -1) {
    // this cause error!!!!!!!!!!!!!!!!
    // this.parentNode.classList.add('active') - //
    //this.closest('.menu-item').classList.add('active');
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
    //document.getElementsByClassName(decObj.id).classList.remove('active')
    cartData.splice(ind, 1)
    document.getElementById('cart-plus').innerHTML = ` ${cartData.length} Items`
    //document.getElementById('m-cart-plus').innerHTML = ` ${cartData.length}`

    if (cartData.length < 1 && flag) {
      this.parentNode.classList.remove('active')
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
    alert('Currently no items in cart');
    // document.getElementById('cart-page').classList.remove('cart-toggle');
    // document.getElementById('category-header').classList.remove('toggle-category');
    // document.getElementById('checkout').classList.remove('cart-toggle');
    // document.getElementById('overlay').classList.remove('active');
    // flag = false;
  }
}

const closeBtn = document.getElementById("close-page-btn");

closeBtn.addEventListener("click", function () {
  const cartPage = document.getElementById("cart-page");
  // const overlay = document.getElementById("overlay");
  cartPage.classList.remove("cart-toggle");
  // overlay.classList.remove("active");
});

document.querySelector('.cart-checkout').addEventListener('click', () => {
  openCheckoutModal()
})

function openCheckoutModal() {
  const modal = document.getElementById('checkout');
  const closeModal = document.querySelector('.close-cart-btn');
  const checkoutTotal = document.getElementById('total-price');

  modal.style.display = 'block';

  closeModal.onclick = function() {
    modal.style.display = 'none';
  };

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };

  document.getElementById('checkout-button').addEventListener('click', function() {
    // Add your code to process the purchase here
    alert('Purchase successful! Thank you for your order.');

    // Clear the cart after successful purchase
    cartData = [];

    // Close the modal
    modal.style.display = 'none';
  });
}
