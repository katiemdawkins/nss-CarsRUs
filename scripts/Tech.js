import { getTechnology, setTechnology} from "./database.js"

const tech = getTechnology()

//this is the change event for the drop down options 
//different from a radio input when user clicks 
document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "tech") {
            //calling setTechnology bc this is going to send this user's choice
            //to the order builder object
            // the parseInt changes "${tech.id}" to a number
            //it is a string in return statement below
            setTechnology(parseInt(changeEvent.target.value))
        }
    }
)

//this function generates the html string for the drop down list 
export const Technologies = () => {
    let html = "<h2>Technologies</h2>"

    html += '<select id="tech">'
    html += '<option value="0">Select a technology package</option>'

//this map function creates multiple strings for all the drop down choices
//map is like a built in for...of loop. it iterates through all the 
//techPackage properties in the technology array of objects
    const arrayOfOptions = tech.map( (tech) => {
            return `<option value="${tech.id}">${tech.techPackage}</option>`
        }
    )

    //this join connects all of the strings into one long string
    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}