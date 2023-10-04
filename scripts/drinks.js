import {getDrinks} from './database.js'

const drinks = getDrinks() // initializing the driks variable with the function call getDrinks()

// const yourDrinks = [] // an array that stores every drink selection from the user

document.addEventListener(
  "change",
  (changeEvent) => {
      if (changeEvent.target.id === "drinks") {
            constchosenOption = changeEvent.target.value
            console.log(chosenOption) 
      }
        
      }
)



export const getDrinksHTML = () => {

  let html = "<h2> Beverages</h2>"

  html += `<select id = "Drinks">`
  html += `<option value="0">Select a Beverage!</option>`

  const arrayOfOptions = drinks.map((drinks) => {
    return `<option value="${drinks.id}">${drinks.name}</option>`
  }
 
  )
  html += arrayOfOptions.join("")
  html += "</select>"

  return html

}
