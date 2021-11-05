<template>
  <aside :class="['mobile-sidebar', shouldCollapseSidebar]">
    <div class="mobile-sidebar-container">
      <header class="mobile-sidebar-header">
        <div>
          <img src="../../assets/logo.png" alt="DevSchool" />

          <p>DevSchool</p>
        </div>

        <IconButton
          ariaLabel="collapse sidebar"
          icon="bars"
          @click="toggleMobileSidebar"
        />
      </header>

      <ul class="mobile-sidebar-body" role="navigation">
        <li
          v-for="item in navLinks"
          :class="['mobile-sidebar-nav-link', navItemIsActive(item.to)]"
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
import { mapMutations, mapGetters } from 'vuex'

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
      return this.getIsMobileSidebarOpen() ? '' : 'show-mobile-sidebar'
    }
  },
  methods: {
    ...mapMutations(['toggleMobileSidebar']),
    ...mapGetters(['getIsMobileSidebarOpen']),
    toggleIsSidebarCollapsed () {
      this.isSidebarCollapsed = !this.isSidebarCollapsed
    },
    navItemIsActive (location) {
      return location === this.currentPage ? 'active-nav-link' : ''
    }
  }
}
</script>
