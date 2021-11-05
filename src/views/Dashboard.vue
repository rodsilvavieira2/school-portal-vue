<template>
  <div class="container dashboard">
    <dashboard-sidebar />

    <dashboard-mobile-sidebar />

    <main class="dashboard-main-content">
      <dashboard-header />

      <div class="dashboard-inner-container">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
import { DashboardHeader, DashboardSidebar, DashboardMobileSidebar } from '../components'
import { mapActions } from 'vuex'

export default {
  components: {
    DashboardHeader,
    DashboardSidebar,
    DashboardMobileSidebar
  },
  methods: {
    ...mapActions(['getCurrentUser'])
  },
  mounted () {
    this.getCurrentUser({ id: 1 })
  }
}
</script>
