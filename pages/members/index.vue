<template>
  <section class="section">
    <div class="container">
      <ul>
        <li v-for="item in items" :key="item.title">
          <nuxt-link :to="item._path">{{ item.title }}</nuxt-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    // Using webpacks context to gather all files from a folder
    const context = require.context('~/content/members/', false, /\.json$/)

    const items = context.keys().map(key => ({
      ...context(key),
      _path: `/members/${key.replace('.json', '').replace('./', '')}`
    }))

    // Here we sort into categories

    return { items }
  }
}
</script>
