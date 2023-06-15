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
          <q-item-label class="text-subtitle1 font-juliamo">Home</q-item-label>
        </q-item-section>
      </q-item>
      <q-item
        v-for="item of menu"
        :exact="item.to === '/'"
        v-bind="attrs(item)"
      >
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
const { nav } = defineProps<{ nav: boolean | undefined }>()
const menu = [
  {
    icon: 'mdi-format-float-right',
    label: 'Blog',
    href: 'https://blog.zisu.dev',
    target: '_blank'
  },
  {
    icon: 'mdi-git',
    label: 'Git',
    href: 'https://git.zisu.dev',
    target: '_blank'
  },
  {
    icon: 'mdi-presentation',
    label: 'Slides',
    href: 'https://slides.zisu.dev',
    target: '_blank'
  },
  {
    icon: 'mdi-monitor-dashboard',
    label: 'Status',
    href: 'https://status.zisu.dev',
    target: '_blank'
  },
  { icon: 'mdi-information', label: 'About', to: '/about' }
]
type ItemOf<T> = T extends Array<infer U> ? U : never
function attrs(item: ItemOf<typeof menu>) {
  const { label, icon, ...rest } = item
  return rest
}
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
