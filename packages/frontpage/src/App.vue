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
import { useQuasar } from 'quasar'
import AppNav from 'src/components/AppNav.vue'
import AppHeader from 'src/components/AppHeader.vue'
import AppFooter from 'src/components/AppFooter.vue'

const $q = useQuasar()
$q.dark.set('auto')

const nav = ref<boolean | undefined>(undefined)
</script>
