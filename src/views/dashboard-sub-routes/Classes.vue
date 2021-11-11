<template>
  <div class="sub-router-container classes-sub-router">
    <h2>Classes</h2>

    <classes-data-display v-if="!isLoading" :classes="classes" />

    <div v-else class="classes-sub-router-loading">
      <Spinner />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import {
  ClassesDataDisplay,
  Spinner
} from '../../components'

export default {
  components: {
    ClassesDataDisplay,
    Spinner
  },
  methods: {
    ...mapGetters(['getClasses', 'getIsLoading'])
  },
  computed: {
    classes () {
      return this.getClasses()
    },
    isLoading () {
      return this.getIsLoading()
    }
  }
}
</script>
