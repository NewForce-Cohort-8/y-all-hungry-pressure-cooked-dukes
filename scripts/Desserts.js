import { getDesserts } from "./database.js";

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