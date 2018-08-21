<template>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Enrollment Enquiry</p>
    </header>
    <section class="modal-card-body">
      <p>You can send us a message right now about this class. Please fill in the following details and we will get back to you as soon as we can.</p>
    </section>
    <section class="modal-card-body">
      <b-field label="Regarding" horizontal>
        <b-select v-model="currentClass" expanded>
          <option>
              {{ currentClass }}
          </option>
        </b-select>
        <b-select placeholder="Loading timeslots..." expanded loading>
          <option>
              3:30 - 4:30PM Tuesday
          </option>
        </b-select>
      </b-field>
      <b-field label="From" horizontal>
        <b-input
          type="text"
          icon="account"
          v-model="name"
          placeholder="Your name"
          required>
        </b-input>
      </b-field>
      <b-field horizontal>
        <b-input
          type="email"
          icon="email"
          v-model="email"
          placeholder="Your email"
          required>
        </b-input>
        <b-input
          v-model="phoneNumber"
          icon="cellphone"
          placeholder="Contact number">
        </b-input>
      </b-field>
      <b-field label="Details" horizontal>
        <b-input
          type="textarea"
          v-model="comment"
          placeholder="Please leave any details you think are important, i.e. age & gender of gymnast, level of experience, etc">
        </b-input>
      </b-field>
      <b-field label="How should we reply?" horizontal>
        <b-select placeholder="Select a preference" v-model="communicationPreference" expanded>
          <option value="phone">Phone</option>
          <option value="email">Email</option>
        </b-select>
      </b-field>
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success">Send message</button>
      <button class="button" @click="$parent.close()">Cancel</button>
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

