<template>
  <div class="app_header">
    <div class="collapsed_icon">
      <menu-unfold-outlined
        v-if="collapsed"
        class="trigger"
        @click="handleChangeCollapsed"
      />
      <menu-fold-outlined
        v-else
        class="trigger"
        @click="handleChangeCollapsed"
      />
    </div>
    <BreadCrumb />
  </div>
</template>

<script setup>
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue";
const props = defineProps({
  collapsed: {
    type: Boolean,
    default: true,
  },
});
const emits = defineEmits(["changeCollapsed"]);

const handleChangeCollapsed = () => {
  emits("changeCollapsed");
};
</script>

<style scoped lang="scss">
.app_header {
  display: flex;
  align-items: center;
}
.collapsed_icon {
  margin: 0 16px 0 16px;
}
</style>
