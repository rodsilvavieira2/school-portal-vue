<template>
  <div @keydown.esc="onESQ" class="default-modal-overlay" ref="modalOverlayRef">
    <div
      class="default-modal-content more-subject-detail-modal"
      ref="modal"
      role="dialog"
      tabindex="-1"
      aria-labelledby="title"
      aria-modal="true"
    >
      <h3 id="title">{{ title }}</h3>

      <div class="more-subject-detail-modal-content">
        <slot />
      </div>

      <button
        @click="onRequestClose"
        class="default-modal-content-close-button"
      >
        <fa icon="times-circle" />
      </button>
    </div>
  </div>
</template>

<script>
import { defaultModalMixin } from './default-mixin-modal'

export default {
  mixins: [defaultModalMixin],
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  mounted () {
    this.$refs.modal.focus()
    this.setEvents()
  },
  unmounted () {
    window.document.body.removeEventListener(
      'click',
      this.hashClickOutSide.bind(this)
    )
  },
  methods: {
    hashClickOutSide (e) {
      if (e.target.isSameNode(this.$refs.modalOverlayRef)) {
        this.onRequestClose()
      }
    },
    setEvents () {
      window.document.body.addEventListener(
        'click',
        this.hashClickOutSide.bind(this)
      )
    },
    onESQ () {
      this.onRequestClose()
    }
  }
}
</script>
