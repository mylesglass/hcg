<template>
  <div class="column is-12">
    <div class="columns is-gapless">
      <div class="column is-half">
        <div class="image-tile has-background-image" :style="{ backgroundImage: 'url(' + imageUrl + ')' }"></div>
      </div>
      <div class="column is-half" :class="columnType">
        <div class="info-table">
            <!-- Top Content -->
            <header>
              <h1>{{ title }}</h1>
              <p class="paragraph">{{ content }}</p>
            </header>
            <!-- Bottom Content -->
            <div class="info-bottom-content">
              <nuxt-link :to="buttonUrl" class="button is-square-button" :class="buttonType">{{ buttonText }}</nuxt-link>
            </div>
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
    buttonText: String,
    buttonUrl: String,
    color: Number,
    imageUrl: String
  },

  computed: {
    columnType () {
      if (this.color === 0) return ''
      else if (this.color % 2 === 0) return 'is-purple has-text-white'
      else if (this.color % 2 === 1) return 'is-turquoise has-text-white'
    },

    buttonType () {
      if (this.color === 0) return 'is-default-button'
      else if (this.color % 2 === 0) return 'is-white-purple-button'
      else if (this.color % 2 === 1) return 'is-white-turquoise-button'
    }
  }
}
</script>

<style lang="scss" scoped>
.info-table {
  height: 100%;
  border-collapse: collapse;
  display: table;

  header {
    padding-top: 3rem;
    padding-left: 3rem;
    padding-right: 3rem;
  }
}

.info-content {
  padding: 3rem 3rem;
}

.info-bottom-content {
  display: table-row;
  vertical-align: bottom;
  height: 1px;
  
  a {
    margin-left: 3rem;
    margin-right: 3rem;
    margin-bottom: 3rem;
  }
}

.image-tile {
  min-height: 30rem;
  height: 100%;
}
</style>
