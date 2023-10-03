//importing the happyToys from the database so they can be used in this module-KR
import { getHappyToys } from "./database.js"
const toys = getHappyToys() //calling the function getHappyToys to retrieve information about the toy options



//click event listener for toy options 
document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "toys") {
            const chosenOption = changeEvent.target.value
            console.log(chosenOption)  // "1" or "2"
        }
    }
)



export const getHappyToysHTML = () => {
    let html = "<h2>Happy Toys</h2>"
    
    html += '<select id="toys">'
    html += '<option value="0">Select a Happy Toy</option>'
    // Use .map() for converting objects to <li> elements
    const arrayOfOptions = toys.map( (toys) => {
        return `<option value="${toys.id}">${toys.name}</option>`
    }
)
// Join all of the strings in the array into a single string
html += arrayOfOptions.join("")
html += "</select>"
return html
}

