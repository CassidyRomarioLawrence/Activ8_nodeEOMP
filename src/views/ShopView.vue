<template>
    <body>
        <NavbarComponent/>
        <section id="shopping-banner">
            <div class="shopping">
                <div class="container-shopping">
                  <img class="shop-img" src="https://i.postimg.cc/pXJ8hWSK/qwerty.png" alt="shopping-page">
                  <div class="content">
                    <h2 class="shop-text">Shop now with our latest products on display</h2>
                    <center>
                    <div class="dropdown">
                        <button class="dropbtn">SHOP BY</button>
                        <div class="dropdown-content">
                          <a href="#">All products</a>
                          <a href="#">Men</a>
                          <a href="#">Women</a>
                          <a href="#">Accessories</a>
                        </div>
                      </div>
                    </center>
                  </div>
              </div>
              </div>
        </section>
        <section id="all-products">
          <h2>All Products</h2>
          <ProductCard/>
        </section>
        <FooterComponent/>
    </body>
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue';
import NavbarComponent from '@/components/NavbarComponent.vue';
import ProductCard from '@/components/ProductCard.vue';





export default {
    components: { NavbarComponent, FooterComponent, ProductCard },
    
}

</script>
<style scoped>
 
#all-products {
  height: auto;
  background-image: linear-gradient( black, rgba(0, 0, 0, 0.7));
}

h2 {
    text-align: center;
}

.shop-img {
    width:100%;
    height:88vh;
    margin:0;
  }
 
  .shopping {
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
  .container-shopping {
    position: relative;
    width: 100%;
    margin: 0 auto; 
  }
  .container-shopping .content {
    position: absolute; 
    bottom: 0;
    backdrop-filter: blur(4px); 
    width: 100%; 
    padding: 20px;
    margin: 0;
    height: 100%;
  }
  .shop-text {
    font-family: 'Tilt Neon', cursive;
    text-align: center;
    margin-top: 100px;
    font-size: 40px;
    color: white;
    text-shadow: 2px 2px 4px #000000;
  }

  .dropbtn {
    background-color: rgb(255, 200, 99);
    color: black;
    padding: 16px;
    font-size: 16px;
    border: none;
    min-width: 160px;
    text-align: center;
  }
  
  .dropdown {
    position: relative;
    display: inline-block;
    height: auto;
  }
  
  .dropdown-content {
    display: none;
    position: absolute;
    color: white;
    background-color: black;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }
  
  .dropdown-content a {
    color: white;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  
  .dropdown-content a:hover {
    background-color: rgba(53, 52, 52, 0.9);
    color: white;
}
  
  .dropdown:hover .dropdown-content {
    display: block;
    color: white;
}
  
  .dropdown:hover .dropbtn {
    background-color: rgba(53, 52, 52, 0.9);
    color: white;
}
</style>