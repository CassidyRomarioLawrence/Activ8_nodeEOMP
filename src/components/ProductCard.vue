<template>
    <div class="space">
        <div class="dropdown">
            <button class="dropbtn">SHOP BY</button>
            <div class="dropdown-content">
                <button @click.prevent="getProducts">All Products</button>
                <a href="#">Men</a>
                <a href="#">Women</a>
                <a href="#">Accessories</a>
            </div>
        </div>
    </div>
    <div v-if="isLoading">
        <SpinnerComponent />
    </div>
    <div v-else>
        <div v-if="products" class="row" style="gap: 5rem; padding: 30px;justify-content:center">
            <div class="card" v-for="product in products" :key="product.id"
                style="width: 18rem;background-color: transparent">
                <img :src="product.prodImage" class="card-img-top">
                <div class="card-body">
                    <h4 class="text-light">{{ product.category }}</h4>
                    <h5 class="text-light">{{ product.prodName }}</h5>
                    <h6 class="text-light">{{ product.prodInfo }}</h6>
                    <p class="text-light">R{{ product.prodPrice }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import SpinnerComponent from '@/components/SpinnerComponent.vue';
import axios from 'axios'

export default {
    components: {
        SpinnerComponent
    },
    data() {
        return {
            isLoading: false,
            products: null,
        }
    },
    methods: {
        async getProducts() {
            this.isLoading = true

            let res = await axios
                .get('https://activ8-nodeeomp.onrender.com/products')
                .catch(error => {
                    console.log(error)
                })
                .finally(() => {
                    this.isLoading = false
                })
            let { results } = await res.data;
            this.products = results;

        }
    }
};
</script>

<style scoped>

.space {
    padding: 70px;
}
.dropbtn {
    background-color: rgb(255, 200, 99);
    color: black;
    padding: 16px;
    font-size: 16px;
    border: none;
    min-width: 160px;
    text-align: center;
    height: auto;
}

button {
    background-color: transparent;
    color: white;
    padding-left: 14px;
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
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
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