<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <div class="columns is-centered">
        <div class="column is-2">
          <figure class="image is-128x128">
            <img :src="$store.state.foot_items.gnz_logo" alt="Gymnastics NZ"/>
          </figure>
        </div>
        <div class="column is-2">
          <figure class="image is-128x128">
            <img :src="$store.state.foot_items.esst_logo" alt="ESST"/>
          </figure>
        </div>
      </div>
      <p>
        <span v-html="$store.state.foot_items.foot1"></span>
        <br/>
        {{ $store.state.foot_items.foot2 }}
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

