<template>
<!--
  <section class="section">
    <div class="container">
      
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
    <div class="container">
      <span v-html="htmlContent" class="markdown"></span>
    </div>
    <div class="container" v-if="items">
      <info-card v-for="item in items" :key="item.title" :item="item"/>
    </div>
  </section>-->
  <div>
    <div class="columns">
      <div class="column is-half left-column is-turquoise">
        <div class="image-container has-background-image" :style="bg"></div>
        <section class="section">
          <div class="container">
            <header>
              <h1 class="has-text-white">{{ title }}</h1>
              <p class="has-text-white">{{ subtitle }}</p>
            </header>
          </div>
          <div class="container table-container">
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
                <b-table-column field="detail" label="Details" :visible="hasDetails">
                  <b-tooltip :label="props.row.detail" position="is-left">
                    <b-icon icon="alert-circle" type="is-info"></b-icon>
                  </b-tooltip>
                </b-table-column>
              </template>
            </b-table>
          </div>
          <!--Modal button 
            <div class="level-item has-text-centered">
            <div>
              
              <button class="button is-fullwidth is-success is-medium"
                @click="isEnquireModalActive = true">
                Enquire about {{ title }}
              </button>
              
            </div>
          </div>-->
          <div class="container enquiry-container">
            <a class="button is-square-button is-white-turquoise-button is-pulled-right" @click="isEnquireModalActive = true">Enquire</a>
            <b-modal :active.sync="isEnquireModalActive" has-modal-card>
              <simple-enquiry-modal :current-class="title"></simple-enquiry-modal>
            </b-modal>
          </div>
        </section>
      </div>
      <div class="column is-half right-column" :style="rightColumnHeight">
        <section class="section right-section">
          <div class="container">
            <span v-html="htmlContent" class="markdown"></span>
          </div>
          <div class="container" v-if="items">
            <info-card v-for="item in items" :key="item.title" :item="item"/>
          </div>
        </section>
        <section class="section">
          <div class="has-text-centered">
            <a class="button is-square-button is-default-button" @click="isEnquireModalActive = true">Enquire</a>
          </div>
        </section>
      </div>
    </div>
    <resize-observer @notify="handleResize" />
  </div>
</template>

<script>
import Markdown from 'markdown-it'
import InfoCard from '~/components/InfoCard'
import DayInfo from '~/components/DayInfo'
import SimpleEnquiryModal from '~/components/SimpleEnquiryModal'
import 'vue-resize/dist/vue-resize.css'
import { ResizeObserver } from 'vue-resize' // Used to re-calc view hieght on resize

export default {
  async asyncData ({ params }) {
    let post = await import('~/content/programmes/' + params.slug + '.json')
    return post
  },

  components: {
    InfoCard,
    DayInfo,
    SimpleEnquiryModal,
    ResizeObserver
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
      isEnquireModalActive: false,
      rightColumnHeight: ''
    }
  },

  computed: {
    // Handles markdown and adds html tags
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
    },

    bg () {
      return 'background-image: url(' + this.thumbnail + ');'
    },

    // Check is the programme has detail data
    hasDetails () {
      if (this.classes[0].detail.length < 1) return false
      else return true
    }
  },

  methods: {
    // Calculates resize for right column in desktop views
    handleResize () {
      let height = window.innerHeight - 42 // main image and nav heights subtracted
      this.rightColumnHeight = 'min-height: ' + height + 'px; max-height: ' + height + 'px;'
    }
  },

  mounted () {
    this.handleResize()
  }
}
 </script>
 
<style lang="scss" scoped>
.level-container, .table-container {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.image-container {
  max-width: 100%;
  min-height: 25rem;
  background-size: cover; 
  background-position: center center;
}

.main-image {
  
}

.right-section {
  padding-top: 120px;
  padding-bottom: 120px;
  background-color: #f2f2f2;
}

.left-column {
padding-left: 0px;
padding-right: 0px;
}

.right-column {
  
}

.container {
  max-width: 600px;
}

@media screen and (min-width: 769px) {
  .right-column {
    overflow: scroll;
  }
}


.columns {
  margin-bottom: 0px;
}
</style>
 