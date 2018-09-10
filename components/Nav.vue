<template>
  <nav class="navbar is-transparent is-fixed-top" role="navigation" aria-label="main navigation" v-on-clickaway="closeMenu">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/">
        <span class="nav-logo">
          <svg id="LOGO_GRADIENT_1" data-name="LOGO GRADIENT 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3259.15 576.07"><defs><style>.cls-1,.cls-2{fill:#452b7d}.cls-1{fill-rule:evenodd}</style></defs><path class="cls-1" d="M223.16 320.14v88.25c16.37-3.54 28.87-21.92 28.87-44.13s-12.5-40.58-28.87-44.12z"/><path class="cls-2" d="M1012.15 91.61h88.21V7.37h51.08v221.2h-51.08v-93.85h-88.21v93.85h-51.07V7.37h51.07zM1329.86 186.79h-83.57l-16.92 41.78h-53.06l89.21-221.2h46.76l87.22 221.2h-53.06zm-13.93-39.14l-27.19-74.28-27.53 74.28zM1502 7.37c28.19 0 45.76 9.29 56.38 19.24 9.28 9 19.23 24.87 19.23 49.41 0 13.93-3 31.17-17.24 45.1A69.61 69.61 0 0 1 1529.5 138l68 90.53h-62.35l-59.69-87.22v87.22h-51.08V7.37zm-26.53 100.49h11.61c9.28 0 21.88-1 30.5-9.62 3.65-3.65 8.3-10.61 8.3-21.56 0-12.6-6-19.23-10.28-22.55-8.3-6.3-21.56-7-28.19-7h-11.94zM1693.34 7.37c11.93 0 39.13.66 56.37 16.91 14.27 13.6 15.92 32.17 15.92 41.79 0 8.62-1.32 18.57-7.29 28.19a40.53 40.53 0 0 1-18.57 16.25c10.61 1.66 22.55 7 30.51 14.92 7.29 7.3 14.26 19.9 14.26 39.47 0 22.22-8.63 36.15-17.25 44.77-18.24 17.58-44.77 18.9-58.37 18.9h-83.24V7.37zm-17.25 89.87h8.29c7 0 18.57-1 25.87-6.3 4.64-3.31 9-10 9-19.56s-4.64-15.59-8.62-18.58c-7.29-5.63-17.24-5.63-26.53-5.63h-8zm0 91.54h12.27c12.94 0 28.52-.34 37.81-9 4.64-4.31 7.29-10.61 7.29-18.57 0-8.95-3.64-14.92-7-17.91-9-8.29-26.2-8.29-36.48-8.29h-13.93zM2018.67 34.56c20.9 20.23 34.5 49.42 34.5 83.58 0 29.51-10.62 59.69-34.5 82.91-20.56 19.89-48.42 32.5-85.56 32.5-41.45 0-69.64-16.59-86.22-32.5-21.23-19.9-34.49-49.75-34.49-82.25 0-31.84 14.26-64 34.15-83.9C1861.48 20 1889 2.39 1933.11 2.39c34.49 0 63.34 10.61 85.56 32.17zm-134.31 33.83c-9.62 9.29-19.57 25.54-19.57 50.08 0 20.23 6.64 36.48 20.23 49.74 14.27 13.6 30.18 18.24 47.43 18.24 22.55 0 38.47-8.29 49.08-18.9 8.62-8.29 19.24-23.88 19.24-49.41 0-22.89-9.29-39.8-19.24-49.75-10.94-10.61-28.52-18.9-48.75-18.9-19.23 0-36.48 6.96-48.42 18.9zM2278.35 138.37c0 21.22-2.65 47.42-24.54 70-21.22 21.89-45.76 25.21-69 25.21s-47.75-3.32-69-25.21c-21.89-22.55-24.54-48.75-24.54-70v-131h51.07V137c0 9.62.66 25.87 11.61 37.14 9 9.62 21.22 11.61 30.84 11.61s21.89-2 30.84-11.61c10.95-11.27 11.61-27.52 11.61-37.14V7.37h51.07zM2404.38 7.37c28.19 0 45.76 9.29 56.38 19.24C2470 35.56 2480 51.48 2480 76c0 13.93-3 31.17-17.24 45.1a69.67 69.67 0 0 1-30.86 16.9l68 90.53h-62.35l-59.69-87.22v87.22h-51.08V7.37zm-26.53 100.49h11.6c9.29 0 21.89-1 30.52-9.62 3.64-3.65 8.29-10.61 8.29-21.56 0-12.6-6-19.23-10.29-22.55-8.29-6.3-21.55-7-28.18-7h-11.94zM2765.2 221.61c-19.57 9.95-35.49 11.94-48.75 11.94-40.79 0-68.32-13.93-86.89-32.17-19.9-19.24-34.49-48.42-34.49-83.91 0-34.82 14.59-64 34.49-83.24 19.57-18.9 48.09-31.84 82.58-31.84 14.59 0 31.5 3 53.06 12.28v59c-11.28-11.94-28.19-23.55-51.74-23.55-18.57 0-33.49 6-45.1 17.25-12.27 11.93-20.89 29.84-20.89 51.07 0 22.88 9.28 39.13 19.23 48.75 4.65 4.64 20.56 18.57 47.76 18.57 13.27 0 31.17-3.65 50.74-22.88zM2858.06 7.37v221.2H2807V7.37zM2985.08 50.48v178.09H2934V50.48h-48.09V7.37h147.25v43.11zM3125.36 125.43L3046.1 7.37h60.36L3150.9 76l44.44-68.65h60.35l-79.26 118.06v103.16h-51.07zM1067.53 444.05h109.77v2.32c0 26.86-9.61 67.66-34.16 93.19s-52.72 30.18-78.92 30.18c-26.54 0-55.06-4.31-80.92-30.84-12.94-13.27-32.5-40.13-32.5-84.24 0-36.15 13.26-65 31.83-83.9 27.2-28.19 60.69-32.17 86.89-32.17 18.24 0 41.46 3 62 16.58 14.92 9.95 27.86 25.54 35.82 39.47l-46.1 24.87c-4.31-8.62-11-17.58-19.57-23.88-10-7.3-21.22-10.61-33.83-10.61-20.23 0-35.15 6.63-45.76 17.91-12.27 12.93-18.91 31.83-18.91 52.4 0 25.2 9.29 41.45 18.58 50.74 12.93 13.26 27.85 17.24 44.77 17.24 21.88 0 33.49-7.63 38.47-11.94 1.66-1.32 11.6-9.95 15.92-26.2h-53.4zM1256.57 461.63l-79.26-118.07h60.36l44.44 68.65 44.44-68.65h60.36l-79.26 118.07v103.14h-51.08zM1390.22 564.77l35.49-221.21h42.45l55 132.33 55-132.33h42.45l35.49 221.21h-51.07l-17.58-132-55.38 132h-17.91l-55.39-132-17.57 132zM1808.42 397.62c-16.58-14.92-30.84-15.92-37.14-15.92-7 0-15.59 1-21.56 7.63a19.82 19.82 0 0 0-5.64 13.93c0 5.3 1.66 9.28 5 12.27 5.3 5 12.93 7 27.86 12.6l16.58 6.3c9.62 3.65 21.55 8.62 30.18 16.92 12.93 12.27 16.25 28.19 16.25 41.12 0 22.88-8 42.78-19.57 54.72-19.56 20.56-48.09 22.55-62.68 22.55-15.92 0-29.85-2.32-43.77-9.29-11.28-5.63-24.21-15.91-32.5-24.21l26.53-36.48c5.63 5.64 14.59 13.27 20.56 16.92a51.41 51.41 0 0 0 27.85 8c6.64 0 15.92-1.33 23.22-7.63a22.9 22.9 0 0 0 8-17.91c0-7.29-3-11.94-7.63-15.92-6-5-19.57-9.95-25.87-12.27l-18.24-6.3c-10.28-3.65-22.22-8.29-30.84-17.58-11.61-12.27-13.26-27.85-13.26-38.47 0-19.56 6-36.14 19.23-49.74 15.59-15.92 34.16-20.23 54.72-20.23 15.26 0 39.8 2.65 65.66 21.89zM1954.67 343.56c19.24 0 40.46 2.66 58 18.24 18.9 16.59 21.56 38.47 21.56 53.73 0 27.86-10.62 43.44-18.91 52.07-17.57 17.9-40.79 19.56-56.38 19.56h-31.17v77.61h-51.07V343.56zm-26.86 101.82h18.24c7 0 19.24-.34 27.53-8.29 4.64-4.65 8.29-12.28 8.29-21.89 0-9.29-3.32-16.92-8.29-21.56-7.63-7.29-18.58-8.29-28.52-8.29h-17.25zM2269.4 370.76c20.89 20.23 34.49 49.41 34.49 83.57 0 29.52-10.61 59.7-34.49 82.91-20.56 19.9-48.42 32.5-85.56 32.5-41.46 0-69.65-16.58-86.23-32.5-21.23-19.9-34.49-49.75-34.49-82.25 0-31.83 14.26-64 34.16-83.9 14.92-14.92 42.45-32.5 86.56-32.5 34.49 0 63.34 10.61 85.56 32.17zm-134.31 33.82c-9.62 9.29-19.57 25.54-19.57 50.08 0 20.23 6.63 36.48 20.23 49.75 14.26 13.6 30.18 18.24 47.42 18.24 22.55 0 38.47-8.29 49.09-18.91 8.62-8.29 19.23-23.87 19.23-49.41 0-22.88-9.29-39.8-19.23-49.75-11-10.61-28.53-18.9-48.76-18.9-19.23 0-36.5 6.97-48.41 18.9zM2419.64 343.56c28.18 0 45.76 9.29 56.37 19.24 9.29 8.95 19.24 24.87 19.24 49.41 0 13.93-3 31.18-17.25 45.11a69.66 69.66 0 0 1-30.84 16.91l68 90.54h-62.36l-59.7-87.23v87.23H2342V343.56zm-26.54 100.49h11.61c9.29 0 21.89-1 30.51-9.62 3.65-3.65 8.29-10.61 8.29-21.55 0-12.61-6-19.24-10.28-22.56-8.29-6.3-21.55-7-28.19-7h-11.94zM2614 386.68v178.09h-51.07V386.68h-48.09v-43.12h147.25v43.12zM2793.73 397.62c-16.58-14.92-30.84-15.92-37.15-15.92-7 0-15.58 1-21.55 7.63a19.77 19.77 0 0 0-5.64 13.93c0 5.3 1.66 9.28 5 12.27 5.31 5 12.94 7 27.86 12.6l16.58 6.3c9.62 3.65 21.56 8.62 30.18 16.92 12.94 12.27 16.25 28.19 16.25 41.12 0 22.88-8 42.78-19.56 54.72-19.57 20.56-48.09 22.55-62.68 22.55-15.92 0-29.85-2.32-43.78-9.29-11.28-5.63-24.21-15.91-32.5-24.21l26.53-36.48c5.64 5.64 14.59 13.27 20.56 16.92a51.44 51.44 0 0 0 27.86 8c6.63 0 15.92-1.33 23.21-7.63a22.87 22.87 0 0 0 8-17.91c0-7.29-3-11.94-7.62-15.92-6-5-19.57-9.95-25.87-12.27l-18.24-6.3c-10.28-3.65-22.22-8.29-30.84-17.58-11.61-12.27-13.27-27.85-13.27-38.47 0-19.56 6-36.14 19.24-49.74 15.58-15.92 34.15-20.23 54.72-20.23 15.25 0 39.79 2.65 65.66 21.89z"/><path class="cls-1" d="M320.88 192.1C160.59 126.39 1.27 2 1.27 2s129.82 158.61 255.3 223.91z"/><path class="cls-1" d="M629.74 374S356 135.34 251.19 199.87c-132.51 81.6-2.74 295.54 68.81 374.23 0 0-167.1-230-55.67-314.46C352.08 193.12 629.74 374 629.74 374z"/></svg>
        </span>
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
        <b-dropdown v-model="dropdown" hoverable v-if="$store.state.nav_items.dropdown" class="is-hidden-touch">
          <nuxt-link :to="$store.state.nav_items.dropdown.url" slot="trigger" class="navbar-item">
            <span class="icon nav-icon">
              <figure class="image cartwheel-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46.667 46"><path d="M28.943 24.75l-2.648-7.305c4.913-4.381 8.211-11.814 8.663-12.868l-3.677-1.575c-1.384 3.231-6.035 11.948-10.866 13.45-4.226 1.316-13.278-1.3-16.409-2.419L2.66 17.799c1.03.369 8.62 3.007 14.807 3.007.518 0 1.02-.027 1.514-.066l2.686 7.411c-4.009 4.531-3.588 13.17-3.516 14.271l3.991-.261c-.167-2.552.131-10.275 3.564-12.226 6.512-3.699 14.387 1.803 14.462 1.856l2.332-3.25c-.325-.232-6.577-4.628-13.557-3.791z"/><circle cx="29.546" cy="34.76" r="3.594"/></svg>
              </figure>
            </span>
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
          class="navbar-item is-hidden-touch"
          v-for="item in $store.state.nav_items.menu_items"
          :key="item.title"
          :to="item.url">
            <b-icon :icon="item.icon" class="nav-icon is-hidden-touch"></b-icon>
            <p>{{ item.title }}</p>
        </nuxt-link>

        <nuxt-link class="navbar-item login-item is-hidden-touch" to="/login">
          <b-icon icon="login-variant" class="nav-icon is-hidden-touch"></b-icon>
        </nuxt-link>

        <!-- Mobile Nav -->
        <nav class="level is-mobile is-hidden-desktop">
          <div class="level-item has-text-centered">
            <nuxt-link to="/programmes" @click.native="toggleMenu">
              <p class="heading">Programmes</p>
              <span class="icon nav-icon">
              <figure class="image">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46.667 46"><path d="M28.943 24.75l-2.648-7.305c4.913-4.381 8.211-11.814 8.663-12.868l-3.677-1.575c-1.384 3.231-6.035 11.948-10.866 13.45-4.226 1.316-13.278-1.3-16.409-2.419L2.66 17.799c1.03.369 8.62 3.007 14.807 3.007.518 0 1.02-.027 1.514-.066l2.686 7.411c-4.009 4.531-3.588 13.17-3.516 14.271l3.991-.261c-.167-2.552.131-10.275 3.564-12.226 6.512-3.699 14.387 1.803 14.462 1.856l2.332-3.25c-.325-.232-6.577-4.628-13.557-3.791z"/><circle cx="29.546" cy="34.76" r="3.594"/></svg>
              </figure>
            </span>
            </nuxt-link>
          </div>
          <div class="level-item has-text-centered"
            v-for="item in $store.state.nav_items.menu_items"
            :key="item.title">
            <nuxt-link :to="item.url" @click.native="toggleMenu">
              <p class="heading">{{ item.title }}</p>
              <b-icon :icon="item.icon" class="nav-icon"></b-icon>
            </nuxt-link>
          </div>
          <div class="level-item has-text-centered">
            <nuxt-link to="/login" @click.native="toggleMenu">
              <p class="heading">Login</p>
              <b-icon icon="login-variant" class="nav-icon"></b-icon>
            </nuxt-link>
          </div>
        </nav>
      </div>
    </div>
  </nav>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'

export default {
  mixins: [clickaway],

  data () {
    return {
      dropdown: '',
      navIsActive: false
    }
  },

  methods: {
    toggleMenu () {
      this.navIsActive = !this.navIsActive
    },

    closeMenu () {
      if (this.navIsActive) this.navIsActive = false
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
$nav-unselected: #194280;
$nav-selected: #194280;
$hcg-deep-purple: #194280; 
$turq: hsl(197, 78%, 41%);

.navbar {
  -webkit-box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.05);
  -moz-box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.05);
  box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.05);
  background: #ffffff; /* Old browsers */
}

@media only all and (min-width: 1088px) {

  .navbar-menu {
    .nav-icon {
      padding-right: 30px;
      padding-left: 30px;
      color: $nav-unselected;
      -webkit-transition: color 0.5s; /* Safari */
      transition: color 0.5s;
    }

    .nuxt-link-active {
      border-bottom: 3px solid $hcg-deep-purple;

      .nav-icon, p {
        color: $hcg-deep-purple !important;
      }

      &:hover {
        padding-bottom: 6px !important;
      }
    }

    .navbar-item {
      padding-bottom: 6px;
      min-width: 10rem;

      p {
        text-transform: uppercase;
        font-size: 0.8rem;
        font-weight: 500;
        letter-spacing: 2px;
        color: $nav-unselected;
        padding-right: 20px;
        -webkit-transition: color 0.5s; /* Safari */
        transition: color 0.5s;
      }
    }

    .navbar-item:hover {
      border-bottom: 3px solid $turq;
      padding-bottom: 3px;

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

    .login-item {
      min-width: 1rem;
    }
  }
}

.nav-logo {
  width: 9rem;
  padding-top: 6px;
}

.cartwheel-icon {
  padding-top: 7px;
}

.navbar-burger {
  height: auto;
}
</style>
