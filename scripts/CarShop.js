//responsible for generating the HTML structure for the app


import { Technologies } from "./Tech.js";
import { PaintColors } from "./Paints.js";
import { Wheels } from "./Wheels.js";
import { Interiors } from "./Interiors.js";
import { addCustomOrder } from "./database.js";
import { Orders } from "./orders.js"

//click event listener for the Create Your Car! Button
//it calls the addCustomOrder function which stores the user's choices
document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton"){
            addCustomOrder(event.target.value)
        }
    }
)

//this function creates the HTML layout for the app 
//it will be exported to main js where it will be invoked
//it calls the individual functions that display the Drop down options
//and the h2 lables 
export const CarShop = () => {
    return `
    <h1>Cars-R-Us</h1>
    <article>
        <section>
            ${Technologies()}
        </section>
            ${PaintColors()}
        <section>
            ${Wheels()}
        </section>
        <section>
            ${Interiors()}
        </section>
    </article>

    <article>
        <button id="orderButton">Create Your Car! </button>
    </article>

    <article class="customOrders">
        <h2>Custom Car Orders</h2>
        ${Orders()}
    </article>

    `
}