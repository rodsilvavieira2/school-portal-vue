<template>
  <div class="default-avatar">
    <img
      v-if="src && !isError && !isLoading"
      :src="src"
      :alt="name"
      @load="onLoadImage"
      @error.stop="onErrorOnLoadImage"
    />

    <span v-else> {{ getInitials }} </span>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: false,
      default: ''
    },
    name: {
      type: String,
      required: false,
      default: ''
    }
  },
  methods: {
    onErrorOnLoadImage () {
      this.isError = true
      this.isLoading = false
    },
    onLoadImage () {
      this.isLoading = false
    }
  },
  computed: {
    getInitials () {
      const [firstName, lastName] = this.name.split(' ')

      return firstName && lastName
        ? `${firstName.charAt(0)}${lastName.charAt(0)}`
        : firstName.charAt(0)
    }
  },
  data () {
    return {
      isError: false,
      isLoading: false
    }
  }
}
</script>
