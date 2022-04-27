const menuRoutes = [
  {
    path: '/layout',
    component: (resolve) => require(['@/layout/layout.vue'], resolve),
    children: [
      {
        path: '',
        component: (resolve) => require(['@/views/Welcome.vue'], resolve),
        meta: {
          title: '首页'
        }
      },
      {
        path: '/Welcome',
        name: 'Welcome',
        component: (resolve) => require(['@/views/Welcome.vue'], resolve),
        meta: {
          title: '首页'
        }
      },
      {
        path: '/animation',
        name: 'animation',
        component: (resolve) => require(['@/views/animation.vue'], resolve),
        meta: {
          title: '照片墙'
        }
      },
      {
        path: '/TianDiTu',
        name: 'TianDiTu',
        component: (resolve) =>
          require(['@/components/tdtMap/TianDiTu.vue'], resolve),
        meta: {
          title: '天地图'
        }
      },
      {
        path: '/yqData',
        name: 'yqData',
        component: (resolve) => require(['@/views/yqData.vue'], resolve),
        meta: {
          title: '疫情'
        }
      },
      {
        path: '/Popup',
        name: 'Popup',
        component: (resolve) =>
          require(['@/components/tdtMap/Popup.vue'], resolve),
        meta: {
          title: '弹窗'
        }
      },
      {
        path: '/Echarts',
        name: 'Echarts',
        component: (resolve) => require(['@/views/Echarts.vue'], resolve),
        meta: {
          title: 'Echarts'
        }
      },
      {
        path: '/text',
        name: 'text',
        component: (resolve) => require(['@/views/text'], resolve),
        meta: {
          title: 'text'
        }
      },
      {
        path: '/GeoJsonLayer',
        name: 'GeoJsonLayer',
        component: (resolve) => require(['@/views/GeoJsonLayer'], resolve),
        meta: {
          title: 'text'
        }
      }
    ]
  },
  {
    path: '/layout',
    component: (resolve) => require(['@/layout/layout.vue'], resolve)
  },
  {
    path: '/',
    name: 'Login',
    component: (resolve) => require(['@/views/Login.vue'], resolve),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: (resolve) => require(['@/views/Register.vue'], resolve),

    meta: {
      title: '注册'
    }
  },
  {
    path: '/daping',
    name: 'daping',
    component: (resolve) => require(['@/views/daping.vue'], resolve),
    meta: {
      title: '大屏'
    }
  },
  {
    path: '/TopicMake',
    name: 'TopicMake',
    component: (resolve) =>
      require(['@/components/TopicMake/Topic.vue'], resolve),
    meta: {
      title: '专题制图'
    }
  }
]
export default menuRoutes
