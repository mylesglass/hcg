<template>
  <div class="programme-card">
    <div class="card">
      <div class="card-image">
        <figure class="image is4by3">
          <img :src="imageUrl" alt="Programme Image">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="subtitle has-text-weight-bold">{{ title }}</p>
            <div class="level">
              <div class="level-left">
                <div class="level-item">
                  <p class="meta">{{ age }}</p>
                </div>
              </div>
              <div class="level-right">
                <div class="level-item">
                  <span class="tag" :class="tagColor">{{ category }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="content">
          <p>{{ subtitle }}</p>
          <nuxt-link :to="link" class="button is-fullwidth is-info is-outlined">View</nuxt-link>
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
