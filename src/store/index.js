import { createStore} from 'vuex'
import axios from 'axios'
const active = "https://active8-eomp.onrender.com/"
export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    spinner: true,
    asc:true,
    message: null
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
    },
    sortProductsByPrice: (state) => {
      state.products.sort((a, b) => {
        return a.prodPrice - b.prodPrice;
      });
      if (!state.asc) {
        state.products.reverse();
      }
      state.asc = !state.asc
    },
    setFilteredProducts(state, { products, category }) {
      state.filteredProducts = products.filter(product => product.category === category)
    },
  },
  actions: {
    async registerUser(payload) {
      try {
        const response = await axios
        .post(`${active}register`, payload)
        payload('setUser', response.data)
        return response.data
      } catch (error) {
        console.log(error);
        throw error
      }
    },
    // register: async (context, payload) => {
    //   const {
    //     firstName,
    //     lastName,
    //     phoneNumber,
    //     email,
    //     userPass,
    //     gender,
    //     userRole,
    //     userImage,
    //     joinDate
    //   } = payload;
    //   fetch(`${active}register`, {
    //       method: "POST",
    //       body: JSON.stringify({
    //         firstName: firstName,
    //         lastName: lastName,
    //         phoneNumber: phoneNumber,
    //         email: email,
    //         userPass: userPass,
    //         gender: gender,
    //         userRole: userRole,
    //         userImage: userImage,
    //         joinDate: joinDate
    //       }),
    //       headers: {
    //         "Content-type": "application/json; charset=UTF-8"
    //       },
    //     })
    //     .then((res) => res.json())
    //     .then((json) => context.commit("setUser", json));
    // },

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

    async getUser(context) {
      const res = await axios
        .get(`${active}user/1`);
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

    async createUser(context, id) {
      const res = await axios
      .post(`${active}user/` + id)
      let {
        results, err
      } = await res.data;
      if (results) {
        context.commit('setUser', results)
      }else {
        context.commit('setMessage', err)
      }
    },

    async updateUser(context, id) {
      const res = await axios
      .put(`${active}user/` + id)
      let {
        results, err
      } = await res.data;
      if (results) {
        context.commit('setUser', results)
      }else {
        context.commit('setMessage', err)
      }
    },

    async deleteUser(context, id) {
      const res = await axios
      .delete(`${active}user/` + id)
      let {
        results, err
      } = await res.data;
      if (results) {
        context.commit('setUser', results)
      }else {
        context.commit('setMessage', err)
      }
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
      .get(`${active}product/1`)
      let {
        results, err
      } = await res.data;
      if (results) {
        context.commit('setProduct', results)
      }else {
        context.commit('setMessage', err)
      }
    },
    
    async createProduct(context, id) {
      const res = await axios
      .post(`${active}product/` + id)
      let {
        results, err
      } = await res.data;
      if (results) {
        context.commit('setProduct', results)
      }else {
        context.commit('setMessage', err)
      }
    },

    async updateProduct(context, id) {
      const res = await axios
      .put(`${active}product/` + id)
      let {
        results, err
      } = await res.data;
      if (results) {
        context.commit('setProduct', results)
      }else {
        context.commit('setMessage', err)
      }
    },
    async deleteProduct(context, id) {
      const res = await axios
      .delete(`${active}product/` + id)
      let {
        results, err
      } = await res.data;
      if (results) {
        context.commit('setProduct', results)
      }else {
        context.commit('setMessage', err)
      }
    },
  
  },
  modules: {}
})