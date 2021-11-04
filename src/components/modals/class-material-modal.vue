<template>
  <DefaultModal
    title="Class Material"
    :isModalOpen="isModalOpen"
    @on-request-close="onRequestClose"
  >
    <table class="default-modal-table">
      <thead>
        <tr>
          <th>Name</th>

          <th class="default-modal-table-center-cell">Link</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in materials" :key="item.id">
          <td>
            {{ item.name }}
          </td>

          <td class="default-modal-table-link-row">
            <a :href="item.link"  target="_blank">
              <fa icon="link" />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </DefaultModal>
</template>

<script>
import { derivedModalMixin } from './derived-modal-mixins'

export default {
  mixins: [derivedModalMixin],
  props: {
    materials: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
