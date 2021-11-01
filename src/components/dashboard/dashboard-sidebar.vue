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
        <li
          v-for="item in navLinks"
          class="dashboard-sidebar-nav-link"
          :key="item.id"
        >
          <router-link tabindex="0" :to="item.to">
            <fa :icon="item.icon" />

            <span> {{ item.label }} </span>
          </router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import { IconButton } from '../from'

export default {
  data () {
    return {
      isSidebarCollapsed: false,
      navLinks: [
        {
          id: 1,
          label: 'Home',
          icon: 'home',
          to: '/dashboard'
        },
        {
          id: 2,
          label: 'Classes',
          icon: 'school',
          to: '/dashboard/classes'
        },
        {
          id: 3,
          label: 'Exercises',
          icon: 'book-open',
          to: '/dashboard/exercises'
        },
        {
          id: 4,
          label: 'Report card',
          icon: 'address-card',
          to: '/dashboard/report-card'
        },
        {
          id: 5,
          label: 'School subjects',
          icon: 'book',
          to: '/dashboard/school-subjects'
        },
        {
          id: 6,
          label: 'Note Detailing',
          icon: 'clipboard',
          to: '/dashboard/note-detailing'
        },
        {
          id: 7,
          label: 'Performance Charts',
          icon: 'chart-line',
          to: '/dashboard/performance-charts'
        }
      ]
    }
  },
  components: {
    IconButton
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
