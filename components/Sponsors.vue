<template>
  <section class="section is-navy has-text-white">
    <div class="container has-text-centered">
      <header>
        <h1>{{ $store.state.sponsors.title }}</h1>
        <p>{{ $store.state.sponsors.description }}</p>
      </header>
      <no-ssr>
        <carousel :perPage="4" :autoplay="true" :autoplayTimeout="3000">
          <slide v-for="sponsor in $store.state.sponsors.items" :key="sponsor.name">
            <div class="sponsor-container ">
              <figure class="image is-128x128">
                <img :src="sponsor.imageUrl" />
              </figure>
              <p>{{ sponsor.name }}</p>
            </div>
          </slide>
        </carousel>
      </no-ssr>
    </div>
  </section>
</template>

<script>

export default {
  components: {
    //Carousel,
    //Slide
  },

  created () {
    // Initialise Data
   this.$store.dispatch('loadSponsors')
  }
}
</script>

<style lang="scss" scoped>
.image {
  margin: auto;
  margin-bottom: 1rem;
}

header {
  padding-bottom:1rem;
}
</style>
