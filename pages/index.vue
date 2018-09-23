<template>
  <div id="homepage">
    <!-- Splash -->
    <section class="hero has-background-image" :style="bg">
      <div class="hero-body">
          <cover-image-content :title="splash_heading" :content="splash_subtitle" :button="splash_button" :url="splash_link"></cover-image-content>
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
import CoverImageContent from '~/components/CoverImageContent'

export default {
  async asyncData() {
    let content = await import('~/content/home.json')
    return content
  },

  components: {
    Foot,
    TileColumn,
    Sponsors,
    CoverImageContent
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

.hero-body {
  .container {

  }
}

.hero {
  height: calc(100vh - 3.25rem);
}

.contact-button {
  margin-top: 3rem;
}

</style>

