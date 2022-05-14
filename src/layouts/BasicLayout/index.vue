<template>
  <a-layout class="app_layout">
    <a-layout-sider
      class="app_sider_layout"
      v-model:collapsed="collapsed"
      :trigger="null"
      collapsible
    >
      <Sider />
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="app_header_layout">
        <Header
          :collapsed="collapsed"
          @changeCollapsed="handleChangeCollapsed"
        />
      </a-layout-header>
      <a-layout-content class="app_content_layout">
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer>
        <Footer />
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script setup>
const collapsed = ref(false);

const handleChangeCollapsed = () => {
  collapsed.value = !collapsed.value;
};
</script>

<style lang="scss" scoped>
.app_sider_layout {
  min-height: 100vh;
}
.app_header_layout {
  padding: 0;
  background-color: #fff;
}
.app_content_layout {
  padding: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
[data-theme="dark"] .site-layout .site-layout-background {
  background: #141414;
}
</style>
