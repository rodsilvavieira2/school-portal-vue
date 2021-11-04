<template>
  <div class="sub-router-container classes-sub-router">
    <h2>Classes</h2>

    <div class="default-select-period">
      <Select label="Time interval :">
        <option value="today" selected>Today</option>

        <option value="this-week">This week</option>

        <option value="this-month">This month</option>
      </Select>

      <Select label="Course subject :">
        <option value="today" selected>Today</option>

        <option value="this-week">This week</option>

        <option value="this-month">This month</option>
      </Select>
    </div>

    <div class="dashboard-default-table classes-table">
      <div class="dashboard-default-table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Date</th>

              <th>Discipline</th>

              <th>Content</th>

              <th>Material</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="item in classes" :key="item.id">
              <td>
                <time> {{ item.date }} </time>
              </td>

              <td class="classes-table-discipline">
                <p>{{ item.discipline }}</p>
              </td>

              <td class="classes-table-content">
                <p>
                  {{ item.content }}
                </p>
              </td>

              <td>
                <div class="dashboard-default-table-button-wrapper">
                  <button
                    @click="openModal(item.id)"
                    aria-label="open current class material"
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

        <ClassMaterialModal
          @on-request-close="onRequestClose"
          :isModalOpen="isModalOpen"
          :materials="currentMaterials"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import {
  DashboardTableLoading,
  ClassMaterialModal,
  Select
} from '../../components'

export default {
  components: {
    DashboardTableLoading,
    ClassMaterialModal,
    Select
  },
  data () {
    return {
      isModalOpen: false,
      currentMaterials: []
    }
  },
  methods: {
    ...mapGetters(['getClasses']),
    openModal (id) {
      const materials = this.classes.find(
        (item) => item.id === id
      ).materials

      this.currentMaterials = materials

      this.isModalOpen = true
    },
    onRequestClose () {
      this.isModalOpen = false
    }
  },
  computed: {
    classes () {
      return this.getClasses()
    }
  }
}
</script>
