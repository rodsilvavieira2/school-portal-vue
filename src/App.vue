<template>
  <router-view />

  <Toasts />
</template>

<script>
import { Toasts } from './components'

export default {
  components: {
    Toasts
  }
}
</script>
