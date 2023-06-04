import {foodsItem} from '/items.js';

const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach(link => {
  if (link.getAttribute('href') === activePage) {
    link.parentElement.classList.add('active-nav-link');
  }
});

const toTop = document.querySelector(".to-top")
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active")
  } else {
    toTop.classList.remove("active")
  }
})

toTop.addEventListener("click", (event) => {
  event.preventDefault();
  const scrollOptions = {
    top: 0,
    behavior: "smooth",
  };
  window.scrollTo(scrollOptions);
});


const menuItems = document.querySelector("#food-item");
const searchInputs = document.querySelector(".search-bar input")
const filterBtns = document.querySelectorAll(".filter-btn");

// searching the items
searchInputs.addEventListener('input', () => {
    const searchValue = searchInputs.value.toLowerCase();
    const filteredItems = foodsItem.filter(food => food.itemName.toLowerCase().includes(searchValue))

    menuItems.innerHTML = '';
  
    // adds all filtered items to item list
    filteredItems.forEach(item => {
      const itemElement = createItemElement(item);
      menuItems.appendChild(itemElement);
    });
    connectOrderBtnListeners()
    displayMenuItems(filteredItems);
  });

//  display all the items
function displayMenuItems(items) {
  const subCategoryElements = {
    'appetizers': 'Appetizers',
    'beers': 'Beers',
    'cakes': 'Cake',
    'carbonated-drink': 'Carbonated Drink',
    'cold': 'Cold',
    'cold-coffee': 'Cold Coffee',
    'custard': 'Custard',
    'fried': 'Fried',
    'hot': 'Hot',
    'hot-coffee': 'Hot Coffee',
    'main-dish': 'Main Dish',
    'pasta': 'Pasta',
    'pizza': 'Pizza',
    'salad': 'Salad',
    'shake': 'Shakes',
    'shaved-ice': 'Shaved ice',
    'short-bread': 'Shortbread',
    'side-dish': 'Side Dish',
    'soup': 'Soups'
  };

  for (const subCategory in subCategoryElements) {
    const categoryElement = document.getElementById(subCategory);

    if (categoryElement) {
      const categoryData = items.filter(item => item.subCategory === subCategoryElements[subCategory]);
      const subCategoryContainer = document.createElement('div');
      subCategoryContainer.setAttribute('class', 'category-container');

      const menuItemsContainer = document.createElement('div');
      menuItemsContainer.setAttribute('class', 'menu-items-container');
      menuItemsContainer.setAttribute('id', `${subCategory}-container`);

      categoryData.forEach(item => {
        const itemCard = document.createElement('div');
        itemCard.setAttribute('class', 'menu-item');

        const img = document.createElement('img');
        img.src = item.imgurl;

        const itemInfo = document.createElement('div');
        itemInfo.setAttribute('class', 'item-info');
  
        const header = document.createElement('header');
  
        const itemName = document.createElement('h4');
        itemName.innerText = item.itemName;
  
        const itemPrice = document.createElement('h4');
        itemPrice.setAttribute('class', 'price');
        itemPrice.innerText = `₱${item.sizes[0].price}`; // Display the price for the default size
  
        const itemSize = document.createElement('h4');
        itemSize.innerText = item.sizes[0].size; // Display the default size
  
        header.appendChild(itemName);
        header.appendChild(itemPrice);
        header.appendChild(itemSize);
  
        const itemText = document.createElement('p');
        itemText.setAttribute('class', 'item-text');
        itemText.innerText = item.description;
  
        const sizeButtonsContainer = document.createElement('div');
        sizeButtonsContainer.setAttribute('class', 'size-buttons-container');
  
        item.sizes.forEach(size => {
          const sizeBtn = document.createElement('button');
          sizeBtn.setAttribute('class', 'sizes-btn');
          sizeBtn.innerText = size.size;
          sizeBtn.addEventListener('click', () => {
            itemSize.innerText = size.size;
            itemPrice.innerText = `₱${size.price}`;
          });
          sizeButtonsContainer.appendChild(sizeBtn);
        });
  
        const orderBtn = document.createElement('button');
        orderBtn.setAttribute('class', 'order-btn');
        orderBtn.innerText = 'Order';
  
        itemInfo.appendChild(header);
        itemInfo.appendChild(itemText);
        itemInfo.appendChild(sizeButtonsContainer);
        itemInfo.appendChild(orderBtn);
  
        itemCard.appendChild(img);
        itemCard.appendChild(itemInfo);
  
        menuItemsContainer.appendChild(itemCard);
      });
  

      subCategoryContainer.appendChild(menuItemsContainer);
      categoryElement.appendChild(subCategoryContainer);
    }
  }

  connectOrderBtnListeners();

}

// for the filter buttons
function createItemElement(item) {
  const itemElement = document.createElement('div');
  itemElement.className = `menu-item ${item.subCategory}`;

  const img = document.createElement('img');
  img.src = item.imgurl;
  img.alt = item.itemName;
  img.className = 'photo';

  const itemInfo = document.createElement('div');
  itemInfo.className = 'item-info';

  const header = document.createElement('header');

  const itemName = document.createElement('h4');
  itemName.innerText = item.itemName;

  const itemPrice = document.createElement('h4');
  itemPrice.className = 'price';
  itemPrice.innerText = `₱${item.sizes[0].price}`; // Display the price for the default size

  const itemSize = document.createElement('h4');
  itemSize.innerText = item.sizes[0].size; // Display the default size

  header.appendChild(itemName);
  header.appendChild(itemPrice);
  header.appendChild(itemSize);

  const itemText = document.createElement('p');
  itemText.className = 'item-text';
  itemText.innerText = item.description;

  const sizeButtonsContainer = document.createElement('div');
  sizeButtonsContainer.className = 'size-buttons-container';

  item.sizes.forEach(size => {
    const sizeBtn = document.createElement('button');
    sizeBtn.className = 'sizes-btn';
    sizeBtn.innerText = size.size;
    sizeBtn.addEventListener('click', () => {
      itemSize.innerText = size.size;
      itemPrice.innerText = `₱${size.price}`;
    });
    sizeButtonsContainer.appendChild(sizeBtn);
  });

  const orderBtn = document.createElement('button');
  orderBtn.className = 'order-btn';
  orderBtn.innerText = 'Order';

  itemInfo.appendChild(header);
  itemInfo.appendChild(itemText);
  itemInfo.appendChild(sizeButtonsContainer);
  itemInfo.appendChild(orderBtn);

  itemElement.appendChild(img);
  itemElement.appendChild(itemInfo);

  return itemElement;
}


// filter the categories
filterBtns.forEach(btn => {
  btn.addEventListener("click", e => {
    const category = e.currentTarget.dataset.filter;
    const all = e.currentTarget.dataset.filter;
    const filteredItems = foodsItem.filter(item => item.category === category);
    const itemAll = foodsItem.filter(item => item.all === all);
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

    displayMenuItems(itemsToDisplay);
  });
});
displayMenuItems(foodsItem)
  
// connecting buttons to other listens
function connectOrderBtnListeners() {
  document.querySelectorAll(".order-btn").forEach(item => {
    item.addEventListener('click', addToCart);
  });
}

// adding to cart
var cartData = []
function addToCart() {
  var itemToAdd = this.parentNode.querySelector('.item-info h4:first-of-type').textContent.trim();
  var itemObj = foodsItem.find(element => element.itemName === itemToAdd)
  var index = cartData.indexOf(itemObj)
  if (index === -1) {
    cartData = [...cartData, itemObj]
    alert("1 item added to cart")
  } else if (index > -1) {
    alert("Item already added to cart")
  }
  document.getElementById('cart-plus').innerText = ` ${cartData.length} Items`
  totalAmount()
  cartItems()
}

// displaying the cart page
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

// incrementing the items in cart
var currentPrice = 0;
function incrementItem() {
  let itemToInc = this.parentNode.previousSibling.innerText
  var incObj = cartData.find(element => element.itemName == itemToInc)
  incObj.quantity += 1
  currentPrice = (incObj.price * incObj.quantity - incObj.price * (incObj.quantity - 1)) / (incObj.quantity - 1)
  incObj.price = currentPrice * incObj.quantity
  totalAmount()
  cartItems()
  console.log(currentPrice)
}

// decrementing the items in cart
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
    cartData.splice(ind, 1)
    document.getElementById('cart-plus').innerHTML = ` ${cartData.length} Items`

    if (cartData.length < 1 && flag) {
      document.getElementById('cart-page').classList.toggle('cart-toggle')
      document.getElementById('checkout').classList.toggle('cart-toggle')
      flag = false
      alert("Currently no item in cart")
      console.log(flag)
    }
  }
  totalAmount()
  cartItems()
}

//computing the total amount
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

// // adds an event listener to the element with the ID 'cart-plus
document.getElementById('cart-plus').addEventListener('click', cartToggle)
function cartToggle() {
  if (cartData.length > 0) {
    document.getElementById('cart-page').classList.toggle('cart-toggle')
    document.getElementById('checkout').classList.toggle('cart-toggle')
    flag = true
  } else {
    alert('Currently no items in cart');
  }
}

 // x button in the cart page
const closeBtn = document.getElementById("close-page-btn");
closeBtn.addEventListener("click", () => {
  const cartPage = document.getElementById("cart-page");
  cartPage.classList.remove("cart-toggle");
});

// for checking out the items
document.getElementById('checkout-button').addEventListener('click', () => {
  alert('Purchase successful! Thank you for your order.');

  // Clear the cart after successful purchase
  cartData = []
  document.getElementById('table-body').innerHTML = '';
  document.getElementById('cart-plus').innerText = ' 0 Items';
  document.getElementById('total-item').innerText = 'Total Item : 0';
  document.getElementById('total-price').innerText = 'Total Amount : ₱ 0';
});