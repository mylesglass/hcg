<template>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Enquiry</p>
    </header>
    <section class="modal-card-body">
      <p>We'd love to hear from you. To help us provide you with the best response, make sure you include details about your gymnast such as age, gender, previous experience, etc.</p>
    </section>
    <section class="modal-card-body">
      <nav class="level">
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">general enquiries</p>
            <a :href="'mailto:office@hcg.org.nz?subject=' + currentClass.replace(' ','+') + '+Enquiry'" class="button is-success is-medium is-square-button"><b-icon icon="email"></b-icon><span>office@hcg.org.nz</span></a>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">phone*</p>
            <a href="tel:043864443" class="button is-primary is-medium is-square-button"><b-icon icon="phone"></b-icon><span>04 386 4443</span></a>
          </div>
        </div>
      </nav>
    </section>
    <section class="modal-card-body">
      <p>For a more complete list of ways to contact us, <nuxt-link to="/contact">click here.</nuxt-link></p>
      <br />
      <p class="is-size-7">*Please note that we aren't always able to answer the phone when you call. Leave us a message and we'll get back to you ASAP.</p>
    </section>
    <footer class="modal-card-foot">
      <button class="button" @click="$parent.close()">Close</button>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    currentClass: String
  },

  data() {
    return {

      name: '',
      email: '',
      phoneNumber: '',
      comment: '',
      communicationPreference: ''
    }
  }
}
</script>
