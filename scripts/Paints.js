import { getPaintColors } from "./database.js";

const paintColors = getPaintColors()

// document.addEventListener(
//     "change",
//     (changeEvent) => {
//         if (changeEvent.target.id === "paintColor") {
//             const chosenOption = changeEvent.target.value
//             console.log(chosenOption)  // "1" or "2"
//         }
//     }
// )

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

export const PaintColors = () => {
    return `<h2>Paint Colors</h2>`
}