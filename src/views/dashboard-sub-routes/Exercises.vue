<template>
  <div class="sub-router-container exercises-sub-router">
    <h2>
      Exercises
    </h2>

    <exercise-data-display  v-if="!isLoading" :exercises="exercises"/>

    <div v-else class="exercises-sub-router-loading">
        <Spinner />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { ExerciseDataDisplay, Spinner } from '../../components'

export default {
  components: {
    ExerciseDataDisplay,
    Spinner
  },
  methods: {
    ...mapGetters(['getExercises', 'getIsLoading'])
  },
  computed: {
    exercises () {
      return this.getExercises()
    },
    isLoading () {
      return this.getIsLoading()
    }
  }
}
</script>
