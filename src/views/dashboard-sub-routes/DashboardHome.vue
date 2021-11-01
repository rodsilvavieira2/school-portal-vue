<template>
  <div class="sub-router-container sub-router-home">
    <h2>Home</h2>

    <DashboardLastExercises />

    <DashBoardNextTests />
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
