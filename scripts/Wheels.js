import { getWheels, setWheels } from "./database.js"

const theWheels = getWheels()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "wheels") {
            setWheels(parseInt(changeEvent.target.value))
        }
    }
)

export const Wheels = () => {
    let html = "<h2>Wheel Options</h2>"

    html += '<select id="wheels">'
    html += '<option value="0">Select a paint color</option>'

    const arrayOfOptions = theWheels.map( (wheel) => {
            return `<option value="${wheel.id}">${wheel.type}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}