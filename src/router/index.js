import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./router.config";

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BASE_URL), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export default router;
