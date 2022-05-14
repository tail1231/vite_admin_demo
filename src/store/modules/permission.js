import { defineStore } from "pinia";
import { store } from "@/store";

export const usePermissioStore = defineStore({
  id: "app-permission",
  state: () => ({
    // hasUserInfo
    hasUserInfo: false,
    mixNick:
      "钱018QMAEZ/knRc1ASE2LCEUDJAYVW3+YtiA3PowvrcnSEc=&open_id=AAH9sCk2AMJLuLLeEBC3ztj8", // 混淆昵称
  }),
  getters: {
    getHasUserInfo() {
      return this.hasUserInfo;
    },
    getMixNick() {
      return this.mixNick;
    },
  },
  actions: {
    setAuth() {
      this.hasUserInfo = true;
    },
    resetState() {
      this.hasUserInfo = false;
    },
  },
});

// Need to be used outside the setup
export function usePermissioStoreWithOut() {
  return usePermissioStore(store);
}
