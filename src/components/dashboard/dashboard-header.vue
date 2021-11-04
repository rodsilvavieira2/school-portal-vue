<template>
  <header class="dashboard-header">
    <div class="dashboard-header-container">
      <div class="dashboard-header-profile">
        <button
          class="dashboard-header-button"
          aria-label="exit from the application"
          @click="signOut"
        >
          <fa icon="sign-out-alt" />
        </button>

        <button class="dashboard-header-button" aria-label="show notifications">
          <fa icon="bell" />
        </button>

        <router-link to="/dashboard/profile">
          <avatar :name="user.name" />
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
import { Avatar } from '../from'
import { mapGetters } from 'vuex'

export default {
  components: {
    Avatar
  },
  methods: {
    async signOut () {
      this.$router.push({ name: 'Home' })
    },
    ...mapGetters(['getUserProfileData'])
  },
  computed: {
    user () {
      return this.getUserProfileData()
    }
  }
}
</script>
