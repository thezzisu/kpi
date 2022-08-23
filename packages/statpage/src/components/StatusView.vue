<template>
  <div
    class="status-container column justify-center font-juliamo items-stretch full-width full-height"
  >
    <div class="status-progress">
      <q-linear-progress v-if="loading" query track-color="transparent" />
      <q-linear-progress v-else :buffer="countdownRatio" />
    </div>
    <div>
      <div class="status-title" :class="{ 'text-positive': status === 'ok' }">
        {{ status }}
      </div>
      <div class="status-text">{{ text }}</div>
    </div>
    <div></div>
  </div>
</template>

<script setup lang="ts">
import { useStatus } from 'src/composables/status'

const PAGE_ID = 'rm4gOFAYgV'
const { status, text, loading, countdownRatio } = useStatus(PAGE_ID)
</script>

<style lang="scss">
.status-container {
  position: relative;
}

.status-progress {
  position: absolute;
  width: 100%;
  top: 0;
}

.status-title {
  font-size: 6rem;
  text-align: center;
}

.status-text {
  font-size: 2rem;
  text-align: center;
}

.is-fullscreen {
  .status-title {
    font-size: clamp(2rem, min(25vh, 15vw), 30rem);
    text-align: center;
  }

  .status-text {
    font-size: clamp(2rem, min(8vh, 5vw), 30rem);
    text-align: center;
  }

  .clock-date {
    font-size: clamp(2rem, min(10vh, 7vw), 30rem);
    text-align: center;
  }
}
</style>
