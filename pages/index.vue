<template>
  <div id="homepage">
    <!-- Landing Item -->
    <splash
      :image="splash_image"
      :title="splash_heading"
      :description="splash_subtitle"
      :url="splash_link"
      :button="splash_button">
    </splash>

    <section class="section focus-section">
      <div class="container">
        <!-- Focus Items -->
        <div class="columns">
          <news-tile 
            v-for="(tile, index) in home_tiles"
            :key="index"
            :image="tile.image"
            :title="tile.title" 
            :description="tile.content"
            :url="tile.url">
          </news-tile>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="section contact-section">
      <div class="container has-text-centered">
        <header class="contact-header">
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

import Splash from '~/components/Splash'
import NewsTile from '~/components/NewsTile'


export default {
  async asyncData() {
    let content = await import('~/content/home.json')
    return content
  },

  components: {
    Foot,
    TileColumn,
    Sponsors,
    CoverImageContent,
    NewsTile,
    Splash
  },

  computed: {
    bg () {
      return 'background-image: url(' + this.splash_image + ');'
    }
  }
}
</script>

<style lang="scss" scoped>
$hcg-purple: #452b7d;

.section  {
  
}

.contact-header {
  padding-bottom: 2rem;
}

.contact-section {
  margin-bottom: 3rem;
}

.call-to-action {
  $pad: 1rem;

  border-top: 1px solid rgba(0, 0, 0, 0.137);
  border-bottom: 1px solid rgba(0, 0, 0, 0.137);
  padding-top: $pad;
  padding-bottom: $pad;
}

.cta-link {
  color: $hcg-purple;
  font-weight: 700;
}

.splash-section {
  background-color: $hcg-purple;
}

.focus-section {

}
</style>

