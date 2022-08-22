<template>
  <q-header elevated class="app-header">
    <q-toolbar class="q-px-none" :class="{ 'text-dark': !$q.dark.isActive }">
      <q-btn
        stretch
        flat
        icon="mdi-menu"
        @click="emit('update:modelValue', !props.modelValue)"
      />
      <q-btn stretch flat no-caps no-wrap to="/" class="app-logo font-juliamo">
        <div class="app-logo_container">
          <div class="app-logo_title">ZISU.dev</div>
          <div class="text-h6 app-logo_subtitle">Status</div>
        </div>
      </q-btn>
      <q-space />
      <q-btn
        stretch
        flat
        icon="mdi-github"
        target="_blank"
        href="https://github.com/thezzisu/assets"
      />
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
const props = defineProps<{ modelValue: boolean | undefined }>()
const emit = defineEmits(['update:modelValue'])
</script>

<style lang="scss">
.app-header {
  background-color: #e4eef3bf;
  backdrop-filter: blur(10px);
}

.app-logo {
  &_container {
    text-align: left;
  }
  &_title {
    margin-top: -10px;
    margin-bottom: -10px;
  }
  &_subtitle {
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
