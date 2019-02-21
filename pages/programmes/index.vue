<template>
  <div id="programmes">
    <section class="section">
      <div class="container">
        <header>
          <h1>Our Programmes</h1>
          <p>We offer a wide variety of programmes for all ages and abilites. If you need help with choosing the right programme for you or your child, please don't hesitate to <nuxt-link to="/contact">contact us.</nuxt-link></p>
        </header>

        <!-- Implement Me
        <p>Use the toggles to refine what you're looking for.</p>
        <nav class="level">
          <div class="level-left">
            <div class="level-item">
              <div class="field">
                <label class="label">Recreational</label>
                <div class="control"><b-switch v-model="recToggle"></b-switch></div>
              </div>
            </div>
            <div class="level-item">
              <div class="field">
                <label class="label">Intermediate</label>
                <div class="control"><b-switch v-model="intToggle"></b-switch></div>
              </div>
            </div>
            <div class="level-item">
              <div class="field">
                <label class="label">Advanced</label>
                <div class="control"><b-switch v-model="advToggle"></b-switch></div>
              </div>
            </div>
          </div>
        </nav>-->
      </div>
    </section> 
    <section class="section is-hidden-desktop">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-half" v-for="prog in progs" :key="prog.title">
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
    <section class="section is-hidden-touch">
      <div class="container muuri-container">
        <no-ssr>
          <muuri-grid :options="muuriOptions" id="grid">
            <programme-card
              v-for="prog in progs" :key="prog.title" :id="prog._path" type="Desktop"
              :title="prog.title"
              :subtitle="prog.subtitle"
              :class="{ 'muuri-item-shown' : recToggle, 'muuri-item-hidden' : !recToggle }"
              :age="prog.age"
              :link="prog._path"
              :imageUrl="prog.thumbnail"
              :category="prog.category" />
          </muuri-grid>
        </no-ssr>
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

    return { 
      progs,
      recToggle: true,
      intToggle: true,
      advToggle: true,
      muuriOptions: {
        items: '.item',
        dragEnabled: true,
        dragReleaseDuration: 100
        
        
        /**,
        sortData: {
          foo: function (item, element) {
            return parseFloat(element.getAttribute('data-foo'));
          },
          bar: function (item, element) {
            return element.getAttribute('data-bar').toUpperCase();
          }
        }**/
      },
      grid: Object
    }
  },

  watch: {
    recToggle () {
      this.toggleRec()
    }
  },

  mounted () {

  },

  methods: {
    toggleRec () {
      console.log('io')
    }
  }
}
</script>

<style scoped lang="scss">
#programmes {
  min-height: calc(100vh - 3.25rem);
}
</style>