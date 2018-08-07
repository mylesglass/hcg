<template>
  <div>
    <navigation/>
    <nuxt/>
    <foot/>
  </div>
</template>

<script>
import Navigation from '~/components/Nav'
import Foot from '~/components/Foot'

export default {
  components: {
    Navigation,
    Foot
  }
  
}
</script>

