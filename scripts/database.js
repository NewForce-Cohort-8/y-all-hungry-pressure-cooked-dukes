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
        { id: 1, name: "Hamburger", image: "insert url here", description: "two all beef patties, special sauce", price: 29.99 },
    ],

    drinks: [
        {id: 1, name: "shirley temple", image:"https:www.simplejoy.com/wp-content/uploads/2022/01/shirley-temple-683x1024.webp", price: 10.99},
        {id: 2, name: "giggly juice", image: "https://images.ctfassets.net/7t85a6f8wt2m/5Rw1p8zSZvbbcCffjlhWQu/35be33b6a85a50e4cd3e60dedb69d3c4/Giggle_Juice_image?fm=webp&q=75&w=800&h=600&fit=fill", price: 7.99},
        {id: 3, name: "water", image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/07/14/15/running-water.jpg?width=1200&height=1200&fit=crop", price: 17.99},
        {id: 4, name: "lil pepsi", image: "https://www.thelittledollhousecompany.com/bmz_cache/5/5e08f9e386b71605c02f4fcc37ca8211.image.733x550.jpg", price: 11.99},
        {id: 5, name: "koolaid", image: "https://images.freshop.com/00043000956045/a7f8d3dce7eb8363fe6dded4c2fe4fb1_large.png", price: 1.99},
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



export const getDrinks = () => {
    return database.drinks.map(name => ({ ...name }))
}


//Brodcasts the custom event to entire document so the application can re-render and update state-KR
export const setDrinks = (id) => {
    database.transientState.drinksId = id
    document.dispatchEvent(new CustomEvent("stateChanged"))
}





