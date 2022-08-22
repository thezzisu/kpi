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
        class="app-logo font-juliamo"
      >
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
        text-color="black"
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
</style>
