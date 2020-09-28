<template>
  <div :class="['date-picker-container', 'flex-center', {'hidden-footer': footer }]">
    <div
      class="date-picker-background flex-center"
      @click.stop.prevent="onClose"
    />

    <div class="calendar-container">
      <div class="calendar">
        <div class="calendar-header flex-center">
          <div>
            <h3
              :class="{ 'calendar-faint': selecting === 'date' }"
              @click="setSelecting('year')"
            >
              {{ selectedYear }}
            </h3>

            <h2
              :class="{ 'calendar-faint': selecting === 'year' }"
              @click="setSelecting('date')"
            >
              {{ abbrivatedDay }}, {{ selectedMonthWord }} {{ selectedDay }}
            </h2>
          </div>
        </div>

        <!-- Calendar -->
        <div
          v-if="selecting === 'date'"
          class="calendar-body"
        >
          <div class="calendar-date">
            <div>
              <!-- The svg's are from the material design chevron arrows -->
              <div
                v-if="showLeftArrow"
                class="calendar-arrows flex left"
                @click="setByMonth(currentMonth - 1)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#212121"
                    d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
                  />
                </svg>
              </div>
            </div>

            <div class="calendar-current-date flex-center">
              <h4>{{ currentMonthWord }} {{ currentYear }}</h4>
            </div>

            <div>
              <div
                v-if="showRightArrow"
                class="calendar-arrows flex right"
                @click="setByMonth(currentMonth + 1)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#212121"
                    d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <table>
            <thead>
            <tr>
              <td>S</td>
              <td>M</td>
              <td>T</td>
              <td>W</td>
              <td>T</td>
              <td>F</td>
              <td>S</td>
            </tr>
            </thead>

            <tbody>
            <tr
              v-for="(days, index) in calendar"
              :key="index"
            >
              <td
                v-for="(day, sindex) in days"
                :key="`day-${sindex}`"
                :class="{
                    'current-day': day.currentDay,
                    'disabled': day.disabled,
                    'selected': day.selected
                  }"
                tabindex="0"
                @keydown.enter="onInput"
                @keydown.space.stop.prevent="onInput"
                @keydown.esc="onClose"
                @click="setByDay(day)"
              >
                {{ day.day }}
              </td>
            </tr>
            </tbody>
          </table>
        </div>

        <!-- Years -->
        <div
          v-if="selecting === 'year'"
          class="calendar-year-select"
        >
          <div
            v-for="year in years"
            :id="`${year.year}-calendar-year`"
            :key="year.year"
            :class="{ 'selected': year.selected }"
            @click="setByYear(year.year)"
          >
            {{ year.year }}
          </div>
        </div>

        <div
          v-if="! footer"
          class="calendar-footer"
        >
          <fb-button
            uppercase
            variant="link"
            size="lg"
            class="text-muted"
            @click.stop.prevent="onClose"
          >
            Cancel
          </fb-button>

          <fb-button
            uppercase
            variant="link"
            size="lg"
            class="text-primary"
            @click.stop.prevent="onInput"
          >
            Ok
          </fb-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * Helpers for no dependencies™
 */

const dayMap = {
  0: 'Sun',
  1: 'Mon',
  2: 'Tue',
  3: 'Wed',
  4: 'Thu',
  5: 'Fri',
  6: 'Sat',
}

const monthMap = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December',
}

// Thanks, Lodash.

/**
 * https://lodash.com/docs/4.17.4#slice
 */
const slice = (array, start, end) => {
  let length = array === null ? 0 : array.length

  if (!length) {
    return []
  }

  let nstart = start === null ? 0 : start

  let nend = end === undefined ? length : end

  if (nstart < 0) {
    nstart = -nstart > length ? 0 : (length + nstart)
  }

  nend = nend > length ? length : nend

  if (nend < 0) {
    nend += length
  }

  length = nstart > nend ? 0 : ((nend - nstart) >>> 0)
  nstart >>>= 0

  let index = -1

  const result = new Array(length)

  while (++index < length) {
    result[index] = array[index + nstart]
  }

  return result
}

/**
 * https://lodash.com/docs/4.17.4#chunk
 */
const chunk = (array, size) => {
  const nsize = Math.max(size, 0)

  const length = array === null ? 0 : array.length

  if (!length || nsize < 1) {
    return []
  }

  let index = 0

  let resIndex = 0

  const result = new Array(Math.ceil(length / nsize))

  while (index < length) {
    result[resIndex++] = slice(array, index, (index += nsize))
  }

  return result
}

/**
 * Actual component stuff
 */

export default {

  name: 'FbMdDatePicker',

  props: {

    format: {
      type: Function,
      required: false,
      default: null,
    },

    min: {
      type: String,
      required: false,
      default: null,
    },

    max: {
      type: String,
      required: false,
      default: null,
    },

    value: {
      type: String,
      required: false,
      default: null,
    },

    footer: {
      type: Boolean,
      required: false,
      default: false,
    },

  },

  data() {
    return {
      selecting: 'date',
      currentMonth: '',
      currentYear: '',
      selectedDayOfWeek: '',
      selectedDay: '',
      selectedMonth: '',
      selectedYear: '',
    }
  },

  computed: {

    /**
     * Returns if there was any initial date settings.
     *
     * @returns {Boolean}
     */
    initialDate() {
      return !!(this.value || this.min)
    },

    /**
     * The date property, converted to a date.
     *
     * @returns {Date}
     */
    specifiedDate() {
      return new Date(this.value)
    },

    /**
     * Returns a formatted date e.g. 2016-4-19. This is emitted on the input event
     *
     * @returns {String}
     */
    calculatedDate() {
      const day = this.selectedDay >= 10 ? this.selectedDay : `0${this.selectedDay}`
      const month = this.selectedMonth + 1 >= 10 ? this.selectedMonth + 1 : `0${this.selectedMonth + 1}`

      return `${this.selectedYear}-${month}-${day}`
    },

    /**
     * Returns an abbreviation of a day e.g. Sun, Mon, etc.
     *
     * @returns {String}
     */
    abbrivatedDay() {
      return dayMap[this.selectedDayOfWeek]
    },

    /**
     * Returns the currently viewed month as a word.
     *
     * @returns {String}
     */
    currentMonthWord() {
      return monthMap[this.currentMonth]
    },

    /**
     * Returns the selected month as a word.
     *
     * @returns {String}
     */
    selectedMonthWord() {
      return monthMap[this.selectedMonth]
    },

    /**
     * The minimum date the calendar will allow you to select.
     *
     * @returns {Date}
     */
    minDate() {
      if (this.min) {
        const minDateSplit = this.min.split('-')

        return new Date(minDateSplit[0], minDateSplit[1], minDateSplit[2])
      }

      return new Date()
    },

    /**
     * The maximum date the calendar will allow you to select.
     *
     * @returns {Date}
     */
    maxDate() {
      if (this.max) {
        const maxDateSplit = this.max.split('-')

        return new Date(maxDateSplit[0], maxDateSplit[1], maxDateSplit[2])
      }

      return new Date()
    },

    /**
     * Determines if the left arrow for the current date should be shown.
     *
     * @returns {Boolean}
     */
    showLeftArrow() {
      // Show the left arrow when there is either no mininum date, or when the
      // minimum year and minimum month are the same as the current year and
      // current month.
      if (!this.min) {
        return true
      }

      return !(this.minDate.getFullYear() === this.currentYear && (this.minDate.getMonth() - 1) === this.currentMonth)
    },

    /**
     * Determines if the right arrow for the current date should be shown.
     *
     * @returns {Boolean}
     */
    showRightArrow() {
      // Show the right arrow when there is either no maximum date, or when
      // the maximum year and maximum month are the same as the current
      // year and current month.
      if (!this.max) {
        return true
      }

      return !(this.maxDate.getFullYear() === this.currentYear && this.maxDate.getMonth() - 1 === this.currentMonth)
    },

    /**
     * Computes a formatted array of days for a given month and year.
     *
     * @returns {Array}
     */
    calendar() {
      // The calendar's output is a function of all of the days in a given
      // month, chunked into an array of arrays, each containing 5 or 6
      // and 7 elements respectively.
      const days = []

      // Padding for the first row, e.g. if the month's first day starts on
      // Friday, the first array will be ['', '', '', '', '', '1', '2']
      const startOfMonthDay = new Date(this.currentYear, this.currentMonth, 1).getDay()

      for (let i = 0, len = startOfMonthDay; i < len; i++) {
        days.push('')
      }

      // Create an array containing all days in the current month
      const daysInMonth = 32 - new Date(this.currentYear, this.currentMonth, 32).getDate()

      for (let i = 0; i < daysInMonth; i++) {
        days.push(i + 1)
      }

      // Map the days from numbers to objects that have current day,
      // selected, and disabled properties for the view.
      const today = new Date()

      const dayObjects = days.map((day) => {
        const currentDay = (day === today.getDate()) &&
          (this.currentMonth === today.getMonth()) &&
          (this.currentYear === today.getFullYear())

        const selected = (this.selectedDay === day) &&
          (this.currentMonth === this.selectedMonth) &&
          (this.currentYear === this.selectedYear)

        const disabled = day === '' ? true : this.dayDisabled(day)

        return { day, currentDay, selected, disabled }
      })

      // Chunk all of the days into an array of arrays, by seven.
      return chunk(dayObjects, 7)
    },

    /**
     * Computes a list of years.
     *
     * @returns {Array}
     */
    years() {
      // Set the first year of the array.
      let firstYear

      if (this.min) {
        firstYear = this.minDate.getFullYear()
      } else if (this.value) {
        firstYear = this.specifiedDate.getFullYear()
      } else {
        firstYear = (new Date()).getFullYear()
      }

      // Create a range of years to loop through which is either the maximum
      // date minus the first year, or simply 100.
      const through = this.max ? (this.maxDate.getFullYear() + 1) - firstYear : 101

      const years = []

      for (let i = firstYear, len = firstYear + through; i < len; i++) {
        years.push(i)
      }

      return years.map((year) => {
        return { year, selected: year === this.selectedYear }
      })
    },

  },

  created() {
    this.hideBodyOverflow(true)

    this.setDate()

    this.setEscapeEvent()
  },

  methods: {

    /**
     * Changes the display to the calendar or years depending on the value.
     */
    setSelecting(value) {
      this.selecting = value

      // If the user is selecting a year, we want to go to the selected year
      // minus two (as does the material design date picker).
      if (value === 'year') {
        this.$nextTick(() => {
          const container = document.querySelector('.calendar-year-select')

          const el = document.getElementById(`${this.selectedYear}-calendar-year`)

          container.scrollTop = (el.offsetTop - 100) - 76
        })
      }
    },

    /**
     * Set the date by the given day.
     *
     * @param {Object} day
     */
    setByDay(day) {
      if (day.disabled) return

      this.selectedYear = this.currentYear

      this.selectedDay = day.day

      this.selectedMonth = this.currentMonth

      this.selectedDayOfWeek = new Date(this.selectedYear, this.selectedMonth, day.day).getDay()

      if (this.footer) {
        this.onInput()
      }
    },

    /**
     * Set the date by the given month.
     *
     * @param {(String, Number)} month
     */
    setByMonth(month) {
      if (month === 12) {
        this.currentYear = this.currentYear + 1

        this.currentMonth = 0

        return
      }

      if (month === -1) {
        this.currentYear = this.currentYear - 1

        this.currentMonth = 11

        return
      }

      this.currentMonth = month
    },

    /**
     * Set the date by the given year.
     *
     * @param {(String, Number)} year
     */
    setByYear(year) {
      this.selectedYear = year

      this.currentYear = year

      this.selecting = 'date'
    },

    /**
     * Set the initial date for the calendar.
     */
    setDate() {
      // If a date property has been passed to the component, that will be
      // used instead of the current day.
      let date

      if (this.min && this.min && !this.value) {
        date = new Date(this.min)
      } else if (this.value && this.value) {
        date = new Date(this.value)
      } else {
        date = new Date()
      }

      if (this.initialDate) {
        this.selectedDay = date.getDate() + 1
      } else {
        this.selectedDay = date.getDate()
      }

      this.selectedDayOfWeek = date.getDay()

      this.selectedMonth = date.getMonth()

      this.currentMonth = date.getMonth()

      this.selectedYear = date.getFullYear()

      this.currentYear = date.getFullYear()
    },

    dayDisabled(day) {
      // A day is disabled when the minimum month and minimum year are equal
      // to the current month and year and the day is less than the min date's day
      if (this.min &&
        (this.minDate.getMonth() - 1 === this.currentMonth &&
          this.minDate.getFullYear() === this.currentYear) &&
        day < this.minDate.getDate()) {
        return true
      }

      //  Or when the maximum month and maximum year are equal to the current
      //  month and year and the day is greater than the max date's day
      if (this.max &&
        (this.maxDate.getMonth() - 1 === this.currentMonth &&
          this.maxDate.getFullYear() === this.currentYear) &&
        day > this.maxDate.getDate()) {
        return true
      }

      return false
    },

    // Misc methods that have nothing to do with calendar stuff.

    /**
     * Hides the overflow of the body when the date picker is active.
     *
     * @param {Boolean} show
     */
    hideBodyOverflow(show) {
      const bodyEl = document.querySelector('body')

      if (show === true) {
        bodyEl.style.overflow = 'hidden'

        return
      }

      bodyEl.style.overflow = ''
    },

    /**
     * Close the date picker if the escape key is pressed.
     */
    setEscapeEvent() {
      document.addEventListener('keydown', (event) => {
        if (event.keyCode === 27 || event.key === 'Escape') {
          this.onClose()
        }
      })
    },

    /**
     * When the "Ok" button is pressed, or enter is pressed, emit the input
     * event and close the date picker.
     */
    onInput() {
      const date = this.format ? this.format(this.calculatedDate) : this.calculatedDate

      this.$emit('input', date)

      this.onClose()
    },

    /**
     * Emit a close event so the developer can close the date picker as they
     * see fit.
     */
    onClose() {
      this.hideBodyOverflow(false)

      this.$emit('close')
    },

  },

}
</script>

<style rel="stylesheet/scss" lang="scss">
  @import 'index';
</style>
