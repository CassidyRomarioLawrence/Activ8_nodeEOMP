import { createStore } from 'vuex'


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
    register: async (context, payload) => {
      const { firstName, lastName, phoneNumber, email, userPass, gender, userRole, userImage, joinDate} = payload;
      fetch("", {
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
        `email=${email}&password=${userPass}`)
        const userData = await res.json();
        context.commit("setUser", userData[0])   
    }
  },
  modules: {
  }
})
