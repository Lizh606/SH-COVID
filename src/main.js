import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import less from "less";
import "@arcgis/core/assets/esri/themes/light/main.css";
import "../src/styles/index.less";
import {
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Button,
  RadioGroup,
  Radio,
  Table,
  Input,
  Tag,
  List,
  Switch,
  Icon,
  Menu,
  MenuItem,
  Submenu,
  MenuGroup,
  Layout,
  Sider,
  Content,
  Modal,
  Row,
  Col,
  DatePicker,
  Cascader,
} from "view-design";
import "view-design/dist/styles/iview.css";
// import esriLoader from 'esri-loader'

Vue.config.productionTip = false;
Vue.use(less);
Vue.component("Dropdown", Dropdown);
Vue.component("DropdownMenu", DropdownMenu);
Vue.component("DropdownItem", DropdownItem);
Vue.component("Button", Button);
Vue.component("RadioGroup", RadioGroup);
Vue.component("Radio", Radio);
Vue.component("i-switch", Switch);
// Vue.component('Tag',Tag)
Vue.component("Icon", Icon),
  Vue.component("Menu", Menu),
  Vue.component("MenuItem", MenuItem),
  Vue.component("Submenu", Submenu),
  Vue.component("MenuGroup", MenuGroup),
  Vue.component("Layout", Layout),
  // Vue.component('Header',Header),
  Vue.component("Sider", Sider),
  Vue.component("Content", Content),
  Vue.component("i-input", Input),
  Vue.component("List", List),
  Vue.component("ListItem", List.Item),
  Vue.component("Modal", Modal),
  Vue.component("Row", Row),
  Vue.component("DatePicker", DatePicker),
  Vue.component("Tag", Tag),
  Vue.component("i-col", Col),
  Vue.component("Cascader", Cascader),
  Vue.component("Table", Table),
  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount("#app");
