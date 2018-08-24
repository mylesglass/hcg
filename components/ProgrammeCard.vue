<template>
  <div class="item"
    :style="{
      'width': '100%',
      'max-width': width,
      'min-height': height
    }">
    <div class="item-content">
      <div class="card">
        <div class="card-image">
          <span class="tag category" :class="tagColor">{{ category }}</span>
          <figure class="image is4by3">
            <img :src="imageUrl" alt="Programme Image">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="has-text-weight-bold is-size-5">{{ title }}</p>
              <p class="meta has-text-grey-light">{{ age }}</p>
            </div>
          </div>
          <div class="content">
            <p>{{ subtitle }}</p>
            <div class="card-button">
              <nuxt-link :to="link" class="button car-button is-fullwidth is-info is-outlined">View</nuxt-link>
            </div>
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
    subtitle: String,
    age: String,
    link: String,
    imageUrl: String,
    category: String
  },

  data () {
    return {
      width: '250px',
      height: '28.5rem'
    }
  },

  computed: {
    tagColor () {
      if (this.category === "Recreational") return 'is-success'
      else if (this.category === "Intermediate") return 'is-info'
      else if (this.category === "Advanced") return 'is-danger'
      else return 'is-white'
    }
  }
}
</script>

<style lang="scss" scoped>
.category {
  position: absolute;
  z-index: 1;
  top: 5px;
  right: 5px;
}

.card {
  min-height: 28.5rem;
  position: relative
}

.card-button {
  position: absolute;
  left: 25px;
  bottom: 25px;
  width: 200px;
}
</style>

