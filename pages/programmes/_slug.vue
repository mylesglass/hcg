<template>
  <section class="section">
    <div class="container main-container">
      <header>
        <h1>{{ title }}</h1>
        <p>{{ subtitle }}</p>
      </header>
      
      <div class="table-container">
        <b-table :data="classes">
          <template slot-scope="props">
            <b-table-column field="days" label="Day">
              <day-info :days="props.row.days[0]"/>
            </b-table-column>
            <b-table-column field="time" label="Time">
              <p class="is-size-7">
                {{ props.row.time }}
              </p>
            </b-table-column>
            <b-table-column field="cost" label="Cost">
              <p class="is-size-7">
                {{ props.row.cost }}
                </p>
            </b-table-column>
            <b-table-column field="detail" label="Details" :visible="hasDetails">
              <b-tooltip :label="props.row.detail" position="is-left">
                <b-icon icon="alert-circle" type="is-info"></b-icon>
              </b-tooltip>
            </b-table-column>
          </template>
        </b-table>
        <div class="image-container has-background-image" :style="bg"></div>
      </div>
      
      <span v-html="htmlContent" class="markdown"></span>
    
      <div v-if="items">
        <info-card v-for="item in items" :key="item.title" :item="item"/>
      </div>
    </div>
  </section>
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
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.image-container {
  margin-top: 1rem;
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

@media screen and (min-width: 769px) {
  .right-column {
    overflow: scroll;
  }
}


.columns {
  margin-bottom: 0px;
}
</style>
 