import { createStore } from 'vuex'
// import axios from 'axios'

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null
  },

  mutations: {
    setUsers(state, values) {
      state.users = values
    },
    setUser(state, value) {
      state.user = value
    },
    setProducts(state, values) {
      state.products = values
    },
    setProduct(state, value) {
      state.product = value
    }
  },
  actions: {
  },
  modules: {
  }
})
