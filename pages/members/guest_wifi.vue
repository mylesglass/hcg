<template>
  <section class="section">
    <div class="container">
      <header>
        <h1>{{ title }}</h1>
        <p class="subtitle">{{ subtitle }}</p>
      </header>
      <span v-html="htmlContent"></span>
    </div>
  </section>
</template>

<script>
import Markdown from 'markdown-it'

export default {
  layout: 'default',

  async asyncData() {
    let content = await import('~/content/members/guest_wifi.json')
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