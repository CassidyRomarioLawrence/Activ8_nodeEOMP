import {
  createStore
} from 'vuex'
import axios from 'axios'
const active = "https://activ8-nodeeomp.onrender.com/"

export default createStore({
  state: {
    users: null,
    user: null,
    products: [],
    product: null,
    spinner: true
  },

  mutations: {
    setUsers(state, values) {
      state.users = values
    },
    setUser(state, value) {
      state.user = value
    },
    setProducts(state, products) {
      state.products = products
    },
    setProduct(state, value) {
      state.product = value
    },
    setSpinner(state, spinner) {
      state.spinner = spinner
    }
  },
  actions: {
    register: async (context, payload) => {
      const {
        firstName,
        lastName,
        phoneNumber,
        email,
        userPass,
        gender,
        userRole,
        userImage,
        joinDate
      } = payload;
      fetch(`${active}register`, {
          method: "POST",
          body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            email: email,
            userPass: userPass,
            gender: gender,
            userRole: userRole,
            userImage: userImage,
            joinDate: joinDate
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          },
        })
        .then((res) => res.json())
        .then((json) => context.commit("setUser", json));
    },

    login: async (context, payload) => {
      const {
        email,
        userPass
      } = payload;

      const res = await fetch(
        `${active}/login?email=${email}&password=${userPass}`)
      const userData = await res.json();
      context.commit("setUser", userData[0])
    },

    async getUsers(context) {
      const res = await axios
        .get(`${active}users`);
      let {
        results,
        err
      } = await res.data;
      if (results) {
        context.commit('setUsers', results)
      } else {
        context.commit('setMessage', err)
      }
    },

    

    deleteUser: async (context, id) => {
      fetch(`${active}user/` + id, {
        method: "DELETE",
      }).then(() => context.dispatch("getUsers"))
    },

    createUser: async (context, product) => {
      fetch(`${active}user/`, {
          method: "POST",
          body: JSON.stringify(product),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
        .then((response) => response.json())
        .then(() => context.dispatch("getUsers"));
    },

    updateUser: async (context, product) => {
      fetch(`${active}user/` + product.id, {
          method: "PUT",
          body: JSON.stringify(product),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
        .then((response) => response.json())
        .then(() => context.dispatch("getUsers"));
    },

    async getProducts(context) {

      this.spinner = true
      const res = await axios
        .get(`${active}products`)
        .finally(() => {
          context.commit('setSpinner', false)
        })
      let {
        results,
        err
      } = await res.data;
      if (results) {
        context.commit('setProducts', results)
      } else {
        context.commit('setMessage', err)
      }
    },

    async getProduct(context) {
      const res = await axios
      .get(`${active}product/:id`)

      let {
        results, err
      } = await res.data;
      if (results) {
        context.commit('setProduct', results)
      }else {
        context.commit('setMessage', err)
      }

    },


    deleteProduct: async (context, id) => {
      fetch(`${active}product/` + id, {
        method: "DELETE",
      }).then(() => context.dispatch("getProducts"))
    },

    createProduct: async (context, product) => {
      fetch(`${active}product/`, {
          method: "POST",
          body: JSON.stringify(product),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
        .then((response) => response.json())
        .then(() => context.dispatch("getProducts"));
    },

    updateProduct: async (context, product) => {
      fetch(`${active}product/` + product.id, {
          method: "PUT",
          body: JSON.stringify(product),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
        .then((response) => response.json())
        .then(() => context.dispatch("getProducts"));
    },
  },
  modules: {}
})