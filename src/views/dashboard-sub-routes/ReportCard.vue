<template>
  <div class="sub-router-container">
    <h2>Report card</h2>

    <div class="dashboard-default-table">
      <div class="dashboard-default-table-wrapper">
        <table class="report-card-table">
          <thead>
            <tr>
              <th>Discipline</th>

              <th>1st</th>

              <th>2nd</th>

              <th>3rd</th>

              <th>4th</th>

              <th>recovery</th>

              <th>Final</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="item in tests" :key="item.id">
              <td>{{ item.discipline }}</td>

              <td v-for="(note , i) in item.notes" :key="i" >{{ note }}</td>

              <td>-</td>

              <td>{{ item.finalNote }}</td>
            </tr>
          </tbody>
        </table>

        <DashboardTableLoading />

      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { DashboardTableLoading } from '../../components'

export default {
  components: {
    DashboardTableLoading
  },
  methods: {
    ...mapGetters(['getTests'])
  },
  computed: {
    tests () {
      return this.getTests()
    }
  }
}
</script>
