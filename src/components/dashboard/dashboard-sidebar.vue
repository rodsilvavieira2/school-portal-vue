<template>
  <aside :class="['dashboard-sidebar', shouldCollapseSidebar]">
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

      <ul class="dashboard-sidebar-body" role="navigation">
        <li
          v-for="item in navLinks"
          :class="['dashboard-sidebar-nav-link', navItemIsActive(item.to)]"
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
      currentPage: window.location.pathname,
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
        }
      ]
    }
  },
  components: {
    IconButton
  },
  watch: {
    $route (to) {
      this.currentPage = to.path
    }
  },
  computed: {
    shouldCollapseSidebar () {
      return this.isSidebarCollapsed ? 'collapse-sidebar' : ''
    }
  },
  methods: {
    toggleIsSidebarCollapsed () {
      this.isSidebarCollapsed = !this.isSidebarCollapsed
    },
    navItemIsActive (location) {
      return location === this.currentPage ? 'active-nav-link' : ''
    }
  }
}
</script>
