<template>
  <q-layout view="hHh Lpr lff">
    <q-header elevated class="app-header">
      <q-toolbar class="q-px-none">
        <q-btn
          stretch
          flat
          icon="mdi-menu"
          text-color="black"
          @click="nav = !nav"
        />
        <q-btn
          stretch
          flat
          no-caps
          no-wrap
          text-color="black"
          to="/"
          class="app-logo"
        >
          <img class="app-logo__text" src="src/assets/text.svg" />
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="nav"
      class="bg-grey-3"
      side="left"
      show-if-above
      :width="220"
      :breakpoint="540"
    >
      <q-list>
        <q-item to="/" exact>
          <q-item-section avatar>
            <img src="src/assets/zisu.svg" width="24" />
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

    <q-page-container>
      <router-view v-slot="{ Component }">
        <transition name="router" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </q-page-container>

    <q-footer elevated>
      <div class="row justify-center">
        <div>
          <code>&copy; thezzisu {{ new Date().getFullYear() }}</code>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const nav = ref<boolean | undefined>(undefined)
const menu = [{ icon: 'mdi-information', label: 'About', to: '/about' }]
</script>

<style lang="scss">
.app-header {
  background-color: #cfd8dc1a;
  backdrop-filter: blur(10px);
}

.app-logo {
  &__text {
    height: 32px;
    vertical-align: center;
    margin-bottom: -4px;
  }
}
</style>
