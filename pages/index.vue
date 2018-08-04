<template>
  <div id="homepage">
    <!-- Splash & Navigation -->
    <section class="hero is-primary is-large">
      <!-- Hero head: will stick at the top -->
      <div class="hero-head">
        <inverted-nav></inverted-nav>
      </div>

      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title splash-title">
            {{ splash_heading }}
          </h1>
          <h2 class="subtitle splash-subtitle">
            {{ splash_subtitle }}
          </h2>
        </div>
      </div>
    </section>

    <!-- About HCG -->
    <section class="section">
      <div class="container has-text-centered">
        <h1 class="title">{{ about_title }}</h1>
        <p class="subtitle">{{ about_subtitle }}</p>
      </div>
    </section>

    <!-- Programmes -->
    <section class="section" id="programmes-section">
      <div class="container has-text-centered">
        <h1 class="title has-text-white">{{ programmes_title}}</h1>
        <p class="subtitle has-text-light">{{ programmes_subtitle }}</p>
      </div>
    </section>

    <!-- Contact -->
    <section class="section">
      <div class="container has-text-centered">
        <h1 class="title">{{ contact_title }}</h1>
        <p class="subtitle">{{ contact_subtitle }}</p>
      </div>
    </section>
  </div>
</template>

<script>
import InvertedNav from '~/components/InvNav'

export default {
  layout: 'home',

  components: {
    InvertedNav
  },

  async asyncData() {
    let content = await import('~/content/home.json')
    return content
  }
}
</script>

<style scoped>

#programmes-section {
  background-color: #0e132b;
}

.splash-title {
  font-size: 3rem;
  line-height: 3.4rem;
}

.splash-subtitle {
  font-size: 1.5rem;
}
</style>

