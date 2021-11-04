import dayjs from 'dayjs'

export class Format {
  data = {}

  static date (date) {
    return dayjs(date).format('DD/MM/YYYY')
  }

  static tests () {
    const rawData = this.data.tests

    return rawData.map((item) => {
      const rawNotes = Object.values(item.notes)

      const notes = rawNotes.map((note) => note || '-')

      const validNotes = rawNotes.filter((note) => note)

      const finalNote = (
        validNotes.reduce((total, note) => {
          total += note
          return total
        }, 0) / validNotes.length
      ).toFixed(2)

      const testDate = this.date(item.testDate)

      return Object.assign({}, item, { notes, finalNote, testDate })
    })
  }

  static exercises () {
    return this.data.exercises.map((item) => {
      return {
        ...item,
        request_at: this.date(item.request_at),
        end_date: this.date(item.end_date),
        responses: this.responses(item.responses)
      }
    })
  }

  static classes () {
    return this.data.classes.map((item) => {
      return {
        ...item,
        date: this.date(item.date)
      }
    })
  }

  static responses (data) {
    return data.map((item) => ({
      ...item,
      postAt: this.date(item.postAt)
    }))
  }

  static all () {
    return {
      ...this.data,
      tests: this.tests(),
      classes: this.classes(),
      exercises: this.exercises()
    }
  }

  static setData (data) {
    this.data = data

    return this
  }
}
