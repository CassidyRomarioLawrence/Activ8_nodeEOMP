<template>
  <body>
    <NavbarComponent />
    <section id="login">
      <section class="form my-4 mx-5">
        <div class="container-fluid">
          <div class="row g-0">
            <div class="col-sm-6">
              <img src="https://i.postimg.cc/DwQmhRNh/activ8.png" class="img-fluid" alt="">
            </div>
            <div class="col-sm-6 px-5 pt-5" style="background: black;">
              <img src="https://i.postimg.cc/13vwVPb9/transparent.png" class="img-fluid" style="height:auto; width:auto;"
                alt="">
              <center>
                <h4>Sign into your account</h4>
                <form @submit.prevent="login">
                  <div class="form-row">
                    <div class="col-sm-6">
                      <input type="email" v-model="email" placeholder="Email Address" class="form-control my-3" required>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col-sm-6">
                      <input type="password" v-model="userPass" placeholder="******" class="form-control" required>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col-sm-6">
                      <button type="submit" class="btn1 mt-3 mb-5">Login</button>
                    </div>
                  </div>
                  <p>Forgot your password <ForgetPassword/></p>
                  <p>Don't have an account? <a href="/register">Register here</a></p>
                </form>
              </center>
            </div>
          </div>
        </div>
      </section>
    </section>
    <FooterComponent />
  </body>
</template>
<script>

import NavbarComponent from '@/components/NavbarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import axios from 'axios'
import ForgetPassword from '@/components/ForgetPassword.vue';

export default {
  name: 'LoginView',
  components: { NavbarComponent, FooterComponent, ForgetPassword },

  data() {
    return {
      email: '',
      userPass: '',
    }
  },
  methods: {
    login() {
      axios
        .post('https://active8-eomp.onrender.com/login', {
          email: this.email,
          userPass: this.userPass
        })
        .then(response => {
          localStorage.setItem('token', response.data.token);
        })
        .catch(error => {
          console.log(error);
        })
    }
  }
}


</script>
  
<style scoped>
body {
  background: black;
  height: auto;
}

h4 {
  font-family: 'Poppins', sans-serif;
  color: rgb(224, 215, 161);
  font-weight: bold;
}

.container-fluid {
  margin-top: 80px;
}

.row {
  background: white;
  box-shadow: 0 20px 30px rgb(224, 215, 161);
}

img {
  height: 100%;
  width: 100%;
}

.btn1 {
  border: none;
  outline: none;
  height: 50px;
  width: 100%;
  background-color: rgb(224, 215, 161);
  ;
  color: black;
  border-radius: 4px;
  font-weight: bold;
}

.btn1:hover {
  background: transparent;
  border: 1px solid white;
  color: white;
}
</style>