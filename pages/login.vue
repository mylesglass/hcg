<template>
  <section class="section">
    <div class="container main-container">
      <header>
        <h1>Login</h1>
      </header>
      <div class="columns">
        <div class="column">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img :src="card_1.image" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <p class="title is-4">{{ card_1.title }}</p>
              <p class="subtitle is-6">{{ card_1.subtitle }}</p>
            </div>
            <footer class="card-footer">
              <a :href="card_1.link" target="_blank" rel="noopener noreferrer" class="card-footer-item">
                <b-icon icon="open-in-new" class="nav-icon is-hidden-touch"></b-icon>
                <span>{{ card_1.button }}</span>
              </a>
            </footer>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img :src="card_2.image" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <p class="title is-4">{{ card_2.title }}</p>
              <p class="subtitle is-6">{{ card_2.subtitle }}</p>
            </div>
            <footer class="card-footer">
              <a :href="card_2.link" target="_blank" rel="noopener noreferrer" class="card-footer-item">
                <b-icon icon="open-in-new" class="nav-icon is-hidden-touch"></b-icon>
                <span>{{ card_2.button }}</span>
              </a>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData() {
    let content = await import('~/content/login.json')
    return content
  }
}
</script>
