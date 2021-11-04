<template>
  <div class="dashboard-default-table">
    <h3>Next tests</h3>

    <div class="dashboard-default-table-wrapper home-table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Discipline</th>

            <th>Professor</th>

            <th>Note</th>

            <th>Test date</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item in tests" :key="item.id">
            <td>{{ item.discipline }}</td>

            <td>{{ item.professor }}</td>

            <td>{{ item.maxNote }}</td>

            <td>{{ item.testDate }}</td>
          </tr>
        </tbody>
      </table>

      <DashboardTableLoading />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import DashboardTableLoading from './dashboard-table-loading.vue'

export default {
  components: {
    DashboardTableLoading
  },
  methods: {
    ...mapGetters(['getNextTests'])
  },
  computed: {
    tests () {
      return this.getNextTests()
    }
  }
}
</script>
