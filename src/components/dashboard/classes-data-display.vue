<template>
  <div class="classes-data-display">
    <classes-data-item
      @collapse-item="toggleCollapsedItem"
      v-for="item in items"
      :key="item.id"
      v-bind="item"
    />

  </div>
</template>

<script>
import ClassesDataItem from './classes-data-item.vue'

export default {
  components: {
    ClassesDataItem
  },
  props: {
    classes: {
      type: Array,
      default () {
        return []
      }
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
  },
  watch: {
    classes (items) {
      this.items = items
    }
  },
  data () {
    return {
      items: this.classes
    }
  }
}
</script>
