<template>
  <div id="homepage">
    <!-- Splash -->
    <section class="hero is-large" :style="bg">
      <div class="hero-body">
        <div class="container">
          <h1 class="title splash-title has-text-white">
            {{ splash_heading }}
          </h1>
          <h2 class="subtitle splash-subtitle has-text-light">
            {{ splash_subtitle }}
          </h2>
          <nuxt-link to="/programmes" class="button is-primary is-outlined is-inverted">See Our Programmes</nuxt-link>
        </div>
      </div>
    </section>
  
    <!-- About HCG -->
    <!-- Programmes -->
    <section class="section home-section">
      <div class="container has-text-centered">
        <h1 class="title home-title">Why you should visit us</h1>
      </div>
      <div class="container programme-col-container">
        <div class="columns">
          <div class="column">
            <figure class="image about-image is-4x3">
              <img :src="col1_image" alt="Harbour City Gymnastics">
            </figure>
            <p class="subtitle has-text-weight-bold">Safe, Friendly Environment</p>
            <p class="paragraph">We believe gymnastics is a safe and nuturing sport, and from the moment you walk into our gymnasium you will see we are a safe, </p> 
          </div>
          <div class="column">
            <figure class="image about-image is-4x3">
              <img :src="col2_image" alt="Harbour City Gymnastics">
            </figure>
            <p class="subtitle has-text-weight-bold">Awesome coaches, dedicated to gymnastics</p>
            <p>Our staff all have a passion for gymnastics, and are fullly trained through Gymnastics NZ. We offer a higher coach-to-gymnast ratio than most other clubs.</p>
          </div>
          <div class="column">
            <figure class="image about-image is-4x3">
              <img :src="col3_image" alt="Harbour City Gymnastics">
            </figure>
            <p class="subtitle has-text-weight-bold">Opportunities for all abilities</p>
            <p class="paragraph">Not only to we have </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Programmes -->
    <section class="section home-section" id="programmes-section">
      <div class="container has-text-centered">
        <h1 class="title home-title has-text-white">{{ programmes_title}}</h1>
        <p class="subtitle has-text-light">{{ programmes_subtitle }}</p>
      </div>
      <div class="container has-text-centered programme-col-container">
        <div class="columns">
          <div class="column">
            <figure class="image about-image is-4x3">
              <img :src="col1_image" alt="Harbour City Gymnastics">
            </figure>
            <p class="subtitle has-text-weight-bold has-text-light">{{ col1_title }}</p>
            <p class="paragraph has-text-light">{{ col1_desc }}</p>
            <nuxt-link :to="col1_link" class="home-button button is-primary is-inverted is-outlined">{{ col1_button }}</nuxt-link> 
          </div>
          <div class="column">
            <figure class="image about-image is-4x3">
              <img :src="col2_image" alt="Harbour City Gymnastics">
            </figure>
            <p class="subtitle has-text-weight-bold has-text-light">{{ col2_title }}</p>
            <p class="paragraph has-text-light">{{ col2_desc }}</p>
            <nuxt-link :to="col2_link" class="home-button button is-primary is-inverted is-outlined">{{ col2_button }}</nuxt-link> 
          </div>
          <div class="column">
            <figure class="image about-image is-4x3">
              <img :src="col3_image" alt="Harbour City Gymnastics">
            </figure>
            <p class="subtitle has-text-weight-bold has-text-light">{{ col3_title }}</p>
            <p class="paragraph has-text-light">{{ col3_desc }}</p>
            <nuxt-link :to="col3_link" class="home-button button is-primary is-inverted is-outlined">{{ col3_button }}</nuxt-link> 
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="section home-section" id="contact-section">
      <div class="container has-text-centered">
        <h1 class="title home-title">{{ contact_title }}</h1>
        <p class="subtitle">{{ contact_subtitle }}</p>
        <nuxt-link to="/contact" class="home-button button is-primary">{{ contact_button }}</nuxt-link> 
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData() {
    let content = await import('~/content/home.json')
    return content
  },

  computed: {
    bg () {
      return 'background-image: url(' + this.splash_image + ');'
    }
  }
}
</script>

<style scoped>
.section  {
  padding-bottom: 120px;
}

#programmes-section {
  background-color: #0e132b;
}

#contact-section, #about-section {
  background-color: white;
}

.splash-title {
  font-size: 3rem;
  line-height: 3.4rem;
}

.splash-subtitle {
  font-size: 1.5rem;
}

.home-button {
  margin-top: 3rem;
}

.home-title {
  padding-bottom: 2rem;
}

.about-image {
  margin-top: 3rem;
  margin-bottom: 2rem;
}

.hero {
  background-size: cover; 
  background-position: center center;
}

.home-section {
  padding-top: 120px;
}
</style>

