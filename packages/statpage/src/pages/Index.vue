<template>
  <q-page padding class="row">
    <div class="col">
      <q-card>
        <q-card-section>
          <clock-view />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import ClockView from '../components/ClockView.vue'

const a = ref(1)
</script>
