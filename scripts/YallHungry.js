import { getHappyToysHTML } from "./happyToys.js"
import { Foods } from "./Foods.js"











export const YallHungry = () => {
    return `
${Foods()}
${getHappyToysHTML()}
`
}

