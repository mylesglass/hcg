<template>
  <div id="contact">
    <section class="section">
      <div class="container">
        <header>
          <h1>{{ title }}</h1>
          <p>{{ subtitle}}</p>
        </header>
        <div class="columns">
          <div class="column">
            <h2 class="title">Phone</h2>
            <a class="has-text-weight-bold is-size-5" :href="'tel:' + phone">{{ phone }}</a>
            <p class="paragraph">{{ phone_description }}</p>
            <ul>
              <li v-for="item in hours" :key="item">{{ item }}</li>
            </ul>
            <p class="meta has-text-grey-light">{{ phone_disclaimer }}</p>
          </div>
          <div class="column">
            <h2 class="title">Email</h2>
            <p class="paragraph">{{ email_description }}</p>
            <ul>
              <li v-for="item in email" :key="item.title">{{ item.title }}: <a :href="'mailto:' + item.url">{{ item.url }}</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData() {
    let content = await import('~/content/contact.json')
    return content
  }
}
</script>

<style lang="scss" scoped>
#contact {
  min-height: calc(100vh - 3.25rem);
}
</style>

