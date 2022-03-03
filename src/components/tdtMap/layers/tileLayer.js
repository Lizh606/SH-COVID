import TileLayer from "@arcgis/core/layers/TileLayer";

const createTileLayer = function(url,id){
    if(url){
        const layerInfo  = new TileLayer({
            url:url,
            id:id
        })
        return layerInfo
    } else{
        console.log("创建地图失败")
    }
}
export default createTileLayer