<template>
  <section class="section">
    <div class="container">
      <header>
        <h1>{{ title }} <b-icon icon="wifi" size="is-large"></b-icon></h1>
        <p class="subtitle">{{ subtitle }}</p>
      </header>
      <span v-html="htmlContent" class="markdown"></span>
      <br/>
      <div class="container box">
        <p class="has-text-weight-bold">Clubwide WiFi Usage for current month</p>
        <progress class="progress is-info is-medium" value="45" max="100">45%</progress>
      </div>
      <b-tooltip label="By clicking this you promise to be good" position="is-right">
        <a href="https://google.com/" class="button is-success is-medium">
          <b-icon icon="check"></b-icon>
          <span>Sweet, thanks!</span>
        </a>
      </b-tooltip>
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
