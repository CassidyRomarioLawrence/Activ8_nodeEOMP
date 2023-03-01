import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    Spinner: true
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
    },
    setSpinner(state, value) {
      state.product = value
    }
  },
  actions: {
    register: async (context, payload) => {
      const { firstName, lastName, phoneNumber, email, userPass, gender, userRole, userImage, joinDate} = payload;
      fetch("https://activ8-nodeeomp.onrender.com/register", {
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
      const { email, userPass} =payload;

      const res = await fetch(
        `https://activ8-nodeeomp.onrender.com/login?email=${email}&password=${userPass}`)
        const userData = await res.json();
        context.commit("setUser", userData[0])   
    },

    async getPosts() {
      let res = await axios.get('https://activ8-nodeeomp.onrender.com/products');
      let {results} = await res.data;
      this.products = results;
  },

    getProduct: async (context, id) => {
      fetch("https://activ8-nodeeomp.onrender.com/product/" + id)
      .then((res) => res.json())
      .then((product) => context.commit("setProduct", product))
    },

    deleteProduct: async (context, id) => {
      fetch("https://activ8-nodeeomp.onrender.com/product/" + id, {
        method: "DELETE",
      }).then(() => context.dispatch("getProducts"))
    },

    createProduct: async (context, product) => {
      fetch("https://activ8-nodeeomp.onrender.com/product/", {
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
      fetch("https://activ8-nodeeomp.onrender.com/product/" + product.id, {
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
  modules: {
  }
})
