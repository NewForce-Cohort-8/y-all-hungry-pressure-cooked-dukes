const database = {
   
    locations: [
        { id: 1, name: "Downtown", address: "123 fake street here", phoneNumber: "304-999-9999" },
        { id: 2, name: "First Ave.", address: "Another fake street here", phoneNumber: "304-000-0000" },
        ],

    happyToys: [
        {id: 1, name: "Pokemon", image:"https://m.media-amazon.com/images/I/61yQAF86FKL._AC_SL1500_.jpg", price: 29.99 },
        {id: 2, name: "Stretch Armstrong", image:"https://m.media-amazon.com/images/I/61yQAF86FKL._AC_SL1500_.jpg", price: 59.99 },
        ],
    
    foods: [
        {id:1, name: "Hamburger", image: "insert url here", description: "two all beef patties, special sauce", price: 29.99},
    ],
    
    drinks: [
        {id: 1, name: "shirley temple", image:"https:www.simplejoy.com/wp-content/uploads/2022/01/shirley-temple-683x1024.webp", price: 7.99},
        {id: 2, name: "giggly juice", image: "insert url", price: 7.99},
        {id: 3, name: "water", image: "insert url", price: 17.99},
        {id: 4, name: "pepsi cola", image: "insert url", price: 7.99},
        {id: 5, name: "koolaid", image: "insert url", price: 3.99},
        ],

    desserts: [
        {id: 1, name: "Baklava", image: "images/Baklaka-S1.jpg", description: "Baklava is a sweet dessert pastry made of layers of filo filled with chopped nuts and sweetened and held together with syrup or honey", price: 6.20}, 
        {id: 2, name: "Brownie", image: "images/fudgy-homemade-brownies.jpg", description: "Chocolate brownie/cake/fudgy is a chocolate baked confection", price: 4.55},
        {id: 3, name: "Cannoli", image: "images/Cannoli.jpg", description: "Tube-shaped Italian dessert that consists of fried pastry dough stuffed with a sweet, creamy cheese filling", price: 5.29 }, 
        {id: 4, name: "Gulab Jamun", image: "images/gulab-jamun.jpg", description: "Indian dessert of fried dough balls that are soaked in a sweet, sticky sugar syrup", price: 3.99 }, 
        {id: 5, name: "Medovik", image: "images/medovik-with-bees.jpg", description: "Delicious honey cake", price: 9.99 }
    ],
        

    orders: [
        {id: 1, locationsId: 1, foodsId: 1, drinksId: 1, dessertsId: 1, happyToysId: 1, timestamp:1614659931693},


    ],
    
    transientState: [{},
    
    ],
    }




export const setLocation = (locationId) => {
    database.transientState.selectedLocation = locationId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const getLocations = () => {
    return database.getLocations.map(f => ({...f}))
}

export const completeOrder = () => {

        // Broadcast custom event to entire documement so that the
        // application can re-render and update state
        document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const getDesserts = () => {
    return database.desserts.map(dessert => ({...dessert}))
}

export const setDesserts = (dessertsId) => {
    database.transientState.selectedDessert = dessertsId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
