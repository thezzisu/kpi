<template>
  <div
    class="clock-container column font-juliamo justify-center"
    :class="{ 'items-end': embed, 'clock-embed': embed }"
  >
    <div class="clock-time">{{ time }}</div>
    <div class="clock-date">{{ date }}</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const { embed } = defineProps<{ embed?: boolean }>()

const time = ref('')
const date = ref('')
function pz(x: number, y = 2) {
  return x.toString().padStart(y, '0')
}
const days = 'Sun,Mon,Tue,Wed,Thu,Fri,Sat'.split(',')
const months = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec'.split(',')

function refresh() {
  const now = new Date()
  const hours = now.getHours()
  time.value =
    [hours % 12 || 12, now.getMinutes(), now.getSeconds()]
      .map((x) => pz(x))
      .join(':') +
    ' ' +
    (hours < 12 ? 'AM' : 'PM')

  const day = days[now.getDay()]
  const month = months[now.getMonth()]
  const year = now.getFullYear()
  date.value = `${day}, ${month} ${pz(now.getDate())} ${year}`
}
refresh()

let timeout: ReturnType<typeof setInterval>
onMounted(() => {
  timeout = setInterval(refresh, 1000)
})
onUnmounted(() => {
  clearInterval(timeout)
})
</script>

<style lang="scss" scoped>
.clock-time {
  font-size: 6rem;
  text-align: center;
}

.clock-date {
  font-size: 3rem;
  text-align: center;
}

.is-fullscreen {
  .clock-time :not(.clock-embed) {
    font-size: clamp(2rem, min(25vh, 15vw), 30rem);
  }

  .clock-date :not(.clock-embed) {
    font-size: clamp(2rem, min(10vh, 7vw), 30rem);
  }
}

.clock-embed {
  .clock-time {
    font-size: 2rem;
  }

  .clock-date {
    font-size: 1rem;
  }
}
</style>
