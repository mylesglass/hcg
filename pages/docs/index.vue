<template>
  <div id="index">
    <section class="section">
      <div class="container">
        <header>
          <h1>Documents Index</h1>
        </header>
        <p class="paragraph">
          A list of HCG documents currently <strong>publicly</strong> viewable. 
        </p>
        <p class="title is-4">Links</p>
        <ul>
          <li v-for="item in items" :key="item.title">
            <nuxt-link :to="item._path">{{ item.title }}</nuxt-link>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    // Using webpacks context to gather all files from a folder
    const context = require.context('~/content/docs/', false, /\.json$/)

    const items = context.keys().map(key => ({
      ...context(key),
      _path: `/docs/${key.replace('.json', '').replace('./', '')}`
    }))

    // Here we sort into categories

    return { items }
  }
}
</script>


<style lang="scss" scoped>
#index {
  min-height: calc(100vh - 3.25rem);
}
</style>
