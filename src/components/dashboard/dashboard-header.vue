<template>
  <header class="dashboard-header">
    <div class="dashboard-header-container">
      <div class="dashboard-header-profile">
        <button class="dashboard-header-button" aria-label="show notifications">
          <fa icon="bell" />
        </button>

        <avatar name="Rodrigo Silva" />
      </div>
    </div>
  </header>
</template>

<script>
import { Avatar } from '../from'

export default {
  components: {
    Avatar
  }
}
</script>
