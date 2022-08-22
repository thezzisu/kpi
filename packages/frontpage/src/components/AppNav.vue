<template>
  <q-drawer
    v-model="nav"
    class="app-nav"
    side="left"
    show-if-above
    :width="220"
    :breakpoint="540"
  >
    <q-list>
      <q-item to="/" exact>
        <q-item-section avatar>
          <img src="https://asset.zisu.dev/svg/logo.svg" width="24" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Home</q-item-label>
        </q-item-section>
      </q-item>
      <q-item v-for="(item, i) of menu" :key="i" :to="item.to" exact>
        <q-item-section avatar>
          <q-icon :name="item.icon" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ item.label }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script setup lang="ts">
const { nav } = defineProps<{ nav: boolean | undefined }>()
const menu = [{ icon: 'mdi-information', label: 'About', to: '/about' }]
</script>

<style lang="scss">
.app-nav {
  background: #f2f2f2cc;
  backdrop-filter: blur(10px);
}
</style>
