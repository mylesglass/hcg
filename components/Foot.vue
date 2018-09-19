<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <figure class="image">
        <img :src="$store.state.foot_items.gnz_logo" alt="Gymnastics NZ"/>
      </figure>
      <p>
        <span v-html="$store.state.foot_items.foot1"></span>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  created () {
    // Initialise Data
    this.$store.dispatch('loadFoot')
  }
}
</script>

<style lang="scss" scoped>
.footer {
  border-top: 1px solid rgba(108,108,108,0.1);
}

.image {
  width: 256px;
  margin: auto;
}
</style>
