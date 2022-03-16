import { defineStore, acceptHMRUpdate } from 'pinia'

export const useCounter = defineStore({
  id: 'counter',
  state: () => ({
    count: 0
  }),
  getters: {
    getCountDouble: state => state.count * 2
  },
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounter, import.meta.hot))
}
