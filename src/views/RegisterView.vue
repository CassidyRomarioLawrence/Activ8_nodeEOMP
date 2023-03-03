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
                <h4>Create Account</h4>
                <form @submit.prevent="registerUser">
                  <div class="form-row">
                    <div class="col-sm-6">
                      <input type="text" placeholder="Firstname" v-model="payload.firstName" class="form-control my-3" required>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col-sm-6">
                      <input type="text" placeholder="Lastname" v-model="payload.lastName" class="form-control my-3" required>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col-sm-6">
                      <input type="number" placeholder="Phone number" v-model="payload.phoneNumber" class="form-control my-3"
                        required>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col-sm-6">
                      <input type="email" placeholder="Email Address" v-model="payload.email" class="form-control my-3" required>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col-sm-6">
                      <input type="password" placeholder="******" v-model="payload.userPass" class="form-control" required>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col-sm-6">
                      <input type="text" placeholder="Gender" v-model="payload.gender" class="form-control my-3" required>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col-sm-6">
                      <input type="text" placeholder="" v-model="payload.userImage" class="form-control my-3" required>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col-sm-6">
                      <input type="date" placeholder="Join date" v-model="payload.joinDate" class="form-control my-3" required>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col-sm-6">
                      <button type="button" class="btn1 mt-3 mb-5">Register</button>
                    </div>
                  </div>
                  <p>Already have an account? <a href="/login">Login here</a></p>
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
import FooterComponent from '@/components/FooterComponent.vue'
import {computed} from '@vue/runtime-core';
import { useStore  } from 'vuex';
export default {
  name: 'LoginView',
  components: { NavbarComponent, FooterComponent },
  setup() {
    const payload = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      userPass: '',
      gender: '',
      userRole: '',
      userImage: 'https://i.postimg.cc/Gt87rd3h/team.jpg',
      joinDate: '',
    };
    const store = useStore();
        const signUp = ()=> {
            store.dispatch("register", payload);
            // Refresh
            store.dispatch("fetchUsers");
        }
        const userMsg = 
        computed( ()=>store.state.message )
        return {
          payload,
          userMsg,
          signUp
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
  margin-top: 100px;
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
}</style>