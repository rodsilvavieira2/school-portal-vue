import { defaultModalMixin } from './default-modal/default-mixin-modal'
import DefaultModal from './default-modal'

export const derivedModalMixin = {
  components: {
    DefaultModal
  },
  mixins: [defaultModalMixin],
  props: {
    isModalOpen: {
      type: Boolean,
      default: false
    }
  }
}
