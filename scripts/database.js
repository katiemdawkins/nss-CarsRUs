const database = {
    paintColor: [
        {id: 1, color: "Silver", price: 1000},
        {id: 2, color: "Midnight Blue", price: 1200}, 
        {id: 3, color: "Firebrick Red", price: 1400},
        {id: 4, color: "Spring Green", price: 1300}
    ],
    technology: [
        {id: 1, techPackage: "Basic Package (basic sound system)", price: 1200},
        {id: 2, techPackage: "Navigation Package (includes integrated navigation controls)", price: 1400}, 
        {id: 3, techPackage: "Visibility Package (includes side and reat cameras)", price: 1600},
        {id: 4, techPackage: "Ultra Package (includes navigation and visibility packages)", price: 1800}
    ],
    interior: [
        {id: 1, fabric: "Beige Fabric", price: 1000},
        {id: 2, fabric: "Charcoal Fabric", price: 1000}, 
        {id: 3,fabric: "White Leather", price: 1000},
        {id: 4,fabric: "Black Leather", price: 1000}
    ],
    wheels: [
        {id: 1, type: "17-inch Pair Radial", price: 900},
        {id: 2, type: "17-inch Pair Radial Black", price: 950}, 
        {id: 3, type: "18-inch Pair Spoke Silver", price: 1200},
        {id: 4, type: "18-inch Pair Spoke Black", price: 1295}
    ],
    theCar: [
        {id: 1, paintColorId:1, wheelId:3, interiorId:4,technologyId: 3 }
    ],
    orderBuilder: {}
}

export const getPaintColors = () => {
    return database.paintColor.map(color =>({...color}))
}
export const getTechnology = () => {
    return database.technology.map(techPackage => ({...techPackage}))
}

export const getWheels = () => {
    return database.wheels.map(type =>({...type}))
}

export const getInteriors = () => {
    return database.interior.map(fabric => ({...fabric}))
}

export const getTheCar = () => {
    return database.theCar.map(car =>({...car}))
}

//setter functions that track the users choices in the transient state 
export const setPaintColors = (id) => {
    database.orderBuilder.paintColorId = id
}
export const setWheels = (id) => {
    database.orderBuilder.wheelsId = id 
}
export const setInteriors = (id) => {
    database.orderBuilder.interiorsId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}


//when a user makes a selection they are changing the state
// to store the transient state we need this function
export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.theCar.length - 1
    newOrder.id = database.theCar[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.theCar.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}