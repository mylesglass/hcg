<template>
  <div id="programmes">
    <section class="hero is-primary is-small">
      <div class="hero-head">
        <inverted-nav></inverted-nav>
      </div>
      <div class="hero-body">
        <div class="container">
          <header>
            <h1>Gymnastics Programmes</h1>
            <p class="subtitle">We got that boi!</p>
          </header>
        </div>
      </div>
    </section>

    <!-- Recreational -->
    <section class="section">
      <div class="container">
        <p class="title">Recreational</p>
        <p class="subtitle">Gymnastics courses that encourage fun, movement, and allow entry level</p>
        <div class="columns">
          <div class="column">
            <programme-card/>
          </div>
          <div class="column">
            <programme-card/>
          </div>
          <div class="column">
            <programme-card/>
          </div>
        </div>
      </div>
    </section>

    <!-- Intermediate -->
    <section class="section intermediate">
      <div class="container">
        <p class="title has-text-white">Intermediate</p>
        <p class="subtitle has-text-light">Gymnastics courses that encourage fun, movement, and allow entry level</p>
        <div class="columns">
          <div class="column">
            <programme-card/>
          </div>
          <div class="column">
            <programme-card/>
          </div>
          <div class="column">
            <programme-card/>
          </div>
        </div>
      </div>
    </section>

    <!-- Advanced -->
    <section class="section">
      <div class="container">
        <p class="title">Advanced</p>
        <p class="subtitle">Gymnastics courses that encourage fun, movement, and allow entry level</p>
        <div class="columns">
          <div class="column">
            <programme-card/>
          </div>
          <div class="column">
            <programme-card/>
          </div>
          <div class="column">
            <programme-card/>
          </div>
        </div>
      </div>
    </section>

    <!-- Other -->
    <section class="section other">
      <div class="container">
        <p class="title has-text-white">Other</p>
        <p class="subtitle has-text-light">Gymnastics courses that encourage fun, movement, and allow entry level</p>
        <div class="columns">
          <div class="column">
            <programme-card/>
          </div>
          <div class="column">
            <programme-card/>
          </div>
          <div class="column">
            <programme-card/>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import InvertedNav from '~/components/InvNav'
import ProgrammeCard from '~/components/ProgrammeCard'

export default {
  layout: 'page',

  components: {
    InvertedNav,
    ProgrammeCard
  }
}
</script>

<style scoped>
.intermediate, .other{
  background-color: #0e132b;
}
</style>

