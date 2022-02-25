import Vue from "vue";
import ViewDesign from "view-design";
import "view-design/dist/styles/iview.css";
Vue.use(ViewDesign);

import "@/components";
import tdtMap from '../components/tdtMap/TianDiTu.vue'
Vue.component('tdt-map',tdtMap)

import IconSvg from '../styles/svg/svg.vue'
Vue.component('IconSvg', IconSvg)
