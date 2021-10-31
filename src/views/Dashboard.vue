<template>
  <div class="container dashboard">
    <dashboard-sidebar />

    <main class="dashboard-main-content">
      <dashboard-header />

      <div class="dashboard-inner-container">
        <DashboardLastExercises />

        <DashBoardNextTests />
      </div>
    </main>
  </div>
</template>

<script>
import {
  DashboardHeader,
  DashboardSidebar,
  DashboardLastExercises,
  DashBoardNextTests
} from '../components'

export default {
  components: {
    DashboardHeader,
    DashboardSidebar,
    DashboardLastExercises,
    DashBoardNextTests
  },
  date () {
    return {
      date: new Date()
    }
  }
}
</script>
