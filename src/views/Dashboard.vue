<template>
  <div class="container dashboard">
    <dashboard-sidebar />

    <main class="dashboard-main-content">
      <dashboard-header />

      <div class="dashboard-inner-container">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
import { DashboardHeader, DashboardSidebar } from '../components'
import { mapActions } from 'vuex'

export default {
  components: {
    DashboardHeader,
    DashboardSidebar
  },
  methods: {
    ...mapActions(['getCurrentUser'])
  },
  mounted () {
    this.getCurrentUser({ id: 1 })
  }
}
</script>
