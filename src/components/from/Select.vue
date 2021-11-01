<template>
  <label class="default-select">
    <span v-if="label"> {{ label }} </span>

    <div class="select-wrapper">
      <select :name="name">
        <slot />
      </select>
    </div>
  </label>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  }
}
</script>
