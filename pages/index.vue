<template>
  <div id="homepage">
    <!-- Splash -->
    <section class="hero is-large has-background-image" :style="bg">
      <div class="hero-body">
        <div class="container">
          <h1 class="splash-title">{{ splash_heading }}</h1>
          <p class="splash-subtitle">{{ splash_subtitle }}</p>
          <div class="field">
            <div class="control">
              <nuxt-link :to="splash_link" class="button is-square-button is-purple-button">{{ splash_button }}</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Points of Interest -->
    <div class="columns is-gapless is-multiline">
      <tile-column
        v-for="(tile, index) in home_tiles"
        :key="index"
        :title="tile.title"
        :content="tile.content"
        :buttonText="tile.button"
        :buttonUrl="tile.url"
        :imageUrl="tile.image"
        :color="index">
      </tile-column>
    </div>

    <!-- Contact -->
    <section class="section">
      <div class="container has-text-centered">
        <header>
          <h1>{{ contact_title }}</h1>
          <p>{{ contact_subtitle }}</p>
        </header>
        <nuxt-link to="/contact" class="button is-square-button is-card-button contact-button">{{ contact_button }}</nuxt-link> 
      </div>
    </section>

    <sponsors></sponsors>
    <foot />
  </div>
</template>

<script>
import Foot from '~/components/Foot'
import TileColumn from '~/components/TileColumn'
import Sponsors from '~/components/Sponsors'

export default {
  async asyncData() {
    let content = await import('~/content/home.json')
    return content
  },

  components: {
    Foot,
    TileColumn,
    Sponsors
  },

  computed: {
    bg () {
      return 'background-image: url(' + this.splash_image + ');'
    }
  }
}
</script>

<style lang="scss" scoped>
.section  {
  padding-bottom: 120px;
}

$title-pad: 0.25em;

.splash-title {
  font-size: 4rem;
  font-weight: 900;
  display: inline;
  background: white; 
  padding: 2rem;
}

.hero {
  height: calc(100vh - 3.25rem);
}

.hero-body {
  .container {
    left: 5vw;
    bottom: 5vh;
    position: absolute;
    padding-right: 5vw;
  }
}

@media only all and (max-width: 768px) {
  .splash-title {
    font-size: 2rem;
    line-height: 6rem;
  }
}

.splash-subtitle {
  background: white; 
  padding: 2rem;
}

.contact-button {
  margin-top: 3rem;
}
</style>

