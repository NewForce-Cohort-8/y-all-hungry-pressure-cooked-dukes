import { getDesserts, getDessertLocation } from "./database.js";

const dessertLoc = getDessertLocation()
const desserts = getDesserts()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "desserts") {
            const chosenOption = changeEvent.target.value
            console.log(chosenOption)
        }
    }
)

const dessertInStock = () => {
    const dessertStock = []
    const stock = dessertLoc.map( (dessertLoc) => {
        if (dessertLoc.inventory > 0) {
            dessertStock.push(dessertLoc.id)
        }
    })
    console.log(dessertStock)
    return dessertStock
}

dessertInStock() 

const dessertOutOfStock = () => {
    const dessertOutOfStock = []
    const stock = dessertLoc.map( (dessertLoc) => {
        if (dessertLoc.inventory === 0) {
            dessertOutOfStock.push(dessertLoc.id)
        }
    })
    console.log(dessertOutOfStock)
    return dessertOutOfStock
}

dessertOutOfStock()

export const Desserts = () => {
    let html = "<h2>Desserts</h2>"
    html += `<select id="desserts">`
    html += `<option value="0">Select dessert</option>`

    for (const dessert of desserts) {
        html += `<option value="${dessert.id}">${dessert.name}</option>`
    }

    html +="</select>"
    return html
}