<template>
  <label class="default-input">
    {{ label }}
    <input :type="type" v-model="inputValue" />
  </label>
</template>

<script>
export default {
  props: {
    label: String,
    type: String,
    modelValue: {
      type: String
    }
  },
  computed: {
    inputValue: {
      get () {
        return this.modelValue
      },
      set (value) {
        this.$emit('update:modelValue', value)
      }
    }
  }
}
</script>
