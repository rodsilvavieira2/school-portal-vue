<template>
  <div class="sub-router-container">
    <h2>School Subjects</h2>

    <div class="dashboard-default-table">
      <div class="dashboard-default-table-wrapper">
        <table class="school-subjects-table">
          <thead>
            <tr>
              <th>Discipline</th>

              <th class="school-subjects-table-more-details-column">
                More details
              </th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="item in disciplines" :key="item.id">
              <td class="school-subjects-table-discipline-row">
                <p>{{ item.name }}</p>
              </td>

              <td>
                <div class="dashboard-default-table-button-wrapper">
                  <button
                    @click="openMoreDetailsModal(item.id)"
                    class="dashboard-default-table-button"
                  >
                    <fa icon="eye" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <dashboard-table-loading />

        <more-subject-detail-modal
          @on-request-close="onRequestClose"
          :isModalOpen="isModalOpen"
          :modalContent="currentModalContent"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { DashboardTableLoading, MoreSubjectDetailModal } from '../../components'

export default {
  components: {
    DashboardTableLoading,
    MoreSubjectDetailModal
  },
  data () {
    return {
      isModalOpen: false,
      currentModalContent: ''
    }
  },
  methods: {
    ...mapActions(['loadUserCourse']),
    ...mapGetters(['getUseDisciplines']),
    openMoreDetailsModal (id) {
      this.isModalOpen = true
      this.currentModalContent = this.disciplines.find(
        (item) => item.id === id
      ).description
    },
    onRequestClose () {
      this.isModalOpen = false
    }
  },
  mounted () {
    this.loadUserCourse()
  },
  computed: {
    disciplines () {
      return this.getUseDisciplines()
    }
  }
}
</script>
