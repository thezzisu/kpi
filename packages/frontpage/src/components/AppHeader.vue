<template>
  <q-header elevated class="app-header">
    <q-toolbar class="q-px-none" :class="{ 'text-dark': !$q.dark.isActive }">
      <q-btn
        stretch
        flat
        icon="mdi-menu"
        @click="emit('update:modelValue', !props.modelValue)"
      />
      <q-btn stretch flat no-caps no-wrap to="/" class="app-logo">
        <span class="text-h5 font-juliamo app-logo_text">ZISU.dev</span>
      </q-btn>
      <q-space />
      <user-indicator />
      <q-btn
        stretch
        flat
        icon="mdi-github"
        target="_blank"
        href="https://github.com/thezzisu/kpi/tree/dev/packages/frontpage"
      />
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar'
import UserIndicator from 'src/components/UserIndicator.vue'

const $q = useQuasar()
const props = defineProps<{ modelValue: boolean | undefined }>()
const emit = defineEmits(['update:modelValue'])
</script>

<style lang="scss">
.app-header {
  background-color: #e4eef3bf;
  backdrop-filter: blur(10px);
}

.app-logo {
  &__text {
    margin-top: -10px;
    margin-bottom: -10px;
  }
}

@media (prefers-color-scheme: dark) {
  .app-header {
    background-color: #1f2122bf;
  }
}
</style>
