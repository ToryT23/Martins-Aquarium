import { getFish,getMostHolyFish,getSoldierFish,getUnworthy,} from "./FishData.js";
import { Fish } from "./Fish.js";

export const FishList = () => {
  // Get a reference to the location on the DOM you want to display the list of fish
  const contentElement = document.querySelector(".fishList");
  // Get the fish array
  const fishes = getFish();
  const holyFish = getMostHolyFish();
  const soldierFish = getSoldierFish();
  const Unworthyfish = getUnworthy();
  // Declare a variable to hold on to the fish HTML representation
  let fishHTMLRepresentation = `<section class="holyFish" > 
    <h2>Holy fish </h2>
    `;
  // Loop over the array of fish
  //    for (const oneThingFromTheSea of fishes) {
  // 	fishHTMLRepresentation += Fish(oneThingFromTheSea);
  //     }

  for (const fishObj of holyFish) {
    fishHTMLRepresentation += Fish(fishObj);
  }
  fishHTMLRepresentation += `</section>
    <section class="soldierFish"> 
    <h2>Soldier Fish</h2>
    `;

  for (const fishObj of soldierFish) {
    fishHTMLRepresentation += Fish(fishObj);
  }
  fishHTMLRepresentation += `</section>
    <section class="unworthyFish"> 
    <h2>Unworthy Fish</h2>
    `;

  for (const fishObj of Unworthyfish) {
    fishHTMLRepresentation += Fish(fishObj);
  }
  fishHTMLRepresentation += `</section>`;

  // Set the dom equal to the variable containing the fish html representations
  contentElement.innerHTML += `
        ${fishHTMLRepresentation}
    `;
};
