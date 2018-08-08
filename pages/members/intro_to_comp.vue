<template>
  <div id="intro">
    <section class="section">
      <div class="container">
        <header>
          <h1>{{ title }}</h1>
          <p class="subtitle">{{ subtitle }}</p>
        </header>
        <span v-html="htmlContent"></span>
      </div>
    </section>
  </div>
</template>

<script>
import Markdown from 'markdown-it'

export default {
  layout: 'default',

  async asyncData() {
    let content = await import('~/content/members/intro_to_comp.json')
    return content
  },

  computed: {
    htmlContent () {
      let md = new Markdown({
        breaks: true
      })

      return md.render(this.markdown).replace(/<p>/g, '<p class="paragraph">')
    }
  }
}
</script>

<style>
  h1 {
    font-weight: 900;
    font-size: 2.4rem;
    padding-top: 5rem;
    padding-bottom: 1rem;
  }

  h2 {
    font-weight: 600;
    font-size: 1.8rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  h3 {
    font-weight: 600;
    font-size: 1.4rem;
    padding-top: 1rem;
  }

  h4 {
    font-weight: 600;
    font-size: 1rem;
  }

  ol {
    padding-left: 2rem;
  }

  ul {
    padding-left: 2rem;
    list-style-type: circle;
  }

  table {
    min-width: 360px;
  }

  th, td {
    padding: 8px;
    border-bottom: 1px solid #ddd;
  }
</style>

