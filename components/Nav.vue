<template>
  <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/">
        <img :src="$store.state.nav_items.nav_logo" alt="Harbour City GymSports">
      </nuxt-link>
    </div>

    <div class="navbar-menu">
      <div class="navbar-end">
        <!-- Programmes -->
        <b-dropdown v-model="dropdown" hoverable v-if="$store.state.nav_items.dropdown">
          <nuxt-link slot="trigger" class="navbar-item" :to="$store.state.nav_items.dropdown.url">
            <span>{{ $store.state.nav_items.dropdown.title }}</span>
            <b-icon icon="chevron-down"></b-icon>
          </nuxt-link>
          <b-dropdown-item has-link 
            v-for="item in $store.state.nav_items.dropdown.programme_items"
            :key="item.title">
            <nuxt-link :to="item.link">
              {{ item.title }}
            </nuxt-link>
          </b-dropdown-item>
          <hr class="dropdown-divider">
          <b-dropdown-item has-link>
            <nuxt-link class="has-text-link" :to="$store.state.nav_items.dropdown.url">
              <strong>{{ $store.state.nav_items.dropdown.subtitle }}</strong>
            </nuxt-link>
          </b-dropdown-item>
        </b-dropdown>

        <!-- Other Menu Items -->
        <nuxt-link
          class="navbar-item" 
          v-for="item in $store.state.nav_items.menu_items"
          :key="item.title"
          :to="item.url"
          :class="{ 'is-active' : item.is_active }">
            {{ item.title }}
        </nuxt-link>

        <!-- Login 
        <nuxt-link class="navbar-item" to="/login">
          <div class="field">
            <p class="control">
              <a class="button">Sign In</a>
            </p>
          </div>
        </nuxt-link>-->
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      dropdown: ''
    }
  },

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
