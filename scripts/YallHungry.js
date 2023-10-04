import { Desserts } from "./Desserts.js"

export const YallHungry = () => {
    return ` 
    <h1>Y'all Hungry</h1>
    <article class="choices">
    <section class="choices__dessert options">
    ${Desserts()}
    </section>
    </article>
    `
}