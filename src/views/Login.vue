<template>
  <div class="login-view">
    <div class="login-form-wrapper">
      <form @submit.prevent="handleSubmit">
        <Input
          label="Email"
          type="email"
          v-model="email.value"
          :error="email.error"
        />

        <Input
          label="Password"
          type="password"
          v-model="password.value"
          :error="password.error"
        />

        <LoginButton type="submit" :isLoading="isLoading" >
          Sign in
        </LoginButton>
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
import { LoginButton, Input } from '../components'
import { Validate } from '../helpers'

export default {
  components: {
    Input,
    LoginButton
  },
  data () {
    return {
      password: {
        value: '',
        error: ''
      },
      email: {
        value: '',
        error: ''
      },
      isLoading: false
    }
  },
  methods: {
    checkInputs () {
      const emailErrorMessage = Validate.setValue(this.email.value)
        .required('Required email address')
        .isEmail()
        .getMessage()

      this.email.error = emailErrorMessage

      const passwordErrorMessage = Validate.setValue(this.password.value)
        .required('Required password')
        .getMessage()

      this.password.error = passwordErrorMessage

      return !(emailErrorMessage || passwordErrorMessage)
    },
    async handleSubmit () {
      this.isLoading = true

      if (this.checkInputs()) {
        await new Promise((resolve) => setTimeout(resolve, 4000))

        this.$router.push({ path: '/dashboard' })
      }

      this.isLoading = false
    }
  }
}
</script>
