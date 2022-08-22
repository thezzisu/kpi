<template>
  <q-header elevated class="app-header">
    <q-toolbar class="q-px-none">
      <q-btn
        stretch
        flat
        icon="mdi-menu"
        text-color="black"
        @click="emit('update:modelValue', !props.modelValue)"
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
        <img
          class="app-logo__text"
          src="https://asset.zisu.dev/svg/logo-text.svg"
        />
      </q-btn>
      <q-space />
      <user-indicator />
      <q-btn
        stretch
        flat
        icon="mdi-github"
        text-color="black"
        target="_blank"
        href="https://github.com/thezzisu/kpi/tree/dev/packages/frontpage"
      />
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
import UserIndicator from 'src/components/UserIndicator.vue'

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
    height: 32px;
    vertical-align: center;
    margin-bottom: -4px;
  }
}
</style>
