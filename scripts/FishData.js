/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete this
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const fishCollection = [
    {
        name: "Bart",
        food: "crustaceans",
        type: "Trout",
        measurement: 15,
        saltwater: true,
        image:"trout1.jpg"
    },
    {
        name: "Larry",
        food: "coral",
        type: "Catfish",
        measurement: 19,
        saltwater: true,
        image:"catfish.jpg"
    },
    {
        name: "Mr. Cool",
        food: "tasty treats",
        type: "Goldfish",
        measurement: 8,
        saltwater: false,
        image: "goldfish.jpg"
    },  
    {
        name: "Blue Guy",
        food: "algae",
        type: "Bluetang",
        measurement: 6,
        saltwater: false,
        image: "bluetang.jpg"
    }

]

export const getFish = () => {
    return fishCollection
}

export const getMostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFishArray = []

    for (const fish of getFish()) {
        if(fish.measurement % 3 === 0){
            holyFishArray.push(fish)
        }
    }

    return holyFishArray
}

export const getSoldierFish = () => {

    const soldiersArray = []
    // 5, 10, 15, 20, 25, etc... fish
    for (const fish of getFish()){
        if(fish.measurement % 5 === 0 ){
            soldiersArray.push(fish)
        }
    }
    return soldiersArray
}

export const getUnworthy = () => {

    const unworthyArray = []
    
    for (const fish of getFish()){
        if(fish.measurement % 5 !== 0 && fish.measurement % 3 !== 0){
            unworthyArray.push(fish)
        }
    }

    // Any fish not a multiple of 3 or 5
    return unworthyArray
}