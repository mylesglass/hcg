<template>
  <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <!--<a class="navbar-item is-hidden-mobile desktop-logo" @click="navigateTo('/')">
         TODO this shouldnt be hardcoded 
        <img src="https://myles-test.site/backend/wp-content/uploads/2018/07/Artboard-36.png" alt="Harbour City GymSports" width="">
      </a>
      <a class="navbar-item is-hidden-tablet mobile-logo" @click="navigateTo('/')">
        <img src="https://myles-test.site/backend/wp-content/uploads/2018/06/logo_test_6.png" alt="Harbour City GymSports">
      </a>-->
    </div>

    <div class="navbar-menu">
      <div class="navbar-end">
        <a @click="navigateTo('/about')" class="navbar-item">About</a>
        <a @click="navigateTo('/contact')" class="navbar-item">Contact</a>
      </div>
    </div>
  </nav>
</template>

<style>
nav {
    margin: auto;
    max-width: 1000px;
}
</style>
