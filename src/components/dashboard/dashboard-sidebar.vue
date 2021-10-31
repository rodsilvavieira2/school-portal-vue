<template>
  <aside :class="collapseSidebar()">
    <div class="dashboard-sidebar-container">
      <header class="dashboard-sidebar-header">
        <div>
          <img src="../../assets/logo.png" alt="DevSchool" />

          <p>DevSchool</p>
        </div>

        <IconButton
          ariaLabel="collapse sidebar"
          icon="bars"
          @click="toggleIsSidebarCollapsed"
        />
      </header>

      <ul class="dashboard-sidebar-body">
        <dashboard-nav-link
          v-for="item in navLinks"
          :key="item.id"
          :icon="item.icon"
          :label="item.label"
          :to="item.to"
        />
      </ul>
    </div>
  </aside>
</template>

<script>
import { IconButton } from '../from'
import DashboardNavLink from './dashboard-nav-link.vue'

export default {
  data () {
    return {
      isSidebarCollapsed: false,
      navLinks: [
        {
          id: 1,
          label: 'Classes',
          icon: 'school',
          to: '/classes'
        },
        {
          id: 2,
          label: 'Exercises',
          icon: 'book-open',
          to: '/exercises'
        },
        {
          id: 3,
          label: 'Report card',
          icon: 'address-card',
          to: '/report-card'
        },
        {
          id: 4,
          label: 'School subjects',
          icon: 'book',
          to: '/school-subjects'
        },
        {
          id: 5,
          label: 'Note Detailing',
          icon: 'clipboard',
          to: '/note-detailing'
        },
        {
          id: 6,
          label: 'Performance Charts',
          icon: 'chart-line',
          to: '/performance charts'
        }
      ]
    }
  },
  components: {
    IconButton,
    DashboardNavLink
  },
  methods: {
    collapseSidebar () {
      return this.isSidebarCollapsed
        ? 'dashboard-sidebar  collapse-sidebar'
        : 'dashboard-sidebar'
    },
    toggleIsSidebarCollapsed () {
      this.isSidebarCollapsed = !this.isSidebarCollapsed
    }
  }
}
</script>
