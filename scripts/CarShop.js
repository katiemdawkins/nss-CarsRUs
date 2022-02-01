//responsible for generating the HTML structure for the app


import { Technologies } from "./Tech.js";
import { PaintColors } from "./Paints.js";
import { Wheels } from "./Wheels.js";
import { Interiors } from "./Interiors.js";
import { addCustomOrder } from "./database.js";

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton"){
            addCustomOrder(event.target.value)
        }
    }
)

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
    `
}