<template>
  <button :disabled="isLoading" :type="type" class="default-button">
    {{ showLoadingStatus }}
    <div v-if="isLoading" class="spinner" />
  </button>
</template>

<style lang="sass">
.spinner
  display: inline-block
  height: 1.875rem
  width: 1.875rem
  border-radius: 30px
  border: 4px solid #A0AEC0
  border-top-color: #fff
  border-bottom-color: #fff
  animation: spinner-button 0.55s linear infinite

  @keyframes spinner-button
    0%
      transform: rotate(0)
    100%
      transform: rotate(360deg)
</style>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'button'
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    showLoadingStatus () {
      return this.isLoading ? null : this.text
    }
  }
}
</script>
