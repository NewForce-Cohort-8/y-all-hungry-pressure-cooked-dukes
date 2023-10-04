import { getHappyToysHTML } from "./happyToys.js"
import { Foods } from "./Foods.js"
import { LocationHTML } from "./Locations.js"











export const YallHungry = () => {
    return `
${Foods()}
${getHappyToysHTML()}
${LocationHTML()}
`
}

