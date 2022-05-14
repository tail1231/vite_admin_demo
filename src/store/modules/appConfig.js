import { defineStore } from "pinia";
import { store } from "@/store";
import { routes } from "@/router/router.config";

export const useAppConfigStore = defineStore({
  id: "app-config",
  state: () => ({
    menuList: routes || [],
    jdUrlParams: {},
    currentRoutes: {},
    breadCrumbList: [],
  }),
  getters: {},
  actions: {
    saveJdUrlParams(data) {
      console.log("当前URL参数", data);
      this.jdUrlParams = data;
    },
    saveCurrentRoutes(data) {
      this.currentRoutes = JSON.parse(data);
    },
    saveBreadCrumbList(data) {
      this.breadCrumbList = data;
    },
  },
});

// Need to be used outside the setup
export function useAppConfigStoreWithOut() {
  return useAppConfigStore(store);
}
