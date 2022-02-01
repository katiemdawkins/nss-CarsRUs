import { getTheCar, getTechnology, getPaintColors, getWheels, getInteriors } from "./database.js";

const tech = getTechnology()
const paint = getPaintColors()
const wheels = getWheels()
const interiors = getInteriors()

const buildTheCar = (order) => {

    const foundTech = tech.find(
        (tech) => {
            return tech.id === order.techId
        }
    )

    const foundPaint = paint.find(
        (paint) =>{
            return paint.id === paint.paintId
        }
    )
/////////////STOPPED HERE ON TUESDAY//////////////////////////


}

export const Orders = () => {
    const orders = getTheCar()

    let html = "<ul>"

    const listOrders = 

    
}