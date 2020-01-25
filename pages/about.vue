<template>
  <div id="about">
    <section class="section">
      <div class="container main-container">
        <header>
          <h1>{{ title }}</h1>
          <p>{{ subtitle }}</p>
        </header>
        <span v-html="htmlContent"></span>
      </div>
    </section>
  </div>
</template>

<script>
import Markdown from 'markdown-it'

export default {
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

<style lang="scss" scoped>
header {
  padding-bottom: 2rem;
}

#about {
  min-height: calc(100vh - 3.25rem);
}
</style>
