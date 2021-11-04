<template>
  <div class="sub-router-container exercises-sub-router">
    <h2>Exercises</h2>

    <div class="default-select-period">
      <Select label="Time interval :">
        <option value="today" selected>Today</option>

        <option value="this-week">This week</option>

        <option value="this-month">This month</option>
      </Select>

      <Select label="Course subject :">
        <option value="today" selected>All</option>

        <option value="this-week">This week</option>

        <option value="this-month">This month</option>
      </Select>
    </div>

    <div class="dashboard-default-table exercises-table">
      <div class="dashboard-default-table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Exercise</th>

              <th>Discipline</th>

              <th>Requested at</th>

              <th>Delivery date</th>

              <th>Status</th>

              <th>Response</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="item in exercises" :key="item.id">
              <td>
                <p>{{ item.name }}</p>
              </td>

              <td class="exercises-table-discipline-row">
                <p>{{ item.discipline }}</p>
              </td>

              <td>
                <time>{{ item.request_at }}</time>
              </td>

              <td>
                <time>{{ item.end_date }}</time>
              </td>

              <td>
                <div :class="['status', getStatusClass(item.status)]">
                  {{ item.status }}
                </div>
              </td>

              <td>
                <div class="dashboard-default-table-button-wrapper">
                  <button
                    aria-label="show current exercise response"
                    @click="openModal(item.id)"
                    class="dashboard-default-table-button"
                  >
                    <fa icon="inbox" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <DashboardTableLoading />

        <ExerciseResponseModal
          @on-request-close="onRequestClose"
          :isModalOpen="isModalOpen"
          :currentResponses="currentResponses"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import {
  Select,
  DashboardTableLoading,
  ExerciseResponseModal
} from '../../components'

export default {
  components: {
    Select,
    DashboardTableLoading,
    ExerciseResponseModal
  },
  methods: {
    ...mapGetters(['getExercises']),
    openModal (id) {
      const responses = this.exercises.find((item) => item.id === id).responses

      this.currentResponses = responses

      this.isModalOpen = true
    },
    onRequestClose () {
      this.isModalOpen = false
    },
    getStatusClass (status) {
      return this.statusClasses[status]
    }
  },
  data () {
    return {
      isModalOpen: false,
      currentResponses: [],
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
      return this.getExercises()
    }
  }
}
</script>
