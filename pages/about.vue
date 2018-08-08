<template>
  <div id="about">
    <section class="hero is-primary is-small">
      <div class="hero-head">
        <inverted-nav></inverted-nav>
      </div>
      <div class="hero-body">
        <div class="container">
          <header>
            <h1>{{ title }}</h1>
            <p class="subtitle">{{ subtitle }}</p>
          </header>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <span v-html="htmlContent"></span>
      </div>
    </section>
  </div>
</template>

<script>
import Markdown from 'markdown-it'
import InvertedNav from '~/components/InvNav'

export default {
    layout: 'page',

    components: {
      InvertedNav
    },

    async asyncData() {
        let content = await import('~/content/about.json')
        return content
    },

    computed: {
      htmlContent () {
        let md = new Markdown({
          breaks: true
        })
        return this.addParagraphClass(md.render(this.content))
      }
    },

    methods: {
      addParagraphClass (str) {
        return str.replace(/<p>/g, '<p class="paragraph">')
      }
    },

    created () {
      this.$store.commit('setActiveNav', 'About')
    }
}
</script>
