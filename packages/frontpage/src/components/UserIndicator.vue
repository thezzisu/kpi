<template>
  <q-btn stretch flat label="Login" text-color="black" @click="login" />
</template>

<script lang="ts" setup>
import { login } from 'src/utils/account'
</script>
