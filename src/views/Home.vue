<template>
  <div class="container home-page">
    <HomeHeader />

    <main>
      <div class="home-page-main">
        <div class="home-page-main-image">
          <img src="/home-girl.svg" alt="an girl reading a book" />
        </div>

        <div class="home-page-main-text">
          <h3>DevShool</h3>

          <h2>Simple and practical</h2>

          <h3>School Portal</h3>
        </div>
      </div>
    </main>

    <footer class="home-page-footer">
      <strong> Crated by: Rodrigo Silva </strong>
    </footer>
  </div>
</template>

<script>
import { HomeHeader } from '../components'

export default {
  components: {
    HomeHeader
  }
}
</script>
