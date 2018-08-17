<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/">
        <img :src="$store.state.nav_items.nav_logo_inv" alt="Harbour City GymSports">
      </nuxt-link>
      <div class="navbar-burger burger" @click="toggleMenu" :class="{'is-active': navIsActive}" data-target="mainNav">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div class="navbar-menu" id="mainNav" :class="{'is-active': navIsActive}">
      <div class="navbar-end">
        <!-- Programmes -->
        <b-dropdown v-model="dropdown" hoverable v-if="$store.state.nav_items.dropdown">
          <a slot="trigger" class="navbar-item has-text-white dropdown">
            <span>{{ $store.state.nav_items.dropdown.title }}</span>
            <b-icon icon="chevron-down"></b-icon>
          </a>
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
          class="navbar-item has-text-white" 
          v-for="item in $store.state.nav_items.menu_items"
          :key="item.title"
          :to="item.url">
            {{ item.title }}
        </nuxt-link>

        <!-- Login 
        <nuxt-link class="navbar-item" to="/login">
          <div class="field">
            <p class="control">
              <button class="button is-primary is-inverted is-outlined">Sign In</button>
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
      dropdown: '',
      navIsActive: false
    }
  },

  methods: {
    toggleMenu () {
      this.navIsActive = !this.navIsActive
    }
  },

  created () {
    // Initialise Data
    if (Object.keys(this.$store.state.nav_items).length === 0) this.$store.dispatch('loadNav')
  }
}
</script>


<style scoped>

.nav-button {
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0);
}
</style>
