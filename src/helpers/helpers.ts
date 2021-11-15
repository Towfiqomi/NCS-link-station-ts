import {LinkStations, Points} from "../types"
 
export const getDistance = (point: Points , linkStation : LinkStations ) : number =>{
    const distance = Math.sqrt(
        Math.pow(Math.abs(point.x - linkStation.x), 2) +
          Math.pow(Math.abs(point.y - linkStation.y), 2)
    );

    return distance
}