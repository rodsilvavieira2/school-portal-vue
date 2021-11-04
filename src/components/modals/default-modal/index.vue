<template>
  <teleport to="body">
    <DefaultModalContent
      :title="title"
      v-if="isModalOpen"
      @on-request-close="onRequestClose"
    >
      <slot />
    </DefaultModalContent>
  </teleport>
</template>

<script>
import DefaultModalContent from './default-modal-content.vue'
import { defaultModalMixin } from './default-mixin-modal.js'

export default {
  mixins: [defaultModalMixin],
  components: {
    DefaultModalContent
  },
  props: {
    isModalOpen: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
