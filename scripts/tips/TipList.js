import { getTipListGuideFunction } from "./TipData.js";
import { tips } from "./Tip.js";

export const TipList = () => {

  const contentElement = document.querySelector(".tipList");

  const mytips = getTipListGuideFunction();
 // initializing an empty string to store the data after it goes through the loop
  let tipHTMLRepresentation = "<h2>Fish Tips Instructions</h2> <ol>";
  
  for (const tip of mytips) {
    tipHTMLRepresentation += tips(tip);
  }

  contentElement.innerHTML += `
    ${tipHTMLRepresentation}</ol>`;
};
