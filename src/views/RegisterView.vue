<template>
    <body>
      <NavbarComponent/>
      <section id="login">
      <section class="form my-4 mx-5">
        <div class="container-fluid">
          <div class="row g-0">
            <div class="col-sm-6">
              <img src="https://i.postimg.cc/DwQmhRNh/activ8.png" class="img-fluid" alt="">
          </div>
          <div class="col-sm-6 px-5 pt-5" style="background: black;">
            <img src="https://i.postimg.cc/13vwVPb9/transparent.png" class="img-fluid" style="height:auto; width:auto;" alt="">
            <center>
            <h4>Create Account</h4>
            <form @submit.prevent="registerUser">
              <div class="form-row">
                <div class="col-sm-6">
                  <input type="text" placeholder="Firstname" v-model="firstName" class="form-control my-3" required>
                </div>
              </div>
              <div class="form-row">
                <div class="col-sm-6">
                  <input type="text" placeholder="Lastname" v-model="lastName" class="form-control my-3" required>
                </div>
              </div>
              <div class="form-row">
                <div class="col-sm-6">
                  <input type="number" placeholder="Phone number" v-model="phoneNumber" class="form-control my-3" required>
                </div>
              </div>
              <div class="form-row">
                <div class="col-sm-6">
                  <input type="email" placeholder="Email Address" v-model="email" class="form-control my-3" required>
                </div>
              </div>
              <div class="form-row">
                <div class="col-sm-6">
                  <input type="password" placeholder="******" v-model="userPass" class="form-control" required>
                </div>
              </div>
              <div class="form-row">
                <div class="col-sm-6">
                  <input type="text" placeholder="Gender" v-model="gender" class="form-control my-3" required>
                </div>
              </div>
              <div class="form-row">
                <div class="col-sm-6">
                  <input type="text" placeholder="" v-model="userImage" class="form-control my-3"  required>
                </div>
              </div>
              <div class="form-row">
                <div class="col-sm-6">
                  <input type="date" placeholder="Join date" v-model="joinDate" class="form-control my-3" required>
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
    <FooterComponent/>
    </body>
  </template>
  <script>

import NavbarComponent from '@/components/NavbarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import { mapActions } from 'vuex';

  export default {
    name: 'LoginView',
    components: { NavbarComponent, FooterComponent },

    data() {
      return {
        firstName :'',
        lastName: '',
        phoneNumber: '',
        email: '',
        userPass: '',
        gender: '',
        userRole: '',
        userImage: 'https://i.postimg.cc/Gt87rd3h/team.jpg',
        joinDate: '',
      }
    },
    ...mapActions(['registerUser']),
    async registerUser() {
      try {
        await this.registerUser({
          firstName: this.firstName,
          lastName: this.lastName,
          phoneNumber: this.phoneNumber,
          email: this.email,
          userPass: this.userPass,
          gender: this.gender,
          userRole: this.userRole,
          userImage: this.userImage,
          joinDate: this.joinDate
        })
      } catch (error) {
        console.log(error);
      }
    }
    // computed: {
    //   user(){
    //     return this.$store.dispatch("register", {
    //       firstName:this.firstName,
    //       lastName:this.lastName,
    //       phoneNumber:this.phoneNumber,
    //       email: this.email,
    //       userPass: this.userPass,
    //       gender: this.gender,
    //       userRole: this.userRole,
    //       joinDate: this.joinDate
    //     })
    //   }
    // }
    
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
      background-color: rgb(224, 215, 161);;
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