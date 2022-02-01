const database = {
    paintColor: [
        {id: 1, color: "Silver", price: 1000},
        {id: 2, color: "Midnight Blue", price: 1200}, 
        {id: 3, color: "Firebrick Red", price: 1400},
        {id: 4, color: "Spring Green", price: 1300}
    ],
    technology: [
        {id: 1, package: "Basic Package (basic sound system)", price: 1200},
        {id: 2,  package: "Navigation Package (includes integrated navigation controls)", price: 1400}, 
        {id: 3, package: "Visibility Package (includes side and reat cameras)", price: 1600},
        {id: 4, package: "Ultra Package (includes navigation and visibility packages)", price: 1800}
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
}

export const getPaintColors = () => {
    return database.paintColor.map(color =>({...color}))
}
export const getTechnology = () => {
    return database.technology.map(package => ({...package}))
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