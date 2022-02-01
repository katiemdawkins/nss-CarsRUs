import { getPaintColors, setPaintColors } from "./database.js";

const paintColors = getPaintColors()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "paint") {
            setPaintColors(parseInt(changeEvent.target.value))
        }
    }
)

export const PaintColors = () => {
    let html = "<h2>Paint Colors</h2>"

    html += '<select id="paint">'
    html += '<option value="0">Select a paint color </option>'

    const arrayOfOptions = paintColors.map( (paint) => {
            return `<option value="${paint.id}">${paint.color}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}



// export const thePaintColors = () => {
//     return `
//     <select id="paintColor">
//         <option value="0">Prompt to select resource...</option>
//         <option value="1">First option</option>
//         <option value="2">Second option</option>
//         <option value="3">Second option</option>
//     </select>
//     `
// }

