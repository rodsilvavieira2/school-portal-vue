<template>
  <div class="sub-router-container home">
    <DashboardLastExercises />

    <DashBoardNextTests />
  </div>
</template>

<style lang="sass">

.home
  > div + div
    margin-top: 2rem
</style>

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
