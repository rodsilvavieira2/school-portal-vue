<template>
  <div class="classes-data-item">
    <button @click="collapseItem" class="classes-data-item-button">
      <span>
      <fa v-if="isCollapsed" icon="folder" />

      <fa v-else icon="folder-open" />

        {{ name }}
      </span>

       <fa :class="rotateButtonArrow(isCollapsed)" icon="chevron-right" />
    </button>

    <div
      :style="contentStyle"
      ref="contentRef"
      class="classes-data-item-collapse-zone"
    >
      <ul>
        <li v-for="item in localClassData" :key="item.id">
          <button
            @click="toggleClassData(item.id)"
            :class="[
              'classes-data-item-classes-button',
              getActiveSubItemStyle(item.isCollapsed)
            ]"
          >
            <span> <strong>Date:</strong> {{ item.date }} </span>

            <fa :class="rotateButtonArrow(item.isCollapsed)" icon="chevron-right" />
          </button>

          <div
            :style="getClassDataStyle(item.id)"
            class="classes-data-item-sub-collapse-zone"
          >
            <ul>
              <li v-for="material in item.materials" :key="material.id">
                <div>
                  <strong> <fa icon="file" /> File Name:</strong>

                  {{ material.name }}
                </div>

                <div>
                  <strong> <fa icon="link" /> Link:</strong>

                  {{ material.link }}
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isClassesContentCollapsed: true,
      localClassData: this.classData
    }
  },
  props: {
    id: {
      type: Number,
      default: 0
    },
    isCollapsed: {
      type: Boolean,
      default: true
    },
    name: {
      type: String,
      default: ''
    },
    classData: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    collapseItem () {
      this.$emit('collapseItem', this.id)
    },
    rotateButtonArrow (boolean) {
      return boolean ? '' : 'rotate-arrow'
    },
    getActiveSubItemStyle (boolean) {
      return boolean ? '' : 'sub-item-active'
    },
    collapseClassesContent () {
      this.isClassesContentCollapsed = !this.isClassesContentCollapsed
    },
    getClassDataStyle (id) {
      const item = this.localClassData.find((item) => item.id === id)

      if (item) {
        const { isCollapsed } = item

        return {
          display: isCollapsed ? 'none' : 'block'
        }
      }

      return {
        display: 'none'
      }
    },
    toggleClassData (id) {
      this.localClassData = this.localClassData.map((item) => {
        if (item.id === id) {
          item.isCollapsed = !item.isCollapsed

          return item
        }

        item.isCollapsed = true

        return item
      })
    }
  },
  watch: {
    isCollapsed (boolean) {
      if (boolean) {
        this.isClassesContentCollapsed = true

        this.localClassData = this.localClassData.map((item) => ({
          ...item,
          isCollapsed: true
        }))
      }
    },
    classData (items) {
      this.localClassData = items
    }
  },
  computed: {
    contentStyle () {
      return {
        display: this.isCollapsed ? 'none' : 'block'
      }
    },
    responseContentStyle () {
      return {
        display: this.isClassesContentCollapsed ? 'none' : 'block'
      }
    }
  }
}
</script>
