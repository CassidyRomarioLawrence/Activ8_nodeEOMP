<template>
  <body>
    <NavbarComponent />
    <div class="shopping">
      <div class="container-shopping">
        <div class="content">
          <h2 class="user-crud">USER CRUD</h2>
          <AddUser />
          <table class="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Image</th>
                <th>Gender</th>
                <th>Role</th>
                <th>Join Date</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>

              <tr v-for="user in users" :key="user.id">
                <td data-label="ID">{{ user.userId }}</td>
                <td data-label="FirstName">{{ user.firstName }}</td>
                <td data-label="LastName">{{ user.lastName }}</td>
                <td data-label="Phone">{{ user.phoneNumber }}</td>
                <td data-label="Email">{{ user.email }}</td>
                <td data-label="Image"><img :src="user.userImage" class="img-fluid" style="height:12vh" alt=""></td>
                <td data-label="Gender">{{ user.gender }}</td>
                <td data-label="Role">{{ user.userRole }}</td>
                <td data-label="joinDate">{{ user.user_joined }}</td>
                <td data-label="edit">
                  <UpdateUser />
                </td>
                <td data-label="delete"><i class="fa-solid fa-trash"></i></td>
              </tr>

            </tbody>
          </table>
          <h2 class="product-crud">PRODUCT CRUD</h2>
          <AddProduct />
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
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in products" :key="product.id">
                <td data-label="productID">{{product.id}}</td>
                <td data-label="category">{{product.category}}</td>
                <td data-label="name">{{product.prodName}}</td>
                <td data-label="information">{{product.prodInfo}}</td>
                <td data-label="price">R{{product.prodPrice}}</td>
                <td data-label="Quantity">{{ product.prodQuantity }}</td>
                <td data-label="Image"><img :src="product.prodImage" class="img-fluid"
                    style="height:12vh" alt=""></td>
                <td data-label="edit"><i class="fa-solid fa-pen-to-square"></i></td>
                <td data-label="delete"><i class="fa-solid fa-trash"></i></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <FooterComponent />
  </body>
</template>

<script>
import AddProduct from '@/components/AddProduct.vue';
import UpdateUser from '@/components/UpdateUser.vue';
import AddUser from '@/components/AddUser.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import NavbarComponent from '@/components/NavbarComponent.vue';
import axios from 'axios'

export default {
  components: { NavbarComponent, FooterComponent, AddUser, UpdateUser, AddProduct },
  data() {
    return {
      users: null,
      products: null
    }
  },
  methods: {
    async getUsers() {
      let res = await axios
        .get('https://active8-eomp.onrender.com/users')
        .catch(error => {
          console.log(error);
        })
      let { results } = await res.data;
      this.users = results
    },

   async getProducts() {
    let res = await axios
    .get('https://active8-eomp.onrender.com/products')
    .catch(error => {
      console.log(error);
    })
    let {results} = await res.data;
    this.products = results
   } 

  },
  mounted() {
    this.getUsers(),
    this.getProducts()
  }
}
</script>
<style scoped>
body {
  background-color: rgb(32, 32, 32);
}

.shopping {
  padding: 30px;
}

.user-crud,
.product-crud {
  font-family: 'Tilt Neon', cursive;
  text-align: center;
  margin-top: 10px;
  font-size: 40px;
  color: white;
  text-shadow: 2px 2px 4px #000000;
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