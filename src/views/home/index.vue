<template>
  <div>首页 page</div>
</template>

<script setup>
import { authApi } from "@/service/api.js";
import { useAppConfigStore } from "@/store/modules/appConfig";
const _useAppConfigStore = useAppConfigStore();

// onMounted(() => {
//   handleInit();
// });

// // 初始化数据
// const handleInit = async () => {
//   const res = await authApi({
//     code: _useAppConfigStore.jdUrlParams.code,
//   });
//   console.log("初始化数据", res);
// };
</script>

<style scoped></style>
