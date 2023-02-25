<template>
    <body>
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
            <form action="">
              <div class="form-row">
                <div class="col-sm-6">
                  <input type="text" placeholder="Firstname" class="form-control my-3" required>
                </div>
              </div>
              <div class="form-row">
                <div class="col-sm-6">
                  <input type="text" placeholder="Lastname" class="form-control my-3" required>
                </div>
              </div>
              <div class="form-row">
                <div class="col-sm-6">
                  <input type="number" placeholder="Phone number" class="form-control my-3" required>
                </div>
              </div>
              <div class="form-row">
                <div class="col-sm-6">
                  <input type="email" placeholder="Email Address" class="form-control my-3" required>
                </div>
              </div>
              <div class="form-row">
                <div class="col-sm-6">
                  <input type="password" placeholder="******" class="form-control" required>
                </div>
              </div>
              <div class="form-row">
                <div class="col-sm-6">
                  <button type="button" class="btn1 mt-3 mb-5">Login</button>
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
    </body>
  </template>
  <script>
  export default {
    name: 'LoginView'
    
  }
  </script>
  
  <style scoped>
    body {
      background: rgba(0, 0, 0, 0.7);
      height: 100vh;
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