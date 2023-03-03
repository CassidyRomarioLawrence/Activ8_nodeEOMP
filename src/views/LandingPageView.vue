<template>
    <body>
      <!-- Home start -->
      <section id="home"> 
        <NavbarComponent/>
        <div class="landing">
            <div class="container-land">
              <img class="home-img" src="https://i.postimg.cc/YCL1y5mx/design2.jpg" alt="LandingPage">
              <div class="content">
                <img src="https://i.postimg.cc/25NW2htS/transparent.png" style="height:20vh" alt="">
                <p class="home-text">Active 8 supports our local fitness enthusiasts by outfitting them in creatively designed fitness apparel.</p>
                <button class="learn"><a href="#about">Learn More</a></button>
              </div>
          </div>
          </div>
      </section>
      <!-- Home end -->
  
      <!-- About Start -->
      <section id="about">
        <div class="container-about">
            <div class="row align-items-start">
              <div class="col-sm-6 text-align-center" style="padding-top: 150px;">
                <h1 class="about-us">Our mission is to provide fitness clothes that inspire both men and women to look their best.</h1>
                <center><button><a style="text-decoration: none;color:black;" href="#about">About Us</a></button></center>
              </div>
              <div class="col-lg-6">
                <h2 class="about-heading"><img src="https://i.postimg.cc/13vwVPb9/transparent.png" style="height:5rem;margin-top: 10px" alt=""> provides all types of fitness outfit and equipment. They include :</h2>
                <div class="container-info">
                    <div class="row align-items-start">
                      <div class="col-sm-4">
                        <h4 class="items">Tops</h4>
                        <p class="description">Our fitness tops are meticulously designed to provide comfort and versatility, allowing you to adorn them for both high and low impact workouts</p>
                      </div>
                      <div class="col-sm-4">
                        <h4 class="items">Bottoms</h4>
                        <p class="description">Our bottoms collection features some, simple, stylish, and functional bottoms. From shorts to joggers sweatpants, you won't miss something that works for you</p>
                      </div>
                      <div class="col-sm-4">
                        <h4 class="items">Accessories</h4>
                        <p class="description">Our accessories varies from all categories from cups, bags, gym equipment.</p>
                      </div>
                    </div>
                    <button><a href="#dproducts">See Our Offering</a></button>
                  </div>
              </div>
            </div>
          </div>        
        </section>
        <section id="team">
          <h1 class="about-us">About Our Team</h1>
          <div class="container-team text-center">
            <div class="row align-items-end">
              <div class="col-sm-6">
                <div class="card-team">
                    <img src="https://i.postimg.cc/Gt87rd3h/team.jpg" alt="John" style="width:100%">
                    <h3 class="name">Cassidy Lawrence</h3>
                    <p class="title">Backend Developer / Co-Founder</p>
                    <p class="institute">Life Choices Academy</p>
                    <div style="font-size: 30px; gap:5rem;">
                      <a href="https://github.com/CassidyRomarioLawrence" target="_blank"><i class="fa-brands fa-github text-light" style="padding:10px;"></i></a>
                      <a href="https://www.linkedin.com/in/cassidy-romario-lawrence-b671b21b8/" target="_blank"><i class="fa-brands fa-linkedin text-light" style="padding:10px;"></i></a>  
                    </div>
                    <p><button>Get in touch <i class="fa-sharp fa-solid fa-hand-point-up"></i></button></p>
                  </div>
              </div>
              <div class="col-sm-6">
                <div class="card-team">
                  <img src="https://i.postimg.cc/Gt87rd3h/team.jpg" alt="John" style="width:100%">
                  <h3 class="name">Meezaan Davids</h3>
                  <p class="title">Frontend Developer / Co-Founder</p>
                  <p class="institute">Life Choices Academy</p>
                  <div style="font-size: 30px; gap:5rem; background">
                    <a href="https://github.com/MeezaanD?tab=repositories" target="_blank"><i class="fa-brands fa-github text-light" style="padding:10px;"></i></a> 
                    <a href="https://www.linkedin.com/in/meezaan-davids-4a7aa8265/" target="_blank"><i class="fa-brands fa-linkedin text-light" style="padding:10px;"></i></a>  
                  </div>
                  <p><button>Get in touch <i class="fa-sharp fa-solid fa-hand-point-up"></i></button></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      <!-- About End -->
  
      <!-- Products Start -->
      <section id="dproducts">
        <h2 class="shop">Shop now with our latest releases</h2>
        <h4 class="some-text">These are some of our latest products on issue</h4>
        <div class="row align-items-end g-4 p-5">
            <div class="col-sm-4">
              <div class="card-product">
                <img src="https://i.postimg.cc/76FX18DV/men-sweater.png" class="img-fluid" alt="...">
                <div class="card-body">
                  <h6 class="latest">Latest Men Clothing</h6>
                  <center><button class="shop-now"><a href="/shop">Shop Now <i class="fa-solid fa-bag-shopping"></i></a></button></center>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card-product">
                <img src="https://i.postimg.cc/KvzCDT6p/women-sweater.png" class="img-fluid" alt="...">
                <div class="card-body">
                  <h6 class="latest">Latest Women Clothing</h6>
                  <center><button class="shop-now"><a href="/shop">Shop Now <i class="fa-solid fa-bag-shopping"></i></a></button></center>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card-product">
                <img src="https://i.postimg.cc/fbwF2gks/gymbag.png" class="img-fluid" alt="...">
                <div class="card-body">
                  <h6 class="latest">Latest Accessories</h6>
                  <center><button class="shop-now"><a href="/shop">Shop Now <i class="fa-solid fa-bag-shopping"></i></a></button></center>
                </div>
              </div>
            </div>
          </div>
    </section>
      <!-- Products End -->
  
      <!-- Contact Start -->
      <section id="contact">
        <h2 class="contact-title">Get in contact with us</h2>
        <div class="container text-center">
            <div class="row">
              <div class="col-sm-6">
                <img src="https://i.postimg.cc/13vwVPb9/transparent.png" class="img-fluid" style="width:100%;" alt="contact">
              </div>
              <div class="col-sm-6">
                <form action="https://formspree.io/f/mbjbywlp" method="post">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" required placeholder="Enter your name">
                    <label for="Surname">Surname</label>
                    <input type="text" id="surname" name="surname" required placeholder="Enter your surname">
                    <label for="email">Your Email address</label>
                    <input type="text" id="email" name="email" required placeholder="Enter your email">
                    <label for="lname">Your Contact Number </label>
                    <input type="text" id="number" name="number" required placeholder="Enter your number">
                    <label for="subject">Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.." style="height:100px"></textarea>
                    <center><input type="submit" value="Submit"></center>
                  </form>
              </div>
            </div>
          </div>
    </section>
      <!-- Contact End -->
      <FooterComponent/>
    
    </body>
  </template>
  
  <script>
  
  import NavbarComponent from '@/components/NavbarComponent.vue'
  import FooterComponent from '@/components/FooterComponent.vue'
  
  export default {
    name: 'LandingPageView',
    components: { NavbarComponent, FooterComponent }
  }
  </script>
  
  <style scoped>

  .home-img {
    width:100%;
    height:88vh;
    margin:0;
  }
 
  .landing {
    padding: 0;
    width: 100%;
    background:black;
    height: auto;
    overflow: hidden;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
   
  }
  .container-land {
    position: relative;
    width: 100%;
    margin: 0 auto; 
  }
  .container-land .content {
    position: absolute; 
    bottom: 0; 
    background: rgb(0, 0, 0); 
    background: rgba(0, 0, 0, 0.5); 
    backdrop-filter: blur(7px);
    color: #f1f1f1; 
    width: 100%; 
    padding: 20px;
    margin: 0;
    height: 100%;
  }
  .home-text {
    font-weight: 700;
    text-align: center;
    font-size: 40px;
    font-family: Hack, sans-serif;
    text-transform: uppercase;
    background: linear-gradient(90deg, rgb(255, 200, 99), white);
    letter-spacing: 5px;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-repeat: no-repeat;
    background-size: 100%;
    animation: shine 15s linear infinite;
    position: relative;
  }
  
  .learn {
    border: none;
    padding: 10px;
    background: rgb(255, 200, 99);
    color: black;
    text-decoration: none;
  }
  
  .learn a {
    text-decoration: none;
    color: black;
  }
  
  /*---------------------------------------------------------------------*/
  
  #about {
    height: 100%;
    background-image: linear-gradient( rgba(0, 0, 0, 0.7), black);
    padding: 50px;
    margin: 0;
  }
  
  #team {
  background: black;
  }
  .container-about {
    padding-bottom: 50px;
  }
  
  .container-team {
    width: 100%;
    padding: 0;
  }
  
  .about-us {
    text-align: center;
    font-family: 'Poppins', sans-serif;
    color: rgb(224, 215, 161);
    font-weight: bold;
  }
  
  .about-heading {
    text-align: center;
    padding: 20px;
    font-family: 'Poppins', sans-serif;
    color: rgb(224, 215, 161);
    font-size: 20px;
  }
  
  .name {
  padding-top: 20px;
  color: rgb(224, 215, 161);
  }
  
  .items {
    font-size: 30px;
    color: beige;
  }
  
  .title, .description, .institute {
    color: rgb(224, 215, 161);
  }
  
  button {
    text-align: center;
    border: none;
    padding: 10px;
    background: rgb(224, 215, 161);
    color: black;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
  }
  
  button:hover {
    background: transparent;
    color: white;
    border: 1px solid white;
  }
  
  button a {
  text-decoration: none;
  }
  
  .card-team {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 300px;
    margin: auto;
    text-align: center;
    font-family: arial;
    background: black;
    padding: 20px;
  }
  
  i {
    height:20px
  }
  
  /*---------------------------------------------------------------------*/
  
  #dproducts {
    background-image: linear-gradient( black,rgba(0, 0, 0, 0.7));
  }
  
  .shop-now {
    text-align: center;
    border: none;
    padding: 10px;
    margin-bottom: 30px;
    background: rgb(224, 215, 161);
    color: black;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
  }
  
  .shop-now:hover {
    background: transparent;
    color: white;
    border: 1px solid white;
  }
  
  .shop-now a {
    text-decoration: none;
    color: black;
  }
  .shop {
    text-align: center;
    font-family: 'Poppins', sans-serif;
    color: rgb(224, 215, 161);
    font-size: 50px;
    padding: 30px;
  }
  
  .some-text {
    text-align: center;
    font-family: 'Poppins', sans-serif;
    color: rgb(224, 215, 161);
  }
  
  .latest {
    text-align: center;
    font-family: 'Tilt Neon', cursive;
    color: rgb(224, 215, 161);
    font-size: 30px;
  }
  
  .card-product {
    background: transparent;
    box-shadow: 0 20px 30px rgba(0,0,0,0.2);
    backdrop-filter: blur(10px);
    min-height: 20vh;
    height: 100%;
    border-radius: 0;
  }
  
  /*---------------------------------------------------------------------*/
  
  #contact {
    background-image: linear-gradient( rgba(0, 0, 0, 0.7),black);
  }
  
  .contact-title {
    text-align: center;
    padding: 20px;
    font-family: 'Poppins', sans-serif;
    color: rgb(224, 215, 161);
    font-size: 40px;
  }
  
  label {
    font-family: 'Poppins', sans-serif;
    color: rgb(224, 215, 161);
    font-weight: bold;
    font-size: 20px;
  }
  
  input[type=text], select, textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
  }
  
  input[type=submit] {
    background-color: rgb(224, 215, 161);
    color: black;
    padding: 12px 20px;
    border: 1px solid white;
    cursor: pointer;
  }
  
  input[type=submit]:hover {
    background-color: transparent;
    color: white;
    border: 1px solid white;
  }
  
  img {
    margin-top: 80px;
  }
  </style>
  