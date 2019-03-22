<template>
  <div id="holprog">
    <img src="/images/svg/easter-egg-1.svg" class="egg egg1">
    <img src="/images/svg/easter-egg-2.svg" class="egg egg2">
    <img src="/images/svg/easter-egg-3.svg" class="egg egg3">
    <img src="/images/svg/easter-egg-4.svg" class="egg egg4">
    <img src="/images/svg/easter-egg-5.svg" class="egg egg5">
    <section class="section">
      <div class="container main-container">
        <figure class="image">
          <img src="/images/uploads/header.png" alt="Easter Holiday Programme" class="title-image">
        </figure>
        <p class="blurb">
          Harbour City GymSports is hosting an Easter holiday programme over the Term 1 break!
        </p>

        <p class="blurb">
          <strong>Monday 15th April</strong><br/>
          <strong>Tuesday 16th April</strong><br/>
          <strong>Wednesday 17th April</strong>
        </p>

        <p class="has-text-centered">
          Each day will be action-packed with lots of exciting activities such as gymnastics, 
          games, arts & crafts, fort building, and free time in the gym.<br>Each day will cost <strong>$35</strong> and run from
          <strong>9 AM - 3 PM</strong>.
        </p>
        <br/>
        <nav class="level">
          <p class="level-item">
            <a class="button is-medium is-primary is rounded" href="https://goo.gl/forms/jzKIcniw0ioE6U5v1">
              Click Here to Register
            </a>
          </p>
        </nav>
      </div>
    </section>
    
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>

#holprog {
  background-color: #ACD6F3;
  min-height: 100vh;
}

.title-image {
  z-index: 1;
}

.main-container {
  max-width: 750px;
}

.blurb {
  font-size: 1.6rem;
  text-align: center;
  line-height: 2rem;
  color: #262262;
  font-weight: 500;
  padding-bottom: 2rem;
}

.egg {
  position: absolute;
  z-index: 0;
}

.egg1 {
  width: 12vw;
  top: 10vh;
  left: 10vw;
}

.egg2 {
  width: 12vw;
  top: 10vh;
  right: 10vw;
}

.egg3 {
  width: 12vw;
  bottom: 10vh;
  left: 20vw;
}

.egg4 {
  width: 12vw;
  bottom: 10vh;
  right: 10vw;
}

.egg5 {
  width: 7vw;
  bottom: 5vh;
  left: 40vw;
}

</style>
