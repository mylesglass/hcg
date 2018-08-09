<template>
  <section class="section">
    <div class="container">
      <header>
        <h1>{{ title }}</h1>
        <p class="subtitle">{{ subtitle }}</p>
      </header>
      <span v-html="htmlContent" class="markdown"></span>
    </div>
  </section>
</template>

 <script>
import Markdown from 'markdown-it'

export default {
  async asyncData ({ params }) {
    let post = await import('~/content/programmes/' + params.slug + '.json')
    return post
  },

  computed: {
    htmlContent () {
      let md = new Markdown({
        breaks: true
      })

      return md.render(this.body).replace(/<p>/g, '<p class="paragraph">')
    }
  }
}
 </script>
 