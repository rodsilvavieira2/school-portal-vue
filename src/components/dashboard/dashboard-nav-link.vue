<template>
  <li class="dashboard-sidebar-nav-link" >
    <router-link  tabindex="0" :to="to">
      <fa :icon="icon" />

      <span> {{ label }} </span>
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: true
    }
  }
}
</script>
