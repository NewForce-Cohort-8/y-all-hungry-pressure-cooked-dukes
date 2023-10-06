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
    <div id="orderDisplay"><p>Current Order:</P>
    </div>
    <div id="information"><p>Food Truck Image</p><p>Phone number superimposed</p>
    </div>
</section>

<div id="footer"><p>Clever Marketing Slogan</p>
`
}



