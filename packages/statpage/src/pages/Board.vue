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
        <q-responsive :ratio="1024 / 600" style="max-height: min(70vh, 70vw)">
          <div style="position: relative" class="full-height" ref="root">
            <q-carousel
              v-model="slide"
              swipeable
              animated
              infinite
              :autoplay="autoplay"
              :control-color="$q.dark.isActive ? 'white' : 'black'"
              navigation
              padding
              arrows
              height="100%"
              keep-alive
              keep-alive-include="status"
            >
              <q-carousel-slide name="clock" class="column no-wrap flex-center">
                <clock-view />
              </q-carousel-slide>
              <q-carousel-slide
                name="status"
                class="column no-wrap flex-center"
              >
                <status-view />
              </q-carousel-slide>
            </q-carousel>
            <div class="board-control q-pr-md q-pt-sm" style="opacity: 0.5">
              <q-btn
                round
                flat
                :icon="autoplay ? 'mdi-play' : 'mdi-pause'"
                @click="autoplay = !autoplay"
              />
            </div>
            <div class="board-floating q-pr-md q-pb-sm" style="opacity: 0.5">
              <clock-view v-if="slide !== 'clock'" embed />
            </div>
          </div>
        </q-responsive>
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
const autoplay = ref(true)
const slide = ref('clock')
const root = ref<HTMLElement | null>(null)
onMounted(() => {
  const el = root.value as HTMLElement
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
  const el = root.value as HTMLElement
  if (!el) return
  el.requestFullscreen()
}
</script>

<style lang="scss">
.board-floating {
  position: absolute;
  top: 0;
  right: 0;
}

.board-control {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
