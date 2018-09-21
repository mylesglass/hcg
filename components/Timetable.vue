<!--
  This is to be a realitime recreation of the competitive handbook timetable, but with our recreational classes on it instead.
-->
  

<template>
  <b-table :data="programmes">
    <template slot-scope="props">
      <b-table-column field="monday" label="Monday">
        {{ props.row.time }}
      </b-table-column>
    </template>
  </b-table>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  
  props: {
    classes: Array
  }
}
</script>

<style lang="scss" scoped>

</style>
