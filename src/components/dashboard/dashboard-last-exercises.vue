<template>
  <div class="dashboard-default-table">
    <h3>Last exercises</h3>

    <div class="dashboard-default-table-wrapper home-table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Exercise Name</th>

            <th>Professor</th>

            <th>Discipline</th>

            <th>Status</th>

            <th />
          </tr>
        </thead>

        <tbody>
          <tr v-for="item in exercises" :key="item.id">
            <td>{{ item.name }}</td>

            <td>{{ item.professor }}</td>

            <td>{{ item.discipline }}</td>

            <td>
              <div :class="['status', getStatusClass(item.status)]">
                {{ item.status }}
              </div>
            </td>

            <td>
              <div class="dashboard-default-table-button-wrapper">
                <button class="dashboard-default-table-button">
                  <fa icon="eye" />
                </button>
              </div>
            </td>
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
    ...mapGetters(['getLastExercises', 'getIsLoading']),
    getStatusClass (status) {
      return this.statusClasses[status]
    }
  },
  data () {
    return {
      statusClasses: {
        pending: 'status-pending',
        done: 'status-done',
        late: 'status-late',
        close: 'status-close'
      }
    }
  },
  computed: {
    exercises () {
      return this.getLastExercises()
    },
    isLoading () {
      return this.getIsLoading()
    }
  }
}
</script>
