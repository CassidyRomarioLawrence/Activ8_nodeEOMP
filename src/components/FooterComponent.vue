<template>
    <body>
        <footer>
            <div class="container text-center">
                <div class="row">
                  <div class="col-sm-3">
                    <h3>Quick links</h3>
                    <ul>
                        <li><a href="/#home">Home</a></li>
                        <li><a href="/#about">About</a></li>
                        <li><a href="/shop">Shop</a></li>
                        <li><a href="/admin">Admin</a></li>
                        <li><a href="/#contact">Contact</a></li>
                    </ul>
                  </div>
                  <div class="col-sm-3">
                      <h3>More</h3>
                      <ul>
                        <li><i class="fa-solid fa-location-dot text-light"></i> : Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                        <li><i class="fa-solid fa-phone text-light"></i> : 000-000-0000</li>
                        <li><a href=""><i class="fa-brands fa-instagram text-light"></i> : Activ8</a></li>
                      </ul>
                  </div>
                  <div class="col-sm-3">
                    <h3>Just for show so long</h3>
                  </div>
                  <div class="col-sm-3">
                   <h6> &copy;Copyright | 2023 All Rights Reserved</h6>
                  </div>
                </div>
              </div>
        </footer>
    </body>
  </template>
  <script>
  export default {
    
  }
  </script>
  <style scoped>
    footer {
        padding-top: 30px;
        background: black;
    }
  
    ul {
        list-style: none;
    }
  
    ul a {
         text-decoration: none;
         color: rgb(224, 215, 161);
         ;
    }
  
    h3 {
        font-family: 'Poppins', sans-serif;
        color: rgb(224, 215, 161);
        font-weight: bold;
      }
  
    h6 {
        margin-top: 80px;
        font-family: 'Poppins', sans-serif;
        color: rgb(224, 215, 161);
        font-weight: bold;
      }
  
      .container {
        border: none;
      }
  </style>