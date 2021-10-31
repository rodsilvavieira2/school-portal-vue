<template>
  <button class="default-icon-button" type="submit" :aria-label="ariaLabel">
    <fa :icon="icon" />
  </button>
</template>

<script>
export default {
  props: {
    ariaLabel: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  }
}
</script>
