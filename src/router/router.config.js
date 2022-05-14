import BasicLayout from "@/layouts/BasicLayout/index.vue";
import BlankLayout from "@/layouts/BlankLayout.vue";

export const routes = [
  {
    path: "/",
    component: BasicLayout,
    redirect: "/customManage",
    meta: {
      isAsync: true, // 是否是动态获取的
    },
    children: [
      {
        path: "/customManage",
        name: "定制管理",
        redirect: "/customManage/list",
        meta: {
          icon: "home-outlined",
          title: "定制管理",
          hasSub: true,
        },
        component: BlankLayout,
        children: [
          {
            path: "/customManage/list",
            name: "定制列表",
            component: () => import("../views/customList"),
            meta: {
              icon: "",
              title: "定制列表",
            },
          },
        ],
      },
      {
        path: "/user",
        name: "用户信息",
        meta: {
          icon: "user-outlined",
          title: "用户信息",
          hasSub: false,
        },
        component: () => import("../views/user"),
      },
    ],
  },
  {
    path: "/login",
    component: BlankLayout,
    meta: {
      isAsync: false,
    },
    children: [
      {
        path: "/login",
        meta: {
          icon: "home-outlined",
          title: "登录",
        },
        component: () => import("../views/login"),
      },
    ],
  },
];
