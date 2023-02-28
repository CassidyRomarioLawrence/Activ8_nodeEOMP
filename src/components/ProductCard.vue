<template>
    <button @click="getProducts">Show Products</button>
        <div v-for="p in post" :key="p.id" >
            <img src={{ p.prodImage }} class="card-img-top" alt="...">
            <div class="card-body">
              <h5>{{p.category}}</h5>
              <p>{{p.prodInfo}}</p>
              <button type="submit">Show products</button>
            </div>
          </div>

</template>

<script>
export default {
    data() {
        return {
            results: []      
        };
    },
    computed: {
        products() {
            return this.$store.state.products;
        },
    },
    methods: {
        getProducts() {
            return this.$store.dispatch("setProducts", {
                category:this.category,
                prodName:this.prodName,
                prodInfo: this.prodInfo,
                prodPrice: this.prodPrice ,
                prodImage: this.prodImage 
            });
        },
    },
};
</script>

<style scoped>
    
</style>