<template>
  <q-page padding class="row content-start">
    <div v-for="component of components" class="col-12 q-pa-sm">
      <q-card>
        <q-card-section>
          <component :is="component" />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import ClockView from 'src/components/ClockView.vue'
import StatusView from 'src/components/StatusView.vue'

const components = [ClockView, StatusView]
</script>
