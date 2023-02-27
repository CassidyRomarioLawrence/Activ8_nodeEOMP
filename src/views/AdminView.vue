<template>
    <body>
        <NavbarComponent/>  
        <div class="shopping">
            <div class="container-shopping">
              <img class="shop-img" src="https://i.postimg.cc/FFg04jbP/admin-img.png" alt="shopping-page">
              <div class="content">
                <p class="shop-text">Shop now with our latest products on display</p>
              </div>
          </div>
          </div>
        <FooterComponent/>
    </body>
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue';
import NavbarComponent from '@/components/NavbarComponent.vue';

export default {
    components: { NavbarComponent, FooterComponent }
}
</script>
<style scoped>
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
    backdrop-filter: blur(5px);
    color: #f1f1f1; 
    width: 100%; 
    padding: 20px;
    margin: 0;
    height: 100%;
  }
  .shop-text {
    font-size: 30px;
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
</style>