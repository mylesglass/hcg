<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-64x64" :class="{ ribbon: item.is_ribbon }">
            <img :src="item.image">
          </figure>
        </div>
        <div class="media-content">
          <p class="has-text-weight-bold is-size-6">{{ item.title }}</p>
          <p class="content">{{ item.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  }
}
</script>

<style lang="scss" scoped>
.card {
  margin-top: 12px;
}

.ribbon {
  top: -26px;
}
</style>
