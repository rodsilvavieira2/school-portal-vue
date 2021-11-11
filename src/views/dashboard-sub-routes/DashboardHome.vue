<template>
  <div class="sub-router-container sub-router-home">
    <h2>Home</h2>

    <dashboard-last-exercises />

    <dashBoard-next-tests />
  </div>
</template>

<script>
import {
  DashboardLastExercises,
  DashBoardNextTests
} from '../../components/dashboard'

export default {
  components: {
    DashboardLastExercises,
    DashBoardNextTests
  }
}
</script>
