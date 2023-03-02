<template>
    <div>
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#updateProductModal">
            <i class="fa-solid fa-pen-to-square"></i>
        </button>

        <!-- Modal -->
        <div class="modal fade" id="updateProductModal" tabindex="-1" aria-labelledby="updateProductModal"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content bg-dark">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="updateProductModal">Modal title</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <input type="text" placeholder="ID" v-model="id" class="form-control my-3" required>
                        <input type="text" placeholder="category" v-model="category" class="form-control my-3" required>
                        <input type="text" placeholder="product name" v-model="prodName" class="form-control my-3" required>
                        <input type="text" placeholder="product information" v-model="prodInfo" class="form-control my-3"
                            required>
                        <input type="text" placeholder="product price" v-model="prodPrice" class="form-control my-3"
                            required>
                        <input type="text" placeholder="product quantity" v-model="prodQuantity" class="form-control my-3"
                            required>
                        <input type="text" placeholder="" v-model="prodImage" class="form-control my-3" required>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary"> Submit New Product</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: '',
            category: '',
            prodName: '',
            prodInfo: '',
            prodPrice: '',
            prodQuantity: '',
            prodImage: 'https://i.postimg.cc/fbwF2gks/gymbag.png',
        }
    },
    computed: {
        computed: {
        product() {
            return this.$store.dispatch("updateProduct", {
                idd: this.id,
                category: this.category,
                prodName: this.prodName,
                prodInfo: this.prodInfo,
                prodPrice: this.prodPrice,
                prodQuantity: this.prodQuantity,
                prodImage: this.prodImage
            })
        }
    }
    }

}

</script>

<style scoped></style>