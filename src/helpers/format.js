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
        requestAt: this.date(item.requestAt),
        endDate: this.date(item.endDate),
        responses: this.responses(item.responses),
        isCollapsed: true
      }
    })
  }

  static classes () {
    const rawData = this.data.classes.map((item) => {
      return {
        ...item,
        date: this.date(item.date)
      }
    })

    const objData = rawData.reduce((obj, item) => {
      const { discipline, ...rest } = item

      if (obj[discipline]) {
        obj[discipline].push({ ...rest })
      } else {
        obj[discipline] = [{ ...rest }]
      }

      return obj
    }, {})

    return Object.entries(objData).reduce((array, item, i) => {
      array.push({
        id: i + 1,
        name: item[0],
        classData: item[1].map((item) => ({ ...item, isCollapsed: true })),
        isCollapsed: true
      })

      return array
    }, [])
  }

  static responses (data) {
    return data.map((item) => ({
      ...item,
      postAt: this.date(item.postAt),
      isCollapsed: true
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
