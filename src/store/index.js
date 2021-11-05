import { api } from '../services'
import { createStore } from 'vuex'
import { Format } from '../helpers'

export default createStore({
  state: {
    toasts: [],
    isLoading: false,
    isMobileSidebarCollapsed: true,
    user: {
      id: null,
      name: '',
      email: '',
      class: '',
      courseID: null,
      tests: [],
      exercises: [],
      classes: [],
      course: {
        id: null,
        name: '',
        disciplines: []
      }
    }
  },
  mutations: {
    hydrateUser (state, { data }) {
      state.user = { ...state.user, ...{ ...Format.setData(data).all() } }
    },
    setIsLoading (state, { isLoading }) {
      state.isLoading = isLoading
    },
    setUserCourse (state, { course }) {
      state.user.course = course
    },
    closeToast (state, { id }) {
      state.toasts = state.toasts.filter((toast) => toast.id !== id)
    },
    makeToast (state, toast) {
      const id = state.toasts.length + 1

      state.toasts.push({
        id,
        ...toast
      })
    },
    toggleMobileSidebar (state) {
      state.isMobileSidebarCollapsed = !state.isMobileSidebarCollapsed
    }
  },
  getters: {
    getLastExercises: (state) => state.user.exercises.reverse().slice(0, 5),
    getNextTests: (state) => state.user.tests.reverse().splice(0, 5),
    getClasses: (state) => state.user.classes,
    getExercises: (state) => state.user.exercises,
    getTests: (state) => state.user.tests,
    getIsLoading: (state) => state.isLoading,
    getUseDisciplines: (state) => state.user.course.disciplines,
    getClassMaterial: (state) => (id) =>
      state.user.classes.find((item) => item.id === id).material,
    getToasts: (state) => state.toasts,
    getUserProfileData: (state) => {
      const { id, name, email } = state.user

      return {
        id,
        name,
        email
      }
    },
    getIsMobileSidebarOpen: (state) => state.isMobileSidebarCollapsed
  },
  actions: {
    async getCurrentUser ({ commit, dispatch }, { id }) {
      commit({
        type: 'setIsLoading',
        isLoading: true
      })

      try {
        const { data } = await api.get(`/students?id=${id}`)
        commit({
          type: 'hydrateUser',
          data: data[0]
        })

        dispatch('saveUserOnLocalStorage')

        commit({
          type: 'setIsLoading',
          isLoading: false
        })
      } catch {
        commit({
          type: 'makeToast',
          status: 'Error',
          title: 'Error on connection',
          text: 'Sorry , something wrong happened, try again'
        })

        commit({
          type: 'setIsLoading',
          isLoading: false
        })
      }
    },

    async loadUserCourse ({ commit, state }) {
      if (!state.user.course.id) {
        const localItem = window.localStorage.getItem('devSchool:user')

        if (localItem) {
          const { courseID } = JSON.parse(localItem)

          commit({
            type: 'setIsLoading',
            isLoading: true
          })

          try {
            const { data } = await api.get(`/courses?id=${courseID}`)

            commit({
              type: 'setUserCourse',
              course: data[0]
            })

            commit({
              type: 'setIsLoading',
              isLoading: false
            })
          } catch {
            commit({
              type: 'makeToast',
              status: 'Error',
              title: 'Error on connection',
              text: 'Sorry , something wrong happened, try again'
            })

            commit({
              type: 'setIsLoading',
              isLoading: false
            })
          }
        }
      }
    },
    saveUserOnLocalStorage ({ state }) {
      const { id, name, email, courseID } = state.user

      const user = {
        id,
        name,
        email,
        courseID
      }

      window.localStorage.setItem('devSchool:user', JSON.stringify(user))
    }
  }
})
