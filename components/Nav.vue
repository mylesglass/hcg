<template>
  <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/">
        <img :src="$store.state.nav_items.nav_logo" alt="Harbour City GymSports">
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
          <nuxt-link :to="$store.state.nav_items.dropdown.url" slot="trigger" class="navbar-item">
            <b-icon icon="run" class="nav-icon is-hidden-touch"></b-icon>
            <p>{{ $store.state.nav_items.dropdown.title }}</p>
            <b-icon icon="chevron-down" class="nav-icon"></b-icon>
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
            <nuxt-link class="has-text-link programme-dropdown-button" :to="$store.state.nav_items.dropdown.url">
              <strong>{{ $store.state.nav_items.dropdown.subtitle }}</strong>
            </nuxt-link>
          </b-dropdown-item>
        </b-dropdown>

        <!-- Other Menu Items -->
        <nuxt-link
          class="navbar-item"
          v-for="item in $store.state.nav_items.menu_items"
          :key="item.title"
          :to="item.url">
            <b-icon :icon="item.icon" class="nav-icon is-hidden-touch"></b-icon>
            <p>{{ item.title }}</p>
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


<style scoped lang="scss">
// Colors
$nav-unselected: #9898bb;
$nav-selected: rgb(100, 100, 100);
$hcg-deep-purple: #0e132b; 
$turq: hsl(197, 78%, 41%);

@media only all and (min-width: 1088px) {
  .navbar {
    -webkit-box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.05);
    -moz-box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.05);
    box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.05);
    background: #ffffff; /* Old browsers */
    min-height: 3.8rem;
  }

  .navbar-menu {
    .nav-icon {
      padding-right: 30px;
      padding-left: 30px;
      color: $nav-unselected;
    }

    .nuxt-link-active {
      border-bottom: 3px solid $hcg-deep-purple;

      .nav-icon, p {
        color: $hcg-deep-purple !important;
      }

      &:hover {
        padding-bottom: 3px !important;
      }
    }

    .navbar-item {
      padding-bottom: 3px;
      min-width: 10rem;

      p {
        text-transform: uppercase;
        font-size: 0.8rem;
        font-weight: 600;
        letter-spacing: 2px;
        color: $nav-unselected;
        padding-right: 20px;
      }
    }

    .navbar-item:hover {
      border-bottom: 3px solid $turq;
      padding-bottom: 0px;

      .nav-icon, p {
        color: $turq;
      }
    }

    .has-link{
      a {
        border-bottom: 0px !important;

        &:hover {
          color: black !important;
        }
      }

      .nuxt-link-active:hover {
        padding: 0.375rem 1rem !important;
      }

      .nuxt-link-exact-active {

        background-color: $turq !important;
        color: white !important;

        &:hover {
          color: white !important;
        }
      }

      .programme-dropdown-button {
        background-color: white !important;
        color: #7957d5 !important;

        &:hover {
          color: #53389b !important;
        }
      }
    }

    .dropdown-menu {
      min-width: 17.2rem;
    }
  }
}
</style>
