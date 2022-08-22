<template>
  <q-layout view="hHh Lpr lff">
    <app-header v-model="nav" />
    <app-nav :nav="nav" />
    <q-page-container>
      <router-view v-slot="{ Component }">
        <transition name="router" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </q-page-container>
    <app-footer />
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppFooter from 'src/components/AppFooter.vue'
import AppNav from './components/AppNav.vue'
import AppHeader from './components/AppHeader.vue'

const nav = ref<boolean | undefined>(undefined)
const menu = [{ icon: 'mdi-home', label: 'Home', to: '/' }]
</script>

<style lang="scss">
.app-header {
  background-color: #e4eef3bf;
  backdrop-filter: blur(10px);
}

.app-logo {
  &__text {
    height: 32px;
    vertical-align: center;
    margin-bottom: -4px;
  }
}

.app-nav {
  background: #f2f2f2cc;
  backdrop-filter: blur(10px);
}
</style>
