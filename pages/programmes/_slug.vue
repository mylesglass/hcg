<template>
  <section class="section">
    <div class="container">
      <header>
        <h1>{{ title }}</h1>
        <p class="subtitle">{{ subtitle }}</p>
      </header>
    </div>
    <div class="container level-container" v-for="entry in classes" :key="entry.time" v-if="classes.length === 1">
      <nav class="level">
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Days</p>
            <day-info :days="entry.days[0]"/>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Time</p>
            <p class="title">{{ entry.time }}</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Cost</p>
            <p class="title">{{ entry.cost }}</p>
          </div>
        </div>
        <div class="level-item has-text-centered" v-if="entry.detail">
          <div>
            <p class="heading">Info</p>
            <p>{{ entry.detail }}</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <button class="button is-fullwidth is-success is-medium"
              @click="isEnquireModalActive = true">
              Enquire
            </button>
            <b-modal :active.sync="isEnquireModalActive" has-modal-card scroll="keep">
              <enquire-modal-card :current-class="title"></enquire-modal-card>
            </b-modal>
          </div>
        </div>
      </nav>
    </div>
    <div class="container table-container" v-if="classes.length > 1">
      <b-table :data="classes">
        <template slot-scope="props">
          <b-table-column field="days" label="Day">
            <day-info :days="props.row.days[0]"/>
          </b-table-column>
          <b-table-column field="time" label="Time">
            {{ props.row.time }}
          </b-table-column>
          <b-table-column field="cost" label="Cost">
            {{ props.row.cost }}
          </b-table-column>
          <b-table-column field="detail" label="Details">
            {{ props.row.detail }}
          </b-table-column>
        </template>
      </b-table>
    </div>
    <div class="container">
      <span v-html="htmlContent" class="markdown"></span>
    </div>
    <div class="container" v-if="items">
      <info-card v-for="item in items" :key="item.title" :item="item"/>
    </div>
  </section>
</template>

 <script>
import Markdown from 'markdown-it'
import InfoCard from '~/components/InfoCard'
import DayInfo from '~/components/DayInfo'
import EnquireModalCard from '~/components/EnquireModalCard'

export default {
  async asyncData ({ params }) {
    let post = await import('~/content/programmes/' + params.slug + '.json')
    return post
  },

  components: {
    InfoCard,
    DayInfo,
    EnquireModalCard
  },

  data () {
    return {
      columns: [
        {
          field: 'days',
          label: 'Day'
        },
        {
          field: 'time',
          label: 'Time'
        },
        {
          field: 'cost',
          label: 'Cost'
        },
        {
          field: 'detail',
          label: 'Details'
        }
      ],

      isEnquireModalActive: false
    }
  },

  computed: {
    htmlContent () {
      let md = new Markdown({
        breaks: true,
        html: true,
        typographer: true
      })

      let content = md.render(this.body)

      // add paragraph class
      content = content.replace(/<p>/g, '<p class="paragraph">')

      return content
    }
  }
}
 </script>
 
 <style lang="scss" scoped>
 .level-container, .table-container {
   padding-bottom: 2rem;
 }
 </style>
 