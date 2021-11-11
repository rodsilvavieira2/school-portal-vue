<template>
  <div
    v-on:animationend="emitClose"
    :style="[getContainerStyle(type), animation]"
    role="alert"
    class="default-container-toast-item"
    aria-labelledby="toast-title"
  >
    <div class="default-container-toast-item-icon">
      <fa :icon="typeIcons[type].icon" />
    </div>

    <div class="default-container-toast-item-text">
      <strong id="toast-title">{{ title }}</strong>

      <p>{{ text }}</p>
    </div>

    <button
      @click="onRequestClose"
      aria-label="close toast"
      class="default-container-toast-item-button"
      type="button"
    >
      X
    </button>
  </div>
</template>

<script>
export default {
  emits: ['onRequestClose'],
  props: {
    id: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: 'success'
    },
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    duration: {
      type: Number,
      default: 5000
    }
  },
  methods: {
    getContainerStyle (type) {
      return {
        backgroundColor: this.typeIcons[type].color
      }
    },
    emitClose () {
      if (!this.isOpen) {
        this.$emit('onRequestClose', this.id)
      }
    },
    onRequestClose () {
      this.isOpen = false
    },
    setTimeToClose () {
      window.setTimeout(() => this.onRequestClose(), this.duration)
    }
  },
  mounted () {
    this.setTimeToClose()
  },
  computed: {
    animation () {
      const animation = this.isOpen
        ? 'toast-enter 0.4s  forwards ease'
        : 'toast-exit 0.3s  forwards ease'

      return {
        animation
      }
    }
  },
  data () {
    return {
      typeIcons: {
        error: {
          icon: 'exclamation-circle',
          color: '#E53E3E'
        },
        info: {
          icon: 'info-circle',
          color: '#3688fc'
        },
        alert: {
          icon: 'exclamation-triangle',
          color: '#ED8936'
        },
        success: {
          icon: 'check-circle',
          color: '#38A169'
        }
      },
      isOpen: true
    }
  }
}
</script>
