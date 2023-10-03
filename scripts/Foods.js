import { getFoods, setFoods} from "./database.js";

const foods = getFoods()


document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "foods") {
            setFoods(parseInt(changeEvent.target.value))
        }
    }
)

export const Foods = () => {
    let html = "<h2>Foods</h2>";

    html += '<select id="foods">';
    html += '<option value="0">Select a food</option>';

    for (const food of foods) {
        html += `<option value="${food.id}">${food.name}</option>`
    }

    html += "</select>";
    return html
}
