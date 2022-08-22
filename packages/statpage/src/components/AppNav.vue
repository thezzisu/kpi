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
      <q-item href="https://zisu.dev">
        <q-item-section avatar>
          <img src="https://slides.zisu.dev/svg/zisu.svg" width="24" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-subtitle1 font-juliamo">
            ZISU.dev
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-item v-for="(item, i) of menu" :key="i" :to="item.to" exact>
        <q-item-section avatar>
          <q-icon :name="item.icon" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-subtitle1 font-juliamo">
            {{ item.label }}
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script setup lang="ts">
const { nav } = defineProps<{ nav: any }>()
const menu = [
  { icon: 'mdi-home', label: 'Home', to: '/' },
  { icon: 'mdi-presentation-play', label: 'Board', to: '/board' }
]
</script>

<style lang="scss">
.app-nav {
  background: #f2f2f2cc;
  backdrop-filter: blur(10px);
}

@media (prefers-color-scheme: dark) {
  .app-nav {
    background: #1a1717cc;
  }
}
</style>
