<template>
  <div class="column news-tile" @click="$router.push(url)">
    <figure class="image">
      <img :src="image" class="news-tile-image">
    </figure>
    <p class="news-tile-title is-size-4">{{ title }}</p>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    title: String,
    description: String,
    url: String
  }
}
</script>

<style lang="scss" scoped>
$hcg-turq: #09738b;

.news-tile:hover {
  cursor: pointer;

  .news-tile-title {
    color: $hcg-turq;
  }

  .news-tile-image {
    filter: brightness(110%);
  }
}

.news-tile-title {
  font-weight: 700;
  padding-top: 16px;
  line-height: 1.6rem;
  padding-bottom: 16px;
}
</style>

