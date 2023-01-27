<template>
  <q-card-section>
    <div class="text-subtitle1">Friend Links</div>
    <div class="row">
      <div
        class="col-12 col-md-4 col-lg-2 col-xl-1"
        v-for="link in friendLinks"
      >
        <FriendLink v-bind="link" />
      </div>
    </div>
  </q-card-section>
</template>

<script setup lang="ts">
import FriendLink from './FriendLink.vue'

const friendLinks = [
  {
    avatar: 'https://s2.loli.net/2023/01/27/XA2Yr7TuwcNWhOp.jpg',
    name: 'crazyman_army',
    link: 'https://crazymanarmy.github.io',
    desc: 'CTFer@r3kapig. Leader of Gcow Security Team SubGroup - ShadowChasing Group'
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/11159084?v=4',
    name: 'GCC314',
    link: 'https://gcc314.top',
    desc: 'Major in engineering mechanics & minor in computer science. @PKU'
  }
]
</script>
