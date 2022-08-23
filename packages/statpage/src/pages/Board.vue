<template>
  <q-page padding class="row">
    <div class="col-12">
      <q-card>
        <q-card-actions class="row">
          <q-btn
            label="Enter Fullscreen"
            color="primary"
            unelevated
            class="col-12"
            @click="fullscreen"
          />
        </q-card-actions>
        <q-separator />
        <q-carousel
          v-model="slide"
          swipeable
          animated
          infinite
          autoplay
          :control-color="$q.dark.isActive ? 'white' : 'black'"
          navigation
          padding
          arrows
          height="300px"
          ref="root"
          keep-alive
          keep-alive-include="status"
        >
          <q-carousel-slide name="clock" class="column no-wrap flex-center">
            <clock-view />
          </q-carousel-slide>
          <q-carousel-slide name="status" class="column no-wrap flex-center">
            <status-view />
          </q-carousel-slide>
        </q-carousel>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import type { QCarousel } from 'quasar'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'
import ClockView from 'src/components/ClockView.vue'
import StatusView from 'src/components/StatusView.vue'

const $q = useQuasar()
const $router = useRouter()
const slide = ref('clock')
const root = ref<InstanceType<typeof QCarousel> | null>(null)
onMounted(() => {
  const el = root.value?.$el as HTMLElement
  el.addEventListener('fullscreenchange', (ev) => {
    if (document.fullscreenElement) {
      // Enter fullscreen
      document.body.classList.add('is-fullscreen')
    } else {
      // Leave fullscreen
      document.body.classList.remove('is-fullscreen')
    }
  })
})
function fullscreen() {
  const el = root.value?.$el as HTMLElement
  if (!el) return
  el.requestFullscreen()
}
</script>
