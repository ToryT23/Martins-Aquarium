import { getFish } from "./FishData.js";
import { FishList } from "./FishList.js";

const allTheFish = getFish();

for (const fish of allTheFish) {
  console.log(fish);
}

FishList();
