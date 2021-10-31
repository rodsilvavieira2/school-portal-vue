<template>
  <label class="default-checkbox">
    <input type="checkbox" :name="name" v-model="isChecked" />

    <fa v-if="isChecked" icon='check' />

    <span v-if="label">{{ label }} </span>
  </label>
</template>

<script>
export default {
  computed: {
    isChecked: {
      get () {
        return this.modelValue
      },
      set (value) {
        this.$emit('update:modelValue', value)
      }
    }
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    name: {
      type: String
    },
    modelValue: {
      type: Boolean
    }
  }
}
</script>
