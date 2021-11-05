<template>
  <header class="dashboard-header">
    <div class="dashboard-header-container">
      <IconButton
          class="dashboard-header-container-mobile-toggle-button"
          ariaLabel="collapse mobile sidebar"
          icon="bars"
          @click="toggleMobileSidebar"
        />

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
import { Avatar, IconButton } from '../from'
import { mapGetters, mapMutations } from 'vuex'

export default {
  components: {
    Avatar,
    IconButton
  },
  methods: {
    async signOut () {
      this.$router.push({ name: 'Home' })
    },
    ...mapGetters(['getUserProfileData']),
    ...mapMutations(['toggleMobileSidebar'])
  },
  computed: {
    user () {
      return this.getUserProfileData()
    }
  }
}
</script>
