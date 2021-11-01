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
                alt="Jessica Nunes"
              />
              <input type="file" />

              <div class="profile-form-img-wrapper-overlay">
                <fa icon="camera" />
              </div>
            </div>

            <strong>Jessica Nunes</strong>
          </div>
        </div>

        <div class="profile-form-info">
          <h3>Profile info</h3>

          <div class="profile-form-info-input-group">
            <label>
              Name:

              <input type="text" />
            </label>
          </div>

          <div class="profile-form-info-input-group">
            <label>
              Email:

              <input type="email" />
            </label>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
