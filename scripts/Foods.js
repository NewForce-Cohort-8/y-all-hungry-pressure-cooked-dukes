import { getFoods, setFoods} from "./database.js";

const foods = getFoods()


document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "foods") {
            const chosenOption = changeEvent.target.value
            console.log(chosenOption)
        }
    }
)

export const Foods = () => {
    let html = "<h2>Foods</h2>"
    
    html += '<select id="foods">'
    html += '<option value="0">Select a Food</option>'
    const arrayOfOptions = foods.map( (food) => {
        return `<option value="${food.id}">${food.name}</option>`
    }
)

html += arrayOfOptions.join("")
html += "</select>"
return html
}
