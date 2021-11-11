<template>
  <label class="default-input">
    {{ label }}

    <input :type="type" v-model="inputValue" :class="isError" />

    <div role="alert" class="default-input-error-message" v-if="error">{{ error }}</div>
  </label>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    modelValue: {
      type: String
    },
    error: {
      type: String,
      default: ''
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
    },
    isError () {
      return this.error ? 'default-input-error' : ''
    }
  }
}
</script>
