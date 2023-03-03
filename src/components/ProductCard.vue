<template>
    <div class="space">
        <button class="btn btn-info" @click="sortbyPrice">Sort by Price <i class="fa-solid fa-arrow-up"></i> <i class="fa-solid fa-arrow-down"></i></button>
        <!-- <input type="text" v-model="searching" placeholder="Search for products" style="height:40px"> -->
    </div>

        <div v-if="products" class="row" style="gap: 5rem; padding: 30px;justify-content:center">
            <div class="card" v-for="product in Searching" :key="product">
                <img :src="product.prodImage" class="img-fluid">
                <div class="card-body">
                    <h4 class="text-light">{{ product.category }}</h4>
                    <h5 class="text-light">{{ product.prodName }}</h5>
                    <h6 class="text-light">{{ product.prodInfo }}</h6>
                    <p class="text-light">R{{ product.prodPrice }}</p>
                    <a href="/single" type="button" class="btn btn-info">See now</a>
                </div>
            </div>
        </div>
    
</template>

<script>


import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex';
export default {
    setup() {
        const store = useStore()
        store.dispatch("getProducts")
        const products = computed(() => store.state.products)

        return {
            products
        }

    },
    data() {
        return {
            searching: ""
        }
    },
    computed: {
        filteredProducts: function (arg) {
            return this.products.filter((item) =>
                item.category.toLowerCase() === arg.toLowerCase())
        },

        Searching() {
            if (this.searching.trim().length > 0) {
                return this.products.filter((input) => input.category.toLowerCase).includes(this.search.trim().toLowerCase())
            }
            return this.products
        }
    },
  methods: {
    sortbyPrice(){
      this.$store.commit("sortProductsByPrice");
    },
    sortbyCategory(){
      this.$store.commit("setFilteredProducts");
    }
  }

};
</script>

<style scoped>
.space {
    padding: 70px;
}

.card {
    width: 18rem;
    padding: 0;
    background-color: transparent;
    transition: .5s ease;
}

.card:hover {
    box-shadow: 0 0 0 10px #000000;
    transition: .5s ease;
}

.drop-button {
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

.dropdown:hover .drop-button {
    background-color: rgba(53, 52, 52, 0.9);
    color: white;
}
</style>