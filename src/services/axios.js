import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://still-thicket-58861.herokuapp.com/'
})
