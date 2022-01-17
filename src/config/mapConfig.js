/*
arcgis初始化配置
*/ 
window._base_path = "http://localhost:8860";
window._base_kuangjia = "http://localhost:8860";
window._arcgis_js_apiUrl = "http://localhost:8860/arcgis_js_api/library/4.12/";
window._base_landServer = "";
 
export function arcgisConfig () {
  window.arcgis = {
    config: {
      proxyUrl: 'http://localhost:8860/arcgis_js_api/library/4.12/init.js',
      baseUrl: window._arcgis_js_apiUrl + 'init.js',
      dojoUrl: 'http://localhost:8860/arcgis_js_api/library/4.12/dojo',
      // offlineMapWkid: 26911,
      getBaseUrl: function () {
        return this.baseUrl
      },
      getDojoUrl: function () {
        return this.dojoUrl
      },
      getWkid: function () {
        // return this.offlineMapWkid
      }
    }
  }
}
