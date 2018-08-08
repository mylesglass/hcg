<template>
  <section class="section">
    <div class="container">
      <header>
        <h1 class="title">{{ title }}</h1>
        <p class="subtitle">We really out here</p>
      </header>
      <p class="paragraph">
        {{ content }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
    layout: 'default',

    async asyncData() {
        let content = await import('~/content/about.json')
        return content
    }
}
</script>
