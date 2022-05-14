<template>
  <div class="app_menu_item">
    <a-sub-menu
      v-if="menuList.children && menuList.children.length > 0"
      :key="menuList.path"
      :index="menuList.path"
    >
      <template #icon>
        <component :is="menuList.meta.icon"></component>
      </template>
      <template #title>{{ menuList.meta.title }}</template>
      <router-link
        v-for="v in menuList.children"
        :key="v.path"
        :to="v.path"
        exact
      >
        <a-menu-item :key="v.path">{{ v.meta.title }}</a-menu-item>
      </router-link>
    </a-sub-menu>

    <router-link v-else :to="menuList.path">
      <a-menu-item :key="menuList.path" :index="menuList.path">
        <template #icon>
          <component :is="menuList.meta.icon"></component>
        </template>
        <span>{{ menuList.meta.title }}</span>
      </a-menu-item>
    </router-link>
  </div>
</template>

<script setup>
const props = defineProps({
  menuList: {
    type: Object,
    default: () => {
      return {};
    },
  },
});

</script>

<style lang="scss" scoped></style>
