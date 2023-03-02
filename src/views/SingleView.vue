<template>
    <div>
        <NavbarComponent />
        <section id="single">
            <table class="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Category</th>
                        <th>Name</th>
                        <th>Information</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products" :key="product.id">
                        <td data-label="productID">{{ product.id }}</td>
                        <td data-label="category">{{ product.category }}</td>
                        <td data-label="name">{{ product.prodName }}</td>
                        <td data-label="information">{{ product.prodInfo }}</td>
                        <td data-label="price">R{{ product.prodPrice }}</td>
                        <td data-label="Quantity">{{ product.prodQuantity }}</td>
                        <td data-label="Image"><img :src="product.prodImage" class="img-fluid" style="height:12vh" alt="">
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
        <FooterComponent />

    </div>
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue';
import NavbarComponent from '@/components/NavbarComponent.vue';

export default {
    components: { NavbarComponent, FooterComponent },
}
</script>
<style scoped>
#single {
    height: 100vh;
    background-image: linear-gradient(black, rgba(0, 0, 0, 0.7));
}

.table {
    width: 100%;
  }
  
  .table td,
  .table th {
    border: 1px solid #ddd;
    text-align: center;
    font-size: 16px;
  }
  
  .table th {
    background-color: black;
    color: rgb(255, 200, 99);
  }
  
  .table tbody tr {
    background-color: black;
    color: white;
  }
  
  /*responsive*/
  @media(max-width: 300px) {
  
    .table {
      height: 100%;
      overflow-y: auto;
    }
  
    .table thead {
      display: none;
    }
  
    .table,
    .table tbody,
    .table tr,
    .table td {
      display: block;
      width: 100%;
    }
  
    .table tr {
      margin-bottom: 15px;
    }
  
    .table td {
      text-align: right;
      padding-left: 50%;
      text-align: right;
      position: relative;
      width: 100%;
    }
  
    .table td::before {
      content: attr(data-label);
      position: absolute;
      left: 0;
      width: 50%;
      padding-left: 15px;
      font-size: 15px;
      font-weight: bold;
      text-align: left;
    }
  }
</style>