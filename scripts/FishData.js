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
        type: "trout",
        size: 15,
        saltwater: true,
        image:"trout1.jpg"
    },
    {
        name: "Larry",
        food: "coral",
        type: "catfish",
        size: 19,
        saltwater: true,
        image:"catfish.jpg"
    }
]

export const getFish = () => {
    return fishCollection
}