<template>
  <div class="sub-router-container">
    <h2>Profile</h2>

    <div>
      <form class="profile-form">
        <div>
          <div class="profile-form-avatar">
            <div class="profile-form-img-wrapper">
              <img
                src="https://i.pinimg.com/originals/76/06/47/7606476846f46b7fd863a0707cd95fe0.jpg"
                :alt="user.name"
              />
              <input type="file" />

              <div class="profile-form-img-wrapper-overlay">
                <fa icon="camera" />
              </div>
            </div>

            <strong>{{ user.name }}</strong>
          </div>
        </div>

        <div class="profile-form-info">
          <h3>Profile info</h3>

          <div class="profile-form-info-input-group">
            <label>
              Name:

              <input type="text" v-model="user.name" readonly />
            </label>
          </div>

          <div class="profile-form-info-input-group">
            <label>
              Email:

              <input type="email" v-model="user.email" readonly />
            </label>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  methods: {
    ...mapGetters(['getUserProfileData'])
  },
  computed: {
    user () {
      return this.getUserProfileData()
    }
  }
}
</script>
