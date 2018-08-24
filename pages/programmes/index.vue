<template>
  <div id="programmes">
    <div class="helping-header">
      <div class="container">
        <header>
          <h1>Our Programmes</h1>
          <p>We offer a wide variety of programmes for all ages and abilites. If you need help with choosing the right programme for you or your child, please don't hesitate to <nuxt-link to="/contact">contact us.</nuxt-link></p>
        </header>
      </div>
    </div>
    <section class="section">
      <div class="container">
        <muuri-grid :options="muuriOptions" id="grid">
          <programme-card
            v-for="prog in progs" :key="prog.title" :id="prog._path"
            :title="prog.title"
            :subtitle="prog.subtitle"
            :age="prog.age"
            :link="prog._path"
            :imageUrl="prog.thumbnail"
            :category="prog.category" />
        </muuri-grid>
      </div>
    </section>
  </div>
</template>

<script>
import ProgrammeCard from '~/components/ProgrammeCard'

export default {
  components: {
    ProgrammeCard
  },

  data () {
    // Using webpacks context to gather all files from a folder
    const context = require.context('~/content/programmes/', false, /\.json$/)

    const progs = context.keys().map(key => ({
      ...context(key),
      _path: `/programmes/${key.replace('.json', '').replace('./', '')}`
    }))

    // Here we sort into categories

    return { 
      progs,
      muuriOptions: {
        items: '.item',
        dragEnabled: true,
        dragReleaseDuration: 100
      },
      grid: Object
    }
  }
}
</script>

<style scoped lang="scss">
.intermediate, .other{
  background-color: #0e132b;
}

// Main Heading
.helping-header {
    -webkit-box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.05);
    -moz-box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.05);
    box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.05);
    background: #ffffff; /* Old browsers */
    min-height: 3.8rem;

    header {
      padding-top: 3rem;
    }
}
</style>