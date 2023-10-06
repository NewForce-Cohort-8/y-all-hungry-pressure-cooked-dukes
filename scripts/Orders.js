import { getDesserts, getDrinks, getFoods, getHappyToys, getLocation } from "./database";

const desserts = getDesserts()
const drinks = getDrinks()
const food = getFoods()
const happyToys = getHappyToys()
const locations = getLocation()

const buildOrderListItem = (order) => {
    // Remember that the function you pass to find() must return true/false
    const foundDessert = desserts.find(
        (dessert) => {
            return dessert.id === order.dessertId
        }
    )
    const foundDrink = drinks.find(
        (drink) => {
            return drink.id === order.drinkId
        }
    )
    const foundFood = foods.find(
        (food) => {
            return food.id === order.foodId
        }
    )
    const foundHappyToy = happyToys.find(
        (happyToy) => {
            return happyToy.id === order.happyToyId
        }
    )
    const foundLocation = locations.find(
        (location) => {
            return location.id === order.locationId
        }
    )

    const totalCost = (foundDessert.price + foundDrink.price + foundFood.price + foundHappyToy.price + foundLocation.price)
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    return `<li>
    Order #${order.id} cost ${costString}
   </li>`
}


export const Orders = () => {
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}