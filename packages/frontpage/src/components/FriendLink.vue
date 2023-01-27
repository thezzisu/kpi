<template>
  <q-item clickable v-ripple :href="props.link" target="_blank">
    <q-item-section side>
      <q-avatar rounded size="48px">
        <img :src="props.avatar" />
        <q-badge v-if="props.label" floating>
          {{ props.label }}
        </q-badge>
      </q-avatar>
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ props.name }}</q-item-label>
      <q-item-label caption>{{ props.desc }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
const props = defineProps<{
  avatar: string
  name: string
  link: string
  desc: string
  label?: string
}>()
</script>
