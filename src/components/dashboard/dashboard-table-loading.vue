<template>
  <div v-if="isLoading" class="dashboard-default-table-loading">
    <Spinner />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Spinner } from '../progress'

export default {
  components: {
    Spinner
  },
  methods: {
    ...mapGetters(['getIsLoading'])
  },
  computed: {
    isLoading () {
      return this.getIsLoading()
    }
  }
}
</script>
