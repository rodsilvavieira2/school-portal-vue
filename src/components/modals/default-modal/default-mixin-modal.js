export const defaultModalMixin = {
  emits: ['onRequestClose'],
  methods: {
    onRequestClose () {
      this.$emit('onRequestClose', false)
    }
  }
}
