<template>
  <div class="app_bread_crumb">
    <router-link replace :to="item.path" class="app_bread_crumb_item" v-for="(item, index) in breadCrumbList">
      {{ item.name }}
      <div v-if="index !== breadCrumbList.length - 1" class="split">/</div>
    </router-link>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useAppConfigStore } from "@/store/modules/appConfig";
const _useAppConfigStore = useAppConfigStore();
const { breadCrumbList } = storeToRefs(_useAppConfigStore);

console.log("面包屑～当前路由", breadCrumbList);
</script>

<style lang="scss" scoped>
.app_bread_crumb {
  display: flex;
  align-items: center;
  .app_bread_crumb_item {
    display: flex;
    align-items: center;
    .split {
      margin: 0 8px;
    }
  }
}
</style>
