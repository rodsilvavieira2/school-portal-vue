<template>
  <DefaultModal
    title="Subject details"
    :isModalOpen="isModalOpen"
    @on-request-close="onRequestClose"
  >
    <div class="exercise-response-modal">
      <div class="exercise-response-modal-input">
        <div
          @click="onClickToChoseFile"
          @keydown.enter="onClickToChoseFile"
          @drop.prevent="onDropFile"
          @dragenter.prevent="onDropEnter"
          @dragleave.prevent="onDropLeave"
          @dragover.prevent
          tabindex="0"
          :class="[
            'exercise-response-modal-input-wrapper',
            shouldHighlightZone
          ]"
        >
          <input type="file" ref="inputFileRef" />

          <strong>Drop your file here or clink to chose one</strong>
        </div>
      </div>

      <table
        v-if="newFiles.length"
        class="default-modal-table exercise-response-modal-table"
      >
        <thead>
          <tr>
            <th>File name</th>

            <th />
          </tr>
        </thead>

        <tbody>
          <tr v-for="item in newFiles" :key="item.id">
            <td>
              {{ item.fileName }}
            </td>

            <td class="default-modal-table-center-display">
              <button
                @click="sendFile(item.id)"
                class="default-modal-table-button"
              >
                Send
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <table class="default-modal-table exercise-response-modal-table">
        <thead>
          <tr>
            <th>File name</th>

            <th class="default-modal-table-center-cell">Post at</th>

            <th class="default-modal-table-center-cell">Attachment</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item in currentResponses" :key="item.id">
            <td>
              {{ item.fileName }}
            </td>

            <td class="default-modal-table-center-cell">
              <time>
                {{ item.postAt }}
              </time>
            </td>

            <td class="default-modal-table-link-row">
              <a :href="item.attachment" target="_blank">
                <fa icon="link" />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  </DefaultModal>
</template>

<script>
import { derivedModalMixin } from './derived-modal-mixins'

export default {
  mixins: [derivedModalMixin],
  emits: ['newResponse'],
  props: {
    currentResponses: {
      type: Array,
      default () {
        return []
      }
    }
  },
  computed: {
    shouldHighlightZone () {
      return this.isReadyToDrop ? 'ready-to-drop' : ''
    }
  },
  data () {
    return {
      newFiles: [],
      isReadyToDrop: false
    }
  },
  methods: {
    onClickToChoseFile () {
      this.$refs.inputFileRef.click()
    },
    onDropFile (e) {
      const files = Array.from(e.dataTransfer.files).map((file, i) => ({
        id: i + 1,
        fileName: file.name
      }))

      this.newFiles = files
      this.isReadyToDrop = false
    },
    onDropEnter () {
      this.isReadyToDrop = true
    },
    onDropLeave () {
      this.isReadyToDrop = false
    },
    sendFile (id) {
      this.newFiles = this.newFiles.filter((item) => item.id !== id)
    }
  }
}
</script>
