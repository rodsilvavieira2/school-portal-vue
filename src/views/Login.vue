<template>
  <div class="login-view">
    <div class="login-form-wrapper">
      <form @submit.prevent="handleSubmit">
        <Input label="Email" type="email" v-model="email" />

        <Input label="Password" type="password" v-model="password" />

        <Button text="Sign in" type="submint" :isLoading="isLoading" />
      </form>
    </div>
  </div>
</template>

<style lang="sass" scoped>
form
  * + *
    margin-top: 1rem

  button
    margin-top: 1.5rem
</style>

<script>
import { Button, Input } from '../components'

export default {
  components: {
    Input,
    Button
  },
  data () {
    return {
      password: '',
      email: '',
      isLoading: false
    }
  },
  methods: {
    async handleSubmit () {
      this.isLoading = true

      await new Promise((resolve) => setTimeout(resolve, 4000))

      this.$router.push({ name: 'Dashboard' })

      this.isLoading = false
    }
  }
}
</script>
