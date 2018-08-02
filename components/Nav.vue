<template>
  <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item">
        <img :src="$store.state.nav_items.nav_logo" alt="Harbour City GymSports">
      </a>
    </div>

    <div class="navbar-menu">
      <div class="navbar-end">
        <nuxt-link
          class="navbar-item" 
          v-for="item in $store.state.nav_items.menu_items"
          :key="item.title"
          :to="item.url"
          :class="{ 'is-active' : item.is_active }">
            {{ item.title }}
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  created () {
    // Initialise Data
    this.$store.dispatch('loadNav')
  }
}
</script>


<style>
nav {
    margin: auto;
    max-width: 1000px;
}

.is-active {
  text-decoration: underline;  
}
</style>
