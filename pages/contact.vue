<template>
  <div id="contact">
    <section class="hero is-primary is-small">
      <div class="hero-head">
        <inverted-nav></inverted-nav>
      </div>
      <div class="hero-body">
        <div class="container">
          <header>
            <h1>Contact Us!</h1>
            <p class="subtitle">We're always looking for new members, and happy to discuss with you what's best for your needs. Don't hesitate to use one of the following forms of communication to get in touch.</p>
          </header>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <p class="title">Phone</p>
            <p class="paragraph">We can be reached via phone during the following hours:</p>
            <ul>
              <li>Tuesday: 9:30 - 1:00 PM</li>
              <li>Wedneday: 9:30 - 1:00 PM</li>
              <li>Thursday: 9:30 - 1:00 PM</li>
            </ul>
            <p class="meta has-text-grey-light">We are usually in the gym outside of these hours, but it is difficult for our staff to answer the phone when they are busy coaching. You can leave a message and we will ring you back during our office hours.</p>
          </div>
          <div class="column">
            <p class="title">Email</p>
            <p class="paragraph">Send us a message, and we will get back to you as soon as we can.</p>
            <ul>
              <li>General Enquiries: <a href="mailto:office@hcg.org.nz">office@hcg.org.nz</a></li>
              <li>Accounts: <a href="mailto:accounts@hcg.org.nz">accounts@hcg.org.nz</a></li>
              <li>Head Coach: <a href="mailto:kay@hcg.org.nz">kay@hcg.org.nz</a></li>
              <li>Recreational Programme Enquires: <a href="mailto:gym4all@hcg.org.nz">gym4all@hcg.org.nz</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import InvertedNav from '~/components/InvNav'

export default {
  layout: 'page',

  components: {
    InvertedNav
  }
}
</script>

