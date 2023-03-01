<template>
    <button @click.prevent="getProducts">Load Posts</button>
    <div class="row" style="gap: 5rem; padding: 30px;justify-content:center">
        <div class="card" v-for="product in products" :key="product.id" style="width: 18rem;background-color: transparent">
            <img :src="product.prodImage" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="text-light">{{ product.category }}</h5>
                <p class="text-light">{{ product.prodName }}</p>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    See More
                </button>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>{{ product.prodInfo }}</p>
                                <p>R{{ product.prodPrice }}</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>


import axios from 'axios'

export default {
    data() {
        return {
            products: null,
        }
    },
    methods: {
        async getProducts() {
            let res = await axios.get('https://activ8-nodeeomp.onrender.com/products');
            let { results } = await res.data;
            this.products = results;
        }
    },
    mounted() {
        this.getProducts()
    }
};
</script>

<style scoped></style>