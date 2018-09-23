<template>
  <div class="container">
    <div class="ci-content is-navy has-text-white">
      <div class="ci-title">
        <h1>{{ title }}</h1>
      </div>
      <p class="ci-text">{{ content }}</p>
    </div>
    <div class="ci-button is-pulled-right">
      <div class="field">
        <div class="control">
          <nuxt-link :to="url" class="button is-square-button is-ci-button">{{ button }}</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    content: String,
    button: String,
    url: String
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  bottom: 5vh;
  padding-right: 2rem;

  @media all and (min-width: 960px) {
    max-width: 55vw;
  }

  .ci-content {
    padding: 3rem;
    opacity: 0.8;
    -webkit-border-radius: 5px;
    -webkit-border-bottom-right-radius: 0;
    -moz-border-radius: 5px;
    -moz-border-radius-bottomright: 0;
    border-radius: 5px;
    border-bottom-right-radius: 0;

    @media all and (max-width: 380px) {
      -webkit-border-bottom-left-radius: 0px;
      -moz-border-radius-bottomleft: 0px;
      border-bottom-left-radius: 0px;
    }

    .ci-title {
      padding-bottom: 1rem;
    
      h1 {
        font-weight: 800;
        font-size: 40px;
        letter-spacing: -0.009em;
        line-height: 56px;
        opacity: 1;
        
        @media all and (max-width: 768px) {
          font-size: 30px;
          letter-spacing: -0.008em;
          line-height: 42px;
        }

        @media all and (min-width: 1216px) {
          font-size: 60px;
          letter-spacing: -0.009em;
          line-height: 76px;
        }
      }
      
      p {
        opacity: 1;
      }
    }
    .ci-text {

    }
  }

  .ci-button {}

}
</style>
