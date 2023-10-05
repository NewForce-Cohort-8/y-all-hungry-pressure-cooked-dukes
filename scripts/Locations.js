import { getLocation } from "./database.js";

const locations = getLocation()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "location") {
            const chosenOption = changeEvent.target.value
            console.log(chosenOption)
        }
    }
)

export const LocationHTML = () => {
    let html = "<h2>Location</h2>"

    html += `<select id="location">`
    html += `<option value="0">select a location</option>`

    for (const location of locations) {
        html += `<option value="${location.id}">${location.name}</option>`
    }

    html += "</select>"
    return html
}