import {DataProvider} from "./dataprovider/dataprovider";
import {getDistance} from "./helpers/helpers"
import {Data, LinkStations} from "./types"

const getBestLinkstation = () =>{
    const data: Data = DataProvider();
    const point = {x: 0, y:0};
    data.linkStations.map((linkStation: LinkStations)=>{
        const distance = getDistance(point, linkStation);
        console.log(distance);
    })
}

getBestLinkstation();