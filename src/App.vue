<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script setup>
import { getUrlParams } from "@/utils";
import { useAppConfigStore } from "@/store/modules/appConfig";
const _useAppConfigStore = useAppConfigStore();
_useAppConfigStore.saveJdUrlParams(getUrlParams());
</script>

<style lang="scss">
@import "./style.scss";
</style>
