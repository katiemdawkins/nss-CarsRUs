import { CarShop } from "./CarShop.js"

//this is where we push all the content to the DOM
//.querySelector is a javascript method
const mainContainer = document.querySelector("#container")

//this function renders all HTML content from the CarShop() function
const renderAllHTML = () => {
    mainContainer.innerHTML = CarShop()
}

renderAllHTML()

document.addEventListener(
    "stateChanged", 
    (event) => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})