import { getHappyToysHTML } from "./happyToys.js"
import { Foods } from "./Foods.js"
import {getDrinksHTML} from "./drinks.js"


export const YallHungry = () => {
    return `
${Foods()}
${getHappyToysHTML()}
${getDrinksHTML()}

`
}



