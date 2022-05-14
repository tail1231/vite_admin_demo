<template>
  <a-menu
    v-model:selectedKeys="selectedKeys"
    v-model:openKeys="openKeys"
    mode="inline"
    theme="dark"
    @click="handleMenuClick"
  >
    <MenuItem v-for="v in menuList[0].children" :key="v.path" :menuList="v" />
  </a-menu>
</template>

<script setup>
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { useAppConfigStore } from "@/store/modules/appConfig";
const _useAppConfigStore = useAppConfigStore();
const selectedKeys = ref([]);
const openKeys = ref([]);
const { menuList } = storeToRefs(_useAppConfigStore);
const router = useRouter();
const { path, matched, meta } = router.currentRoute.value;
selectedKeys.value[0] = path;

// 菜单项点击
const handleMenuClick = ({ item, key, keyPath }) => {
  let openKeysValue = {};
  openKeysValue.isSingle = keyPath.length == 1;
  openKeysValue.data = {
    key,
    keyPath,
  };
  sessionStorage.setItem("currentOpenKeys", JSON.stringify(openKeysValue));
  _useAppConfigStore.saveCurrentRoutes(JSON.stringify(openKeysValue));
};

// 处理面包屑
const handleBreadCrumb = (data) => {
  let _data = data.filter((v) => v.name);
  _useAppConfigStore.saveBreadCrumbList(_data);
};

onMounted(() => {
  const openKeysValue = JSON.parse(sessionStorage.getItem("currentOpenKeys"));
  _useAppConfigStore.saveCurrentRoutes(JSON.stringify(openKeysValue));
  console.log("当前openKeys", openKeysValue);
  console.log("当前route", meta);
  menuList.value = menuList.value.filter((v) => v.meta.isAsync);
  // console.log("过滤菜单", menuList.value);
  if (meta.hasSub && openKeysValue && !openKeysValue.isSingle) {
    openKeys.value = [openKeysValue.data.keyPath[0]];
  }
});

watchEffect(() => {
  console.log("watch", router.currentRoute.value.matched);
  handleBreadCrumb(router.currentRoute.value.matched);
});

// 1. 访问没有children的路由，刷新的时候，只记住高亮，其它展开项要收起来
// 2. 访问子路由，要自动展开子菜单
</script>

<style scoped lang="scss"></style>
