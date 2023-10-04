import { getHappyToysHTML } from "./happyToys.js"
import { Foods } from "./Foods.js"
import {getDrinksHTML} from "./drinks.js"
import { Desserts } from "./Desserts.js"

export const YallHungry = () => {
    return `
${Foods()}
${getHappyToysHTML()}
${getDrinksHTML()}
${Desserts()}
`
}



