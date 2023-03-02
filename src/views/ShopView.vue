<template>
  <body>
    <NavbarComponent />
    <section id="shopping-banner">
      <div class="shopping">
        <div class="container-shopping">
          <img class="shop-img" src="https://i.postimg.cc/pXJ8hWSK/qwerty.png" alt="shopping-page">
          <div class="content">
            <h2 class="shop-text">Shop now with our latest products on display</h2>
          </div>
        </div>
      </div>
    </section>
    <section id="all-products">
  
        <SpinnerComponent v-if="isLoading" />
    <div v-else>
      <ProductCard />
    </div>
    </section>
    <FooterComponent />
  </body>
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue';
import NavbarComponent from '@/components/NavbarComponent.vue';
import ProductCard from '@/components/ProductCard.vue';
import SpinnerComponent from '@/components/SpinnerComponent.vue';





export default {
  components: { NavbarComponent, FooterComponent, ProductCard , SpinnerComponent},

  data() {
    return {
      isLoading: true
    }
  },
  created() {
    setTimeout(() => {
     this.isLoading = false; 
    }, 5000);
  }

}

</script>
<style scoped>
#all-products {
  height: auto;
  background-image: linear-gradient(black, rgba(65, 65, 65, 0.7));
}

.shop-img {
  width: 100%;
  height: auto;
  margin: 0;
}

.shopping {
  padding: 0;
  width: 100%;
  background: black;
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

</style>