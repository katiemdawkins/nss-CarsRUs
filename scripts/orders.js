import { getTheCar, getTechnology, getPaintColors, getWheels, getInteriors } from "./database.js";

const tech = getTechnology()
const paint = getPaintColors()
const wheels = getWheels()
const interiors = getInteriors()

//this function collects all the user data needed to build the custom car
const buildTheCar = (order) => {
//.find is an array method
    const foundTech = tech.find(
        (tech) => {
            return tech.id === order.technologyId
        }
    )

    const foundPaint = paint.find(
        (paint) =>{
            return paint.id === order.paintColorId
        }
    )

    const foundWheels = wheels.find (
        (wheels) => {
            return wheels.id === order.wheelId
        }
    )

    const foundInteriors = interiors.find(
        (interiors) => {
            return interiors.id === order.interiorId
        }
    )
    
    const totalCost = foundTech.price + foundPaint.price + foundWheels.price + foundInteriors.price

    const costString = totalCost.toLocaleString("en-Us", {
        style:"currency",
        currency: "USD"
    })
    return `<li>
        Order #${order.id} cost ${costString}
        </li>`

}

export const Orders = () => {
    const orders = getTheCar()

    let html = "<ul>"

    const listOrders = orders.map(orderList => {return buildTheCar(orderList)})

    html += listOrders.join("")
    html += "</ul>"

    return html
    
}