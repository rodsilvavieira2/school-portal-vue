<template>
  <DefaultModal
    title="Subject details"
    :isModalOpen="isModalOpen"
    @on-request-close="onRequestClose"
  >
    <p>
      {{ modalContent }}
    </p>
  </DefaultModal>
</template>

<script>
import { derivedModalMixin } from './derived-modal-mixins'

export default {
  mixins: [derivedModalMixin],
  props: {
    modalContent: {
      type: String,
      default: ''
    }
  }
}
</script>
