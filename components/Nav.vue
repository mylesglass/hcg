<template>
  <nav class="navbar is-transparent is-fixed-top" role="navigation" aria-label="main navigation" v-on-clickaway="closeMenu">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/">
        <span class="nav-logo">

<svg id="LOGO_GRADIENT_1" data-name="LOGO GRADIENT 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2984 576.07"><defs><style>.cls-1,.cls-2{fill:#452b7d}.cls-1{fill-rule:evenodd}</style></defs><path class="cls-1" d="M223.16 320.14v88.25c16.37-3.54 28.87-21.92 28.87-44.13s-12.5-40.58-28.87-44.12z"/><path class="cls-2" d="M724.45 92.77h88.22V8.54h51.07v221.2h-51.07v-93.86h-88.22v93.86h-51.07V8.54h51.07zM1042.16 188h-83.57l-16.91 41.79h-53.06L977.83 8.54h46.76l87.22 221.2h-53.06zm-13.92-39.13L1001 74.53l-27.53 74.29zM1214.28 8.54c28.19 0 45.77 9.28 56.38 19.23 9.29 9 19.24 24.87 19.24 49.41 0 13.93-3 31.18-17.25 45.11a69.62 69.62 0 0 1-30.84 16.91l68 90.54h-62.35l-59.7-87.22v87.22h-51.07V8.54zM1187.75 109h11.61c9.28 0 21.89-1 30.51-9.62 3.65-3.64 8.29-10.61 8.29-21.55 0-12.6-6-19.24-10.28-22.55-8.29-6.3-21.56-7-28.19-7h-11.94zM1405.64 8.54c11.94 0 39.14.66 56.38 16.91 14.26 13.6 15.92 32.17 15.92 41.79 0 8.62-1.33 18.57-7.3 28.19a40.6 40.6 0 0 1-18.57 16.25c10.61 1.65 22.55 7 30.51 14.92 7.3 7.3 14.26 19.9 14.26 39.46 0 22.22-8.62 36.15-17.24 44.78-18.24 17.57-44.77 18.9-58.37 18.9H1338V8.54zm-17.24 89.87h8.29c7 0 18.57-1 25.86-6.3 4.65-3.32 9-10 9-19.57S1426.87 57 1422.89 54c-7.3-5.64-17.25-5.64-26.53-5.64h-8zm0 91.53h12.27c12.93 0 28.52-.33 37.8-8.95 4.65-4.31 7.3-10.62 7.3-18.57 0-9-3.65-14.93-7-17.91-9-8.29-26.19-8.29-36.47-8.29h-13.9zM1731 35.73c20.89 20.23 34.49 49.41 34.49 83.57 0 29.52-10.61 59.7-34.49 82.91-20.56 19.9-48.42 32.5-85.56 32.5-41.46 0-69.65-16.58-86.23-32.5-21.22-19.9-34.49-49.74-34.49-82.24 0-31.84 14.26-64 34.16-83.91 14.92-14.92 42.45-32.5 86.56-32.5 34.47 0 63.32 10.61 85.56 32.17zm-134.33 33.83c-9.62 9.28-19.57 25.53-19.57 50.07 0 20.23 6.63 36.49 20.23 49.75 14.26 13.6 30.18 18.24 47.42 18.24 22.56 0 38.47-8.29 49.09-18.9 8.62-8.29 19.23-23.88 19.23-49.42 0-22.88-9.28-39.79-19.23-49.74-10.95-10.62-28.52-18.91-48.75-18.91-19.24 0-36.48 6.97-48.42 18.91zM1990.66 139.53c0 21.23-2.65 47.43-24.54 70-21.23 21.89-45.77 25.2-69 25.2s-47.76-3.31-69-25.2c-21.89-22.55-24.55-48.75-24.55-70V8.54h51.08v129.67c0 9.61.66 25.86 11.61 37.14 9 9.62 21.22 11.61 30.84 11.61s21.88-2 30.84-11.61c10.94-11.28 11.61-27.53 11.61-37.14V8.54h51.07zM2116.68 8.54c28.19 0 45.77 9.28 56.38 19.23 9.29 9 19.24 24.87 19.24 49.41 0 13.93-3 31.18-17.25 45.11a69.62 69.62 0 0 1-30.84 16.91l68 90.54h-62.34l-59.7-87.22v87.22h-51.07V8.54zM2090.15 109h11.61c9.29 0 21.89-1 30.51-9.62 3.65-3.64 8.29-10.61 8.29-21.55 0-12.6-6-19.24-10.28-22.55-8.29-6.3-21.56-7-28.19-7h-11.94zM2477.5 222.77c-19.56 9.95-35.48 11.94-48.75 11.94-40.79 0-68.31-13.93-86.88-32.17-19.9-19.23-34.49-48.42-34.49-83.9 0-34.82 14.59-64 34.49-83.24 19.56-18.91 48.08-31.84 82.57-31.84 14.59 0 31.51 3 53.06 12.27v59c-11.27-11.94-28.19-23.54-51.73-23.54-18.57 0-33.5 6-45.1 17.24-12.27 11.94-20.9 29.85-20.9 51.07 0 22.89 9.29 39.14 19.24 48.76 4.64 4.64 20.56 18.57 47.75 18.57 13.27 0 31.18-3.65 50.74-22.89zM2570.36 8.54v221.2h-51.07V8.54zM2697.39 51.65v178.09h-51.08V51.65h-48.08V8.54h147.24v43.11zM2837.67 126.6L2758.41 8.54h60.35l44.44 68.64 44.44-68.64H2968l-79.26 118.06v103.14h-51.07zM779.84 445.22h109.77v2.32c0 26.86-9.62 67.65-34.16 93.19s-52.73 30.18-78.93 30.18c-26.53 0-55-4.32-80.92-30.85-12.93-13.26-32.5-40.12-32.5-84.23 0-36.15 13.27-65 31.84-83.91 27.19-28.19 60.69-32.16 86.89-32.16 18.24 0 41.45 3 62 16.58 14.93 10 27.86 25.53 35.82 39.46l-46.1 24.87c-4.31-8.62-10.94-17.57-19.56-23.87-10-7.3-21.23-10.62-33.83-10.62-20.23 0-35.16 6.64-45.77 17.91-12.27 12.94-18.9 31.84-18.9 52.4 0 25.21 9.29 41.46 18.57 50.74 12.94 13.27 27.86 17.25 44.77 17.25 21.89 0 33.5-7.63 38.47-11.94 1.66-1.33 11.61-9.95 15.92-26.2h-53.38zM968.88 462.79l-79.26-118.06H950l44.44 68.65 44.45-68.65h60.35L1020 462.79v103.14h-51.12zM1102.53 565.93l35.47-221.2h42.44l55.06 132.32 55-132.32h42.5l35.48 221.2h-51.07l-17.58-132-55.38 132h-17.91l-55.38-132-17.58 132zM1520.73 398.79c-16.58-14.93-30.85-15.92-37.15-15.92-7 0-15.58 1-21.55 7.63a19.75 19.75 0 0 0-5.64 13.92c0 5.31 1.66 9.29 5 12.28 5.31 5 12.94 7 27.86 12.6l16.58 6.3c9.62 3.65 21.56 8.62 30.18 16.91 12.94 12.27 16.25 28.19 16.25 41.13 0 22.88-8 42.78-19.56 54.72-19.57 20.56-48.09 22.55-62.68 22.55-15.92 0-29.85-2.33-43.78-9.29-11.27-5.64-24.21-15.92-32.5-24.21l26.53-36.48c5.64 5.64 14.59 13.27 20.56 16.91a51.38 51.38 0 0 0 27.86 8c6.63 0 15.92-1.32 23.22-7.62a22.9 22.9 0 0 0 7.95-17.91c0-7.3-3-11.94-7.62-15.92-6-5-19.57-10-25.87-12.27l-18.24-6.3c-10.28-3.65-22.22-8.29-30.84-17.58-11.61-12.27-13.27-27.86-13.27-38.47 0-19.57 6-36.15 19.24-49.74 15.58-15.92 34.16-20.23 54.72-20.23 15.25 0 39.79 2.65 65.66 21.88zM1667 344.73c19.23 0 40.46 2.65 58 18.24 18.9 16.58 21.55 38.47 21.55 53.73 0 27.85-10.61 43.44-18.9 52.06-17.58 17.91-40.79 19.57-56.38 19.57h-31.17v77.6H1589v-221.2zm-26.86 101.81h18.24c7 0 19.23-.33 27.52-8.29 4.65-4.64 8.29-12.27 8.29-21.89 0-9.28-3.31-16.91-8.29-21.55-7.62-7.3-18.57-8.29-28.52-8.29h-17.24zM1981.7 371.92c20.9 20.23 34.49 49.42 34.49 83.58 0 29.51-10.61 59.69-34.49 82.91-20.56 19.89-48.41 32.5-85.56 32.5-41.45 0-69.64-16.59-86.23-32.5-21.22-19.9-34.49-49.75-34.49-82.25 0-31.84 14.27-64 34.16-83.9 14.93-14.93 42.45-32.5 86.56-32.5 34.49 0 63.34 10.61 85.56 32.16zm-134.31 33.83c-9.62 9.29-19.57 25.54-19.57 50.08 0 20.23 6.64 36.48 20.23 49.74 14.26 13.6 30.18 18.24 47.43 18.24 22.55 0 38.47-8.29 49.08-18.9 8.62-8.29 19.23-23.88 19.23-49.41 0-22.89-9.28-39.8-19.23-49.75-10.94-10.61-28.52-18.9-48.75-18.9-19.24 0-36.48 6.96-48.42 18.9zM2131.94 344.73c28.19 0 45.77 9.29 56.38 19.23 9.28 9 19.23 24.88 19.23 49.42 0 13.93-3 31.17-17.24 45.1a69.63 69.63 0 0 1-30.84 16.92l68 90.53h-62.37l-59.69-87.22v87.22h-51.07v-221.2zm-26.53 100.49H2117c9.28 0 21.88-1 30.51-9.62 3.65-3.65 8.29-10.61 8.29-21.56 0-12.6-6-19.23-10.28-22.55-8.29-6.3-21.56-7-28.19-7h-11.94zM2326.28 387.84v178.09h-51.07V387.84h-48.09v-43.11h147.25v43.11zM2506 398.79c-16.58-14.93-30.84-15.92-37.14-15.92-7 0-15.59 1-21.56 7.63a19.78 19.78 0 0 0-5.63 13.92c0 5.31 1.65 9.29 5 12.28 5.31 5 12.93 7 27.86 12.6l16.58 6.3c9.62 3.65 21.55 8.62 30.18 16.91 12.93 12.27 16.25 28.19 16.25 41.13 0 22.88-8 42.78-19.57 54.72-19.57 20.56-48.09 22.55-62.68 22.55-15.92 0-29.84-2.33-43.77-9.29-11.28-5.64-24.21-15.92-32.51-24.21l26.54-36.48c5.63 5.64 14.59 13.27 20.56 16.91a51.33 51.33 0 0 0 27.86 8c6.63 0 15.91-1.32 23.21-7.62a22.9 22.9 0 0 0 8-17.91c0-7.3-3-11.94-7.63-15.92-6-5-19.56-10-25.87-12.27l-18.24-6.3c-10.28-3.65-22.22-8.29-30.84-17.58-11.6-12.27-13.26-27.86-13.26-38.47 0-19.57 6-36.15 19.23-49.74 15.59-15.92 34.16-20.23 54.72-20.23 15.26 0 39.8 2.65 65.67 21.88z"/><path class="cls-1" d="M320.88 192.1C160.59 126.39 1.27 2 1.27 2s129.82 158.61 255.3 223.91z"/><path class="cls-1" d="M629.74 374S356 135.34 251.19 199.87c-132.51 81.6-2.74 295.54 68.81 374.23 0 0-167.1-230-55.67-314.46C352.08 193.12 629.74 374 629.74 374z"/></svg>
        </span>
        <!--<img :src="$store.state.nav_items.nav_logo" alt="Harbour City GymSports">-->
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
$nav-unselected: #9898bb;
$nav-selected: rgb(100, 100, 100);
$hcg-deep-purple: #194280; 
$turq: hsl(197, 78%, 41%);

.navbar {
  border-bottom: 1px solid #f3f3f3;
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
  width: 7rem;
}

.cartwheel-icon {
  padding-top: 7px;
}
</style>
