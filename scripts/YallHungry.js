import { getHappyToysHTML } from "./happyToys.js"
import { Foods } from "./Foods.js"
import { LocationHTML } from "./Locations.js"
import {getDrinksHTML} from "./drinks.js"
import { Desserts } from "./Desserts.js"
import { Orders } from "./database.js"

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            window.alert()
        }
    }
)

export const YallHungry = () => {
    return `
    <div id="locationSelect">${LocationHTML()}</div>
<section id="orderBox">
    <div id="orderSelections">
        ${Foods()}
        ${getHappyToysHTML()}
        ${getDrinksHTML()}
        ${Desserts()}
    </div>
    <div id="orderDisplay"><h1>ORDERS GO HERE</h1>
    </div>
</section>
<button id="orderButton">Create Custom Order</button> 
            </article>
            <article class="customOrders">
          <h2>Custom Orders</h2>
              ${Orders()} 
              </article>
`
}



