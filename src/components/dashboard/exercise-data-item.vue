<template>
  <div class="exercise-display-data-item">
    <button @click="collapseItem" class="exercise-display-data-item-button">
      <span>
        <fa v-if="isCollapsed" icon="folder" />

        <fa v-else icon="folder-open" />
        {{ name }}
      </span>

      <fa :class="shouldRotateArrow(isCollapsed)" icon="chevron-right" />
    </button>

    <div :style="contentStyle" class="exercise-display-data-item-collapse-zone">
      <ul>
        <li class="exercise-display-data-item-collapse-zone-item">
          <div class="exercise-display-data-item-icon-wrapper">
            <fa icon="user-tie" />
          </div>

          <strong>Professor:</strong> <span>{{ professor }}</span>
        </li>

        <li class="exercise-display-data-item-collapse-zone-item">
          <div class="exercise-display-data-item-icon-wrapper">
            <fa icon="book-open" />
          </div>

          <strong>Discipline:</strong>

          <span>
            {{ discipline }}
          </span>
        </li>

        <li class="exercise-display-data-item-collapse-zone-item">
          <div class="exercise-display-data-item-icon-wrapper">
            <fa icon="calendar" />
          </div>

          <strong>Requested at: </strong>

          <span>
            {{ requestAt }}
          </span>
        </li>

        <li class="exercise-display-data-item-collapse-zone-item">
          <div class="exercise-display-data-item-icon-wrapper">
            <fa icon="calendar" />
          </div>

          <span> <strong>End date:</strong> {{ endDate }} </span>
        </li>

        <li class="exercise-display-data-item-collapse-zone-item">
          <div class="exercise-display-data-item-icon-wrapper">
            <fa icon="info" />
          </div>

          <strong>Status :</strong>

          <span :class="['exercise-item-status', getStatusClass(status)]">
            {{ status }}
          </span>
        </li>

        <li>
          <button
            @click="toggleIsSubContentCollapsed"
            :class="[
              'exercise-display-data-sub-item-button',
              isItemActive(isSubContentCollapsed)
            ]"
          >
            <div>
              <fa icon="inbox" />

              Responses
            </div>

            <fa
              :class="shouldRotateArrow(isSubContentCollapsed)"
              icon="chevron-right"
            />
          </button>

          <div
            :style="subContentStyle"
            class="exercise-display-data-item-collapse-zone"
          >
            <ul>
              <li v-for="item in responses" :key="item.id">
                <a tabindex="0" :href="item.attachment" target="_blank">
                  <fa icon="link" />

                  <strong>Name: {{ item.fileName }}</strong>
                </a>
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
  emits: ['collapseItem'],
  data () {
    return {
      isSubContentCollapsed: true,
      itemStatusClass: {
        done: 'exercise-item-status-done',
        late: 'exercise-item-status-late',
        pending: 'exercise-item-status-pending',
        close: 'exercise-item-status-close'
      }
    }
  },
  props: {
    id: {
      type: Number,
      default: 0
    },
    name: {
      type: String,
      default: ''
    },
    isCollapsed: {
      type: Boolean,
      default: true
    },
    professor: {
      type: String,
      default: ''
    },
    discipline: {
      type: String,
      default: ''
    },
    requestAt: {
      type: String,
      default: ''
    },
    endDate: {
      type: String,
      default: ''
    },
    status: {
      type: String,
      default: ''
    },
    responses: {
      type: Array,
      default () {
        return []
      }
    }
  },
  computed: {
    contentStyle () {
      return {
        display: this.isCollapsed ? 'none' : 'block'
      }
    },
    subContentStyle () {
      return {
        display: this.isSubContentCollapsed ? 'none' : 'block'
      }
    }
  },
  watch: {
    isCollapsed (value) {
      if (value) {
        this.isResponseDataOpen = false
      }
    }
  },
  methods: {
    toggleIsSubContentCollapsed () {
      this.isSubContentCollapsed = !this.isSubContentCollapsed
    },
    collapseItem () {
      this.$emit('collapseItem', this.id)
    },
    getStatusClass (status) {
      return this.itemStatusClass[status]
    },
    shouldRotateArrow (boolean) {
      return boolean ? '' : 'rotate-arrow'
    },
    isItemActive (boolean) {
      return boolean ? '' : 'item-active'
    }
  }
}
</script>
