<template>
  <header class="home-header">
    <div class="home-header-container">
      <div class="home-header-logo-wrapper">
        <img src="../assets/logo.png" alt="DevShool" />

        <strong>DevShool</strong>
      </div>

      <nav class="home-header-nav">
        <ul>
          <li>
            <router-link class="home-header-nav-link" to="/login"> Sign in </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
