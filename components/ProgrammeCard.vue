<template>
  <div class="item" :style="dimensions">
    <div class="item-content" :style="dimensions">
      <div class="card" ref="card" :style="dimensions">
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
          <p>{{ subtitle }}</p>
        </div>
        <div class="card-footer">
          <nuxt-link :to="link" class="card-footer-item is-card-button button is-square-button">View</nuxt-link>
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
    category: String,
    type: String
  },

  computed: {
    tagColor () {
      if (this.category === "Recreational") return 'is-success'
      else if (this.category === "Intermediate") return 'is-info'
      else if (this.category === "Advanced") return 'is-danger'
      else if (this.category === "Service") return 'is-white'
    },

    dimensions () {

      if (this.type === 'Desktop') return 'width: 20rem; height: auto; min-height: auto'
      
      else return 'width: auto; height: auto; min-height: auto'
    }
  },

  mounted () {
    console.log(this.$refs.card.clientHeight + 'px')
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

.card-image {
  min-height: 240px;
}

</style>

