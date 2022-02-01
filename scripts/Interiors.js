import { getInteriors, setInteriors } from "./database.js"

const theInteriors = getInteriors()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "interior") {
            setInteriors(parseInt(changeEvent.target.value))
        }
    }
)

export const Interiors = () => {
    let html = "<h2>Interior Options</h2>"

    html += '<select id="interior">'
    html += '<option value="0">Select an interior fabric </option>'

    const arrayOfOptions = theInteriors.map( (interior) => {
            return `<option value="${interior.id}">${interior.fabric}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}