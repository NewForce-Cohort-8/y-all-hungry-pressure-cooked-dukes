//this module contains all the data (state) for Yall Hungry

const database = {
    
    locations: [
        { id: 1, name: "Downtown", address: "123 fake street here", phoneNumber: "304-999-9999" },
        { id: 2, name: "First Ave.", address: "Another fake street here", phoneNumber: "304-000-0000" },
    ],

    //the happy toys object-KR
    happyToys: [
        { id: 1, name: "Charizard Action Figure", image: "images/Toy photos/Charizard.jpg", price: 9.99 },
        { id: 2, name: "Hot Wheels", image: "images/Toy photos/Hot Wheels.jpg", price: 1.99 },
        { id: 3, name: "Pop Its", image: "images/Toy photos/Pop Its.jpg", price: 1.99 },
        { id: 4, name: "Kinder Joy", image: "images/Toy photos/Kinder Joy.jpg", price: 12.99 },
        { id: 5, name: "Wonky Donkey Book", image: "images/Toy photos/Wonky Donkey.jpg", price: 4.99 },
        { id: 6, name: "No thanks, I hate fun", image: "images/Toy photos/Sad face.jpg", price: 0.00 }
    ],

    foods: [
        {id:1, name: "Hamburger", image: "/images/foods/hamburger.jpg", description: "two all beef patties, special sauce, lettuce, cheese, pickles and onions on a sesame seed bun", price: 29.99},
        {id:2, name: "Hot Dog", image: "/images/foods/hotdog.jpg", description: "A tube of meat in a bun", price: 15.99},
        {id:3, name: "Mothman Meatballs", image: "/images/foods/Meatballs.jpg", description: "Do not ask where the meat comes from", price: 79.99},
        {id:4, name: "Veggie Platter", image: "/images/foods/veggies.jpg", description: "A bunch of plants on a plate", price: 19.99},
        {id:5, name: "Pizza", image: "/images/foods/pizza.jpg", description: "New York style only", price: 5.99},
    ],


    drinks: [
        { id: 1, name: "shirley temple", image: "https:www.simplejoy.com/wp-content/uploads/2022/01/shirley-temple-683x1024.webp", price: 7.99 },
        { id: 2, name: "giggly juice", image: "insert url", price: 7.99 },
        { id: 3, name: "water", image: "insert url", price: 17.99 },
        { id: 4, name: "pepsi cola", image: "insert url", price: 7.99 },
        { id: 5, name: "koolaid", image: "insert url", price: 3.99 },
    ],

    desserts: [
        { id: 1, name: "Baklava", image: "link", description: "description here", price: 6.20 },
        { id: 2, name: "Brownie", image: "link", description: "description here", price: 4.55 },
        { id: 3, name: "Cannoli", image: "link", description: "description here", price: 5.29 },
        { id: 4, name: "Gulab Jamun", image: "link", description: "description here", price: 3.99 },
        { id: 5, name: "Medovik", image: "link", description: "description here", price: 9.99 }
    ],


    orders: [
        { id: 1, locationsId: 1, foodsId: 1, drinksId: 1, dessertsId: 1, happyToysId: 1, timestamp: 1614659931693 },


    ],

    transientState: [{},

    ],
}


//this is the export function for toys array-KR
export const getHappyToys = () => {
    return database.happyToys.map(name => ({ ...name }))
}

export const getFoods = () => {
    return database.foods.map(food => ({...food}))
}

export const getLocation = () => {
    return database.locations.map(name => ({...name}))
}

export const setLocation = (locationID) => {
database.transientState.selectedLocation = locationID
document.dispatchEvent( new CustomEvent("stateChanged"))
}

//Brodcasts the custom event to entire document so the application can re-render and update state-KR
export const sethappyToys = (id) => {
    database.transientState.happyToysId = id
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setFoods = (id) => {
    database.transientState.foodsId = id
    document.dispatchEvent(new CustomEvent("stateChanged"))
}






