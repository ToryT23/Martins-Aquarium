import { getLocations } from "./LocationData.js";
import { locations } from "./Locations.js";

export const locationList = () => {
    // location to put in down / in html
  const contentElement = document.querySelector(".locationList");

  // making a variable that is equal all the locations
  const locationsTraveled = getLocations();

  // start of  my html
  let locationHtmlRep = `<h2> Martin's Favorite Cities To Go Fishing In Tennessee </h2> `;

    // used a filter find the locations in tn / must return location
  const locationArray = locationsTraveled.filter((location) => {
    if (location.state === "TN") {
      return location;
    }
  });
  // for loop is used to iterate over the all of the locations in the array that are in the state of TN
  for(const locationObj of locationArray) {
      locationHtmlRep += locations(locationObj)
  }
  // displays all html and displays the results for the for loop after the H2 is returned
  contentElement.innerHTML += `${locationHtmlRep}`;
};

//  ask more questions about this filter function