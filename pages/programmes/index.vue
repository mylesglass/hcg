<template>
  <div id="programmes">
    <section class="hero is-primary is-small">
      <div class="hero-head">
        <inverted-nav></inverted-nav>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="title">Our Programmes</p>
        <p class="subtitle">We offer a wide variety of programmes for all ages and abilites. If you need help with choosing the right programme for you or your child, please don't hesitate to <nuxt-link to="/contact">contact us.</nuxt-link></p>
        <div class="columns is-multiline">
          <div class="column is-one-third" v-for="prog in progs" :key="prog.title">
            <programme-card
              :title="prog.title"
              :subtitle="prog.subtitle"
              :age="prog.age"
              :link="prog._path"
              :imageUrl="prog.thumbnail"
              :category="prog.category" />
          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<script>
import InvertedNav from '~/components/InvNav'
import ProgrammeCard from '~/components/ProgrammeCard'

export default {
  layout: 'page',

  components: {
    InvertedNav,
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

    return { progs }
  }
}
</script>

<style scoped>
.intermediate, .other{
  background-color: #0e132b;
}
</style>

<!--

    <section class="section">
      <div class="container">
        <p class="title">Recreational</p>
        <p class="subtitle">Gymnastics courses that encourage fun, movement, and allow entry level</p>
        <div class="columns">
          <div class="column">
            <programme-card/>
          </div>
          <div class="column">
            <programme-card/>
          </div>
          <div class="column">
            <programme-card/>
          </div>
        </div>
      </div>
    </section>


    <section class="section intermediate">
      <div class="container">
        <p class="title has-text-white">Intermediate</p>
        <p class="subtitle has-text-light">Gymnastics courses that encourage fun, movement, and allow entry level</p>
        <div class="columns">
          <div class="column">
            <programme-card/>
          </div>
          <div class="column">
            <programme-card/>
          </div>
          <div class="column">
            <programme-card/>
          </div>
        </div>
      </div>
    </section>


    <section class="section">
      <div class="container">
        <p class="title">Advanced</p>
        <p class="subtitle">Gymnastics courses that encourage fun, movement, and allow entry level</p>
        <div class="columns">
          <div class="column">
            <programme-card/>
          </div>
          <div class="column">
            <programme-card/>
          </div>
          <div class="column">
            <programme-card/>
          </div>
        </div>
      </div>
    </section>


    <section class="section other">
      <div class="container">
        <p class="title has-text-white">Other</p>
        <p class="subtitle has-text-light">Gymnastics courses that encourage fun, movement, and allow entry level</p>
        <div class="columns">
          <div class="column">
            <programme-card/>
          </div>
          <div class="column">
            <programme-card/>
          </div>
          <div class="column">
            <programme-card/>
          </div>
        </div>
      </div>
    </section>-->