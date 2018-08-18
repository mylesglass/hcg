<template>
  <div class="tags has-addons">
    <span class="tag" :class="{ 'is-primary': days.monday }">Mon</span>
    <span class="tag" :class="{ 'is-primary': days.tuesday }">Tu</span>
    <span class="tag" :class="{ 'is-primary': days.wednesday }">Wed</span>
    <span class="tag" :class="{ 'is-primary': days.thursday }">Th</span>
    <span class="tag" :class="{ 'is-primary': days.friday }">Fri</span>
    <span class="tag" :class="{ 'is-primary': days.saturday }">Sat</span>
    <span class="tag" :class="{ 'is-primary': days.sunday }">Sun</span>
  </div>
</template>

<script>
export default {
  props: {
    days: Object
  }
  
}
</script>

<style lang="scss" scoped>

</style>
