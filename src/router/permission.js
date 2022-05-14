import router from "./index";
import { useAppPermissionStore } from "@/store/modules/appConfig";
const _useAppPermissionStore = useAppPermissionStore();

const whiteList = ["/login"];
router.beforeEach((to, from, next) => {
  if (_useAppPermissionStore.token) {
    if (to.path === "/login") {
      next("/");
    } else {
      next();
    }
  } else {
    if (whiteList.includes(to.path)) {
      next();
    } else {
      next("/login");
    }
  }
});
