<template>
  <teleport to="body">
    <div class="default-container-toast">
      <ul>
        <li v-for="item in toasts" :key="item.id">
          <toast-item
            v-bind="item"
            @on-request-close="closeToast({ id: item.id })"
          />
        </li>
      </ul>
    </div>
  </teleport>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import ToastItem from './toast-item.vue'

export default {
  components: {
    ToastItem
  },
  methods: {
    ...mapGetters(['getToasts']),
    ...mapMutations(['closeToast'])
  },
  computed: {
    toasts () {
      return this.getToasts()
    }
  }
}
</script>
