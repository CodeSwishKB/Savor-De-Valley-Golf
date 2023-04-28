/********* DATAS ***********/
const drinks = [{
    itemName: "Coke",
    subCategory: "Carbonated Drink",
    size: "Can",
    price: 25,
    description: ""
},{
    itemName: "Bottled Water",
    subCategory: "Carbonated Drink",
    size: "Regular",
    price: 35,
    description: ""
}, {
    itemName: "Diet Soda",
    subCategory: "Carbonated Drink",
    size: "Can",
    price: 25,
    description: ""
}, {
    itemName: "Lipton",
    subCategory: "Carbonated Drink",
    size: "Regular",
    price: 30,
    description: ""
}, {
    itemName: "Ice Tea",
    subCategory: "Carbonated Drink",
    size: "Pitcher",
    price: 55,
    description: ""
}, {
    itemName: "Double Dutch Shake",
    subCategory: "Shakes",
    size: "Regular",
    price: 85,
    description: ""
}, {
    itemName: "Black Forest Shake",
    subCategory: "Shakes",
    size: "Regular",
    price: 25,
    description: ""
}, {
    itemName: "Banana Shake",
    subCategory: "Shakes",
    size: "Small",
    price: 60,
    description: ""
}, {
    itemName: "Banana Shake",
    subCategory: "Shakes",
    size: "Medium",
    price: 110,
    description: ""
}, {
    itemName: "Banana Shake",
    subCategory: "Shakes",
    size: "Large",
    price: 180,
    description: ""
}, {
    itemName: "Mango Shake",
    subCategory: "Shakes",
    size: "Small",
    price: 60,
    description: ""
}, {
    itemName: "Mango Shake",
    subCategory: "Shakes",
    size: "Medium",
    price: 110,
    description: ""
}, {
    itemName: "Mango Shake",
    subCategory: "Shakes",
    size: "Large",
    price: 180,
    description: ""
}, {
    itemName: "Hot Tea Latte",
    subCategory: "Hot Coffee",
    size: "Regular",
    price: 140,
    description: ""
}, {
    itemName: "Cappuccino",
    subCategory: "Hot Coffee",
    size: "Regular",
    price: 140,
    description: ""
}, {
    itemName: "Brewed Coffee",
    subCategory: "Hot Coffee",
    size: "Regular",
    price: 140,
    description: ""
}, {
    itemName: "Mocha Iced Coffee",
    subCategory: "Cold Coffee",
    size: "Regular",
    price: 120,
    description: ""
}, {
    itemName: "Vanilla Iced Coffee",
    subCategory: "Cold Coffee",
    size: "Regular",
    price: 120,
    description: ""
}, {
    itemName: "Iced Coffee",
    subCategory: "Cold Coffee",
    size: "Regular",
    price: 120,
    description: ""
},{
    itemName: "Alfonso",
    subCategory: "Beers",
    size: "1 Liter",
    price: 650,
    description: ""
},{
    itemName: "Red Horse",
    subCategory: "Beers",
    size: "1 Liter",
    price: 140,
    description: ""
},{
    itemName: "Red Horse",
    subCategory: "Bucket",
    size: "Beers",
    price: 450,
    description: ""
},{
    itemName: "San Miguel Light",
    subCategory: "Beers",
    size: "Solo",
    price: 70,
    description: ""
},{
    itemName: "San Miguel Light",
    subCategory: "Beers",
    size: "Bucket",
    price: 350,
    description: ""
},{
    itemName: "Pale Pilsen",
    subCategory: "Beers",
    size: "Solo",
    price: 70,
    description: ""
},{
    itemName: "Pale Pilsen",
    subCategory: "Beers",
    size: "Bucket",
    price: 350,
    description: ""
} ]
console.log(drinks.length)

const foods = [{
    itemName: "Pork Adobo",
    subCategory: "Main Dish",
    size: "Regular",
    price: "250",
    description: ""
},{
    itemName: "Pinoy Chicken Curry",
    subCategory: "Main Dish",
    size: "Regular",
    price: "250",
    description: ""
},{
    itemName: "Beef Bulalo",
    subCategory: "Main Dish",
    size: "Regular",
    price: "350",
    description: ""
},{
    itemName: "Pork Menudo",
    subCategory: "Main Dish",
    size: "Regular",
    price: "250",
    description: ""
},{
    itemName: "Pork Caldereta",
    subCategory: "Main Dish",
    size: "Regular",
    price: "250",
    description: ""
},{
    itemName: "Chicken Afritada",
    subCategory: "Main Dish",
    size: "Regular",
    price: "239",
    description: ""
},{
    itemName: "Bicol Express",
    subCategory: "Main Dish",
    size: "Regular",
    price: "239",
    description: ""
},{
    itemName: "Pork Steak",
    subCategory: "Main Dish",
    size: "Regular",
    price: "250",
    description: ""
},{
    itemName: "Garlic Butter shrimp",
    subCategory: "Main Dish",
    size: "Regular",
    price: "300",
    description: ""
},{
    itemName: "Pork Sisig",
    subCategory: "Main Dish",
    size: "Regular",
    price: "295",
    description: ""
},{
    itemName: "Sinigang na Hipon",
    subCategory: "Main Dish",
    size: "Regular",
    price: "250",
    description: ""
},{
    itemName: "Sinigang na Baboy",
    subCategory: "Main Dish",
    size: "Regular",
    price: "250",
    description: ""
},{
    itemName: "Lechon Kawali",
    subCategory: "Main Dish",
    size: "Regular",
    price: "300",
    description: ""
},{
    itemName: "Beef Kare-Kare",
    subCategory: "Main Dish",
    size: "Regular",
    price: "300",
    description: ""
},{
    itemName: "Chicken Cordon Bleu",
    subCategory: "Main Dish",
    size: "Regular",
    price: "320",
    description: ""
},{
    itemName: "Fresh Green Beans",
    subCategory: "Side Dish",
    size: "Regular",
    price: "135",
    description: ""
},{
    itemName: "Sautéed Zucchini And Squash",
    subCategory: "Side Dish",
    size: "Regular",
    price: "150",
    description: ""
},{
    itemName: "Roasted Veggies",
    subCategory: "Side Dish",
    size: "Regular",
    price: "150",
    description: ""
},{
    itemName: "Roasted Broccoli With Sweet Chili Sauce",
    subCategory: "Side Dish",
    size: "Regular",
    price: "145",
    description: ""
},{
    itemName: "Roasted Ratatouille",
    subCategory: "Side Dish",
    size: "Regular",
    price: "165",
    description: ""
},{
    itemName: "Pearl Couscous Salad",
    subCategory: "Side Dish",
    size: "Regular",
    price: "190",
    description: ""
},{
    itemName: "Mediterranean Quinoa Salad",
    subCategory: "Side Dish",
    size: "Regular",
    price: "200",
    description: ""
},{
    itemName: "Chilaquiles",
    subCategory: "Side Dish",
    size: "Regular",
    price: "178",
    description: ""
},{
    itemName: "Crockpot Mac And Cheese",
    subCategory: "Side Dish",
    size: "Regular",
    price: "155",
    description: ""
},{
    itemName: "Filet Mignon Nachos",
    subCategory: "Side Dish",
    size: "Regular",
    price: "198",
    description: ""
},{
    itemName: "Spicy Shrimp Nacho",
    subCategory: "Side Dish",
    size: "Regular",
    price: "225",
    description: ""
},{
    itemName: "Surf And Turf Taco Combo",
    subCategory: "Side Dish",
    size: "Regular",
    price: "250",
    description: ""
},{
    itemName: "Cheesy Enchiladas",
    subCategory: "Side Dish",
    size: "Regular",
    price: "190",
    description: ""
},{
    itemName: "Banditto Burrito",
    subCategory: "Side Dish",
    size: "Regular",
    price: "123",
    description: ""
},{
    itemName: "Quesadilla",
    subCategory: "Side Dish",
    size: "Regular",
    price: "230",
    description: ""
},{
    itemName: "Garlic Bread",
    subCategory: "Appetizers",
    size: "Half Dozen",
    price: "449.85",
    description: ""
}, {
    itemName: "Chicken Wings",
    subCategory: "Appetizers",
    size: "Regular",
    price: "299.5",
    description: ""
}, {
    itemName: "Chicken Wings",
    subCategory: "Appetizers",
    size: "Dozen",
    price: "749.75",
    description: ""
}, {
    itemName: "Beef Sliders",
    subCategory: "Appetizers",
    size: "Single",
    price: "249.50",
    description: ""
}, {
    itemName: "Beef Sliders",
    subCategory: "Appetizers",
    size: "Double",
    price: "449.85",
    description: ""
}, {
    itemName: "Fried Zucchini  ",
    subCategory: "Appetizers",
    size: "Regular",
    price: "349.65",
    description: ""
}, {
    itemName: "Onion Rings  ",
    subCategory: "Appetizers",
    size: "Regular",
    price: "299.50",
    description: ""
}, {
    itemName: "Jumbo Shrimp Cocktail",
    subCategory: "Appetizers",
    size: "Regular",
    price: "449.85",
    description: ""
}, {
    itemName: "Jumbo Shrimp Cocktail",
    subCategory: "Appetizers",
    size: "Large",
    price: "749.75",
    description: ""
}, {
    itemName: "Mozzarella Sticks",
    subCategory: "Appetizers",
    size: " Regular",
    price: "349.65",
    description: ""
}, {
    itemName: "Tomato Soup",
    subCategory: "Soups",
    size: "Cup",
    price: "179.55",
    description: ""
}, {
    itemName: "Tomato Soup",
    subCategory: "Soups",
    size: "Bowl",
    price: "269.25",
    description: ""
}, {
    itemName: "Chicken Noodle Soup",
    subCategory: "Soups",
    size: "Cup",
    price: "224.65",
    description: ""
}, {
    itemName: "Chicken Noodle Soup",
    subCategory: "Soups",
    size: " Bowl",
    price: "314.35",
    description: ""
}, {
    itemName: "Garden Salad",
    subCategory: "Salad",
    size: " Regular",
    price: "299.50",
    description: ""
}, {
    itemName: "Spaghetti with Meatballs",
    subCategory: "Pasta",
    size: " Regular",
    price: "349",
    description: ""
}, {
    itemName: "Classic Filipino Style Spaghetti",
    subCategory: "Pasta",
    size: " Regular",
    price: "329",
    description: ""
}, {
    itemName: "Spaghetti with Marinara Sauce",
    subCategory: "Pasta",
    size: " Regular",
    price: "329",
    description: ""
}, {
    itemName: "Creamy Shrimp Pasta",
    subCategory: "Pasta",
    size: " Regular",
    price: "349",
    description: ""
}, {
    itemName: "Triple Cheese Pasta",
    subCategory: "Pasta",
    size: " Regular",
    price: "349",
    description: ""
}, {
    itemName: "Carbonara",
    subCategory: "Pasta",
    size: " Regular",
    price: "329",
    description: ""
}, {
    itemName: "Parmesan Cheese Pasta",
    subCategory: "Pasta",
    size: " Regular",
    price: "329",
    description: ""
}, {
    itemName: "Veggie Pasta",
    subCategory: "Pasta",
    size: " Regular",
    price: "315",
    description: ""
}, {
    itemName: "Veggie Supreme Pizza",
    subCategory: "Pasta",
    size: " Regular",
    price: "375",
    description: ""
}, {
    itemName: "BBQ Chicken Pizza",
    subCategory: "Pasta",
    size: " Regular",
    price: "375",
    description: ""
}, {
    itemName: "Meat Lovers",
    subCategory: "Pasta",
    size: " Regular",
    price: "399",
    description: ""
}, {
    itemName: "Extra Cheesy Pizza",
    subCategory: "Pasta",
    size: " Regular",
    price: "399",
    description: ""
}, {
    itemName: "Classic Pepperoni Pizza",
    subCategory: "Pasta",
    size: " Regular",
    price: "375",
    description: ""
}, {
    itemName: "Hawaiian Pizza",
    subCategory: "Pasta",
    size: " Regular",
    price: "375",
    description: ""
}, {
    itemName: "Chicken & Spinach Pizza",
    subCategory: "Pasta",
    size: " Regular",
    price: "399",
    description: ""
},]

const dessert = [{
    itemName: "Mango Float",
    subCategory: "Cold",
    size: "Regular",
    price: "100",
    description: ""
}, {
    itemName: "Yema Cake",
    subCategory: "Cake",
    size: "Half slice",
    price: "145",
    description: ""
}, {
    itemName: "Yema Cake",
    subCategory: "Cake",
    size: "Whole",
    price: "290",
    description: ""
}, {
    itemName: "Brazo De Mercedes",
    subCategory: "Cake",
    size: "Half slice",
    price: "115",
    description: ""
}, {
    itemName: "Brazo De Mercedes",
    subCategory: "Cake",
    size: "Whole",
    price: "230",
    description: ""
}, {
    itemName: "Bibingka",
    subCategory: "Hot",
    size: "Regular",
    price: "65",
    description: ""
}, {
    itemName: "Leche Flan",
    subCategory: "Custard",
    size: "Regular",
    price: "100",
    description: ""
}, {
    itemName: "Buko Salad",
    subCategory: "Cold",
    size: "Regular",
    price: "100",
    description: ""
}, {
    itemName: "Coffee Jelly",
    subCategory: "Cold",
    size: "Regular",
    price: "100",
    description: ""
}, {
    itemName: "Buko Pie",
    subCategory: "Cake",
    size: "Half slice",
    price: "95",
    description: ""
}, {
    itemName: "Buko Pie",
    subCategory: "Cake",
    size: "Whole",
    price: "190",
    description: ""
}, {
    itemName: "Halo - Halo",
    subCategory: "Shaved ice",
    size: "Small",
    price: "50",
    description: ""
}, {
    itemName: "Halo - Halo",
    subCategory: "Shaved ice",
    size: "Regular",
    price: "65",
    description: ""
}, {
    itemName: "Halo - Halo",
    subCategory: "Shaved ice",
    size: "Large",
    price: "70",
    description: ""
},{
    itemName: "Maja Blanca",
    subCategory: "Cake",
    size: "Half",
    price: "75",
    description: ""
}, {
    itemName: "Maja Blanca",
    subCategory: "Cake",
    size: "Whole",
    price: "150",
    description: ""
}, {
    itemName: "Gulaman",
    subCategory: "Cold",
    size: "Regular",
    price: "30",
    description: ""
}, {
    itemName: "Polvoron",
    subCategory: "Shortbread",
    size: "Regular",
    price: "55",
    description: ""
}, {
    itemName: "Churos",
    subCategory: "Fried",
    size: "Regular",
    price: "100",
    description: ""
}, {
    itemName: "Mais Con Hielo",
    subCategory: "Shaved ice",
    size: "Small",
    price: "70",
    description: ""
}, {
    itemName: "Mais Con Hielo",
    subCategory: "Shaved ice",
    size: "Regular",
    price: "80",
    description: ""
}, {
    itemName: "Mais Con Hielo",
    subCategory: "Shaved ice",
    size: "Large",
    price: "90",
    description: ""
}, {
    itemName: "Saging con Hielo",
    subCategory: "Shaved ice",
    size: "Regular",
    price: "55",
    description: ""
}, {
    itemName: "Saging con Hielo",
    subCategory: "Shaved ice",
    size: "Regular",
    price: "60",
    description: ""
},{
    itemName: "Saging con Hielo",
    subCategory: "Shaved ice",
    size: "Regular",
    price: "65",
    description: ""
},]
