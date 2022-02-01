import { getTechnology, setTechnology} from "./database.js"

const tech = getTechnology()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "tech") {
            setTechnology(parseInt(changeEvent.target.value))
        }
    }
)

export const Technologies = () => {
    let html = "<h2>Technologies</h2>"

    html += '<select id="tech">'
    html += '<option value="0">Select a technology package</option>'

    const arrayOfOptions = tech.map( (tech) => {
            return `<option value="${tech.id}">${tech.techPackage}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}