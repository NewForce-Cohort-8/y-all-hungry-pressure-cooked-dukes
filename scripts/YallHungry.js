import { getHappyToysHTML } from "./happyToys.js"
import { Foods } from "./Foods.js"
import { LocationHTML } from "./Locations.js"
import {getDrinksHTML} from "./drinks.js"
import { Desserts } from "./Desserts.js"

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
    <div id="orderDisplay"><p>ORDERS GO HERE</P>
    </div>
</section>
`
}



