<template>
  <div class="exercise-display-data">
    <exercise-data-item
      @collapse-item="toggleCollapsedItem"
      v-for="item in items"
      :key="item.id"
      v-bind="item"
    />
  </div>
</template>

<script>
import ExerciseDataItem from './exercise-data-item.vue'

export default {
  components: {
    ExerciseDataItem
  },
  data () {
    return {
      items: this.exercises
    }
  },
  props: {
    exercises: {
      type: Array,
      default () {
        return []
      }
    }
  },
  watch: {
    exercises (items) {
      this.items = items
    }
  },
  methods: {
    toggleCollapsedItem (id) {
      const items = this.items.map((item) => {
        if (item.id === id) {
          item.isCollapsed = !item.isCollapsed

          return item
        }

        item.isCollapsed = true

        return item
      })

      this.items = items
    }
  }
}
</script>
