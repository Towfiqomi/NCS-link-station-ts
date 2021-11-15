import * as data from "./data.json";
import {Data, LinkStations, Points} from "../types"


export const DataProvider = () : Data =>{
    const linkStations : LinkStations[] = data.linkStations.map(function (data: ReadonlyArray<number>) {
        return {
          x : data[0],
          y: data[1],
          reach: data[2]
        };
    })

    const points: Points[] = data.points.map(function (data: ReadonlyArray<number>) {
        return {
          x : data[0],
          y: data[1],
        };
    })

    return {
        linkStations : linkStations,
        points : points
    }
}