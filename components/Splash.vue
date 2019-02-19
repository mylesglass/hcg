<template>
  <section class="section has-background-image" :style="bg">
    <div class="container has-text-white">
      <div class="columns splash" @click="$router.push(url)">
        <div class="column">
          <header>
            <h1>{{ title }}</h1>
            <p>{{ description }}</p>
          </header>
          <div class="splash-button">
            <nuxt-link :to="url" class=" button is-square-button is-white-navy-button">{{ button }}</nuxt-link>
          </div>
        </div>
        <!--<div class="column is-half">
          <figure class="image">
            <img :src="image" alt="">
          </figure>
        </div>-->
        
          
        
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    image: String,
    title: String,
    description: String,
    button: String,
    url: String
  },

  computed: {
    bg () {
      return 'background-image: url(' + this.image + ');'
    }
  }
}
</script>

<style lang="scss" scoped>
$hcg-purple: #452b7d;
$hcg-navy: #0e132b;
$hcg-turq: #09738b;
$hcg-bg: #f2f2f2;
$hcg-dark: #4a4a4a;

.section {
  background-color: $hcg-purple;
}

header {
  padding-top: 6rem;
  padding-bottom: 6rem;
}

img {
  transition: all 0.3s;
}

.splash {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.section:hover {
  cursor: pointer;

  img {
    filter: brightness(110%)
  }

  h1, p {
    color: white;
  }

  .button {
    background-color: white;
    color: $hcg-navy;
  }
}

h1 {
  font-size: 4rem;
  line-height: 4rem;
}

@media screen and (max-width: 769px) {
  h1 {
    font-size: 3rem;
  }
}

h1, p {
  color: $hcg-bg;
  transition: all 0.3s;
}

p {
  font-size: 1.4rem;
  line-height: 1.8rem;
}

</style>
