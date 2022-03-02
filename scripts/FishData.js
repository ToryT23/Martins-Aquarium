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
        size: 15,
        saltwater: true,
        image:"trout1.jpg"
    },
    {
        name: "Larry",
        food: "coral",
        type: "Catfish",
        size: 19,
        saltwater: true,
        image:"catfish.jpg"
    },
    {
        name: "Mr. Cool",
        food: "tasty treats",
        type: "Goldfish",
        size: 8,
        saltwater: false,
        image: "goldfish.jpg"
    },  
    {
        name: "Blue Guy",
        food: "algae",
        type: "Bluetang",
        size: 6,
        saltwater: false,
        image: "bluetang.jpg"
    }

]

export const getFish = () => {
    return fishCollection
}