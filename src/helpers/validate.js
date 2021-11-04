import validator from 'validator'

export class Validate {
  value = ''
  message = ''
  isValid = false

  static setValue (value) {
    this.value = value
    this.message = ''
    return this
  }

  static required (message = '') {
    this.isValid = Boolean(this.value)

    if (!this.isValid) {
      this.message = message
    }

    return this
  }

  static isEmail () {
    if (this.value) {
      this.isValid = validator.isEmail(this.value)

      if (!this.isValid) {
        this.message = 'Invalid email address'
      }
    }

    return this
  }

  static getIsValid () {
    return this.isValid
  }

  static getMessage () {
    return this.message
  }
}
