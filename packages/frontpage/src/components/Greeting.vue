<template>
  <q-card flat>
    <q-card-section class="font-mono">
      <div class="text-h6">I'am @thezzisu,</div>
      <div class="text-h4">and I build softwares.</div>
      <div class="q-pt-md">
        <a
          v-for="(s, i) in social"
          :key="i"
          :href="s.href"
          target="_blank"
          class="pr-1"
          rel="noreferrer"
        >
          <img :src="s.img" :alt="s.text" />
        </a>
      </div>
      <div>
        <template v-for="(c, i) in contacts" :key="i">
          <a
            v-if="c.href"
            :href="c.href"
            target="_blank"
            class="q-pr-sm"
            rel="noreferrer"
          >
            <img
              :src="`https://img.shields.io/static/v1?label=${c.label}&message=${c.text}&color=${c.color}&style=flat-square&logo=${c.icon}&logoColor=FFF`"
              :alt="c.text"
            />
          </a>
          <img
            v-else
            :src="`https://img.shields.io/static/v1?label=${c.label}&message=${c.text}&color=${c.color}&style=flat-square&logo=${c.icon}&logoColor=FFF`"
            :alt="c.text"
            class="q-pr-sm"
          />
        </template>
      </div>
    </q-card-section>
    <q-separator />
    <FriendLinks class="font-mono" />
    <q-separator />
    <q-card-section class="font-mono">
      <div class="text-center">A proud member of</div>
      <div class="flex justify-center">
        <q-btn
          icon="mdi-train"
          target="_blank"
          href="https://www.travellings.cn/go.html"
          outline
          label="Travelling"
          class="text-capitalize"
        />
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import FriendLinks from './FriendLinks.vue'

const social = [
  {
    href: 'https://github.com/thezzisu',
    img: 'https://img.shields.io/github/followers/thezzisu?label=Follow%20%40thezzisu&style=social',
    text: 'GitHub'
  },
  {
    href: 'https://twitter.com/thezzisu',
    img: 'https://img.shields.io/twitter/follow/thezzisu?style=social',
    text: 'Twitter'
  }
]

const contacts = [
  {
    color: '07C160',
    icon: 'wechat',
    text: 'thezzisu',
    label: ''
  },
  {
    href: 'https://t.me/thezzisu',
    color: '2CA5E0',
    icon: 'telegram',
    text: 'thezzisu',
    label: ''
  },
  {
    color: '5865F2',
    icon: 'discord',
    text: 'thezzisu%231922',
    label: ''
  },
  {
    href: 'https://space.bilibili.com/38430118',
    color: '00A1D6',
    icon: 'bilibili',
    text: 'thezzisu',
    label: ''
  },
  {
    href: 'https://www.zhihu.com/people/zhangzisu',
    color: '0084FF',
    icon: 'zhihu',
    text: 'thezzisu',
    label: ''
  },
  {
    color: 'EB1923',
    text: '2807616946',
    icon: 'tencentqq',
    label: ''
  },
  {
    text: '(86) 18067896891',
    label: 'TEL'
  },
  {
    href: 'mailto:thezzisu@gmail.com',
    color: 'blue',
    icon: 'gmail',
    text: 'thezzisu@gmail.com',
    label: 'Personal'
  },
  {
    href: 'mailto:thezzisu@stu.pku.edu.cn',
    color: 'blue',
    icon: 'gmail',
    text: 'thezzisu@stu.pku.edu.cn',
    label: 'School'
  }
]
</script>
