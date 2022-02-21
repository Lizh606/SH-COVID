const menuRoutes = [
  {
    MenuName: "地图展示",
    path: "/map",
    component: () => import("@/layoutlayout.vue"),
    children: [
      {
        menuName: "二维地图",
        path: "2D-Map",
        component: () => import("@/components/Map.vue"),
        meta: {
          title: "二维地图",
        },
      },
      {
        menuName: "三维地图",
        path: "3D-Map",
        component: () => import("@/components/SceneMap.vue"),
        meta: {
          title: "三维地图",
        },
      },
      {
        menuName: "天地图",
        path: "TianDiTu",
        component: () => import("@/components/TianDiTu.vue"),
        meta: {
          title: "天地图",
        },
      },
    ],
  },
];
export default menuRoutes;
