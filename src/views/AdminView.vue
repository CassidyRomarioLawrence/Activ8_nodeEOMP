<template>
    <body>
        <NavbarComponent/>  
        <div class="shopping">
            <div class="container-shopping">
              <div class="content">
                <h2 class="user-crud">USER CRUD</h2>
                <AddUser/>
                <table class="table">
                  <thead>
                      <tr>
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
                    <!-- Admin Start -->
                        <tr>
                              <td data-label="FirstName">Meezaan</td>
                              <td data-label="LastName">Davids</td>
                              <td data-label="Phone">0658707217</td>
                              <td data-label="Email">meezaan@gmail.com</td>
                              <td data-label="Image"><img src="https://i.postimg.cc/Gt87rd3h/team.jpg" class="img-fluid" style="height:12vh" alt=""></td>
                              <td data-label="Gender">Male</td>
                              <td data-label="Role">Admin</td>
                              <td data-label="joinDate">28 Feb 2023</td>
                              <td data-label="edit"><UpdateUser/></td>
                              <td data-label="delete"><i class="fa-solid fa-trash"></i></td>
                        </tr>
                        <tr>
                              <td data-label="FirstName">Cassidy</td>
                              <td data-label="LastName">Lawrence</td>
                              <td data-label="Phone">0000000000</td>
                              <td data-label="Email">cassidy@gmail.com</td>
                              <td data-label="Image"><img src="https://i.postimg.cc/Gt87rd3h/team.jpg" class="img-fluid" style="height:12vh" alt=""></td>
                              <td data-label="Gender">Male</td>
                              <td data-label="Role">Admin</td>
                              <td data-label="joinDate">1 March 2023</td>
                              <td data-label="edit"><UpdateUser/></td>
                              <td data-label="delete"><i class="fa-solid fa-trash"></i></td>
                        </tr>
                        <tr>
                              <td data-label="FirstName">Cassidy</td>
                              <td data-label="LastName">Lawrence</td>
                              <td data-label="Phone">0000000000</td>
                              <td data-label="Email">cassidy@gmail.com</td>
                              <td data-label="Image"><img src="https://i.postimg.cc/Gt87rd3h/team.jpg" class="img-fluid" style="height:12vh" alt=""></td>
                              <td data-label="Gender">Male</td>
                              <td data-label="Role">Admin</td>
                              <td data-label="joinDate">1 March 2023</td>
                              <td data-label="edit"><UpdateUser/></td>
                              <td data-label="delete"><i class="fa-solid fa-trash"></i></td>
                        </tr>
                        <!-- Admin End -->

                        <!-- User Start -->
                        <tr>
                              <td data-label="FirstName">Cassidy</td>
                              <td data-label="LastName">Lawrence</td>
                              <td data-label="Phone">0000000000</td>
                              <td data-label="Email">cassidy@gmail.com</td>
                              <td data-label="Image"><img src="https://i.postimg.cc/Gt87rd3h/team.jpg" class="img-fluid" style="height:12vh" alt=""></td>
                              <td data-label="Gender">Male</td>
                              <td data-label="Role">Admin</td>
                              <td data-label="joinDate">1 March 2023</td>
                              <td data-label="edit"><UpdateUser/></td>
                              <td data-label="delete"><i class="fa-solid fa-trash"></i></td>
                        </tr>
                        <tr>
                              <td data-label="FirstName">Cassidy</td>
                              <td data-label="LastName">Lawrence</td>
                              <td data-label="Phone">0000000000</td>
                              <td data-label="Email">cassidy@gmail.com</td>
                              <td data-label="Image"><img src="https://i.postimg.cc/Gt87rd3h/team.jpg" class="img-fluid" style="height:12vh" alt=""></td>
                              <td data-label="Gender">Male</td>
                              <td data-label="Role">Admin</td>
                              <td data-label="joinDate">1 March 2023</td>
                              <td data-label="edit"><UpdateUser/></td>
                              <td data-label="delete"><i class="fa-solid fa-trash"></i></td>
                        </tr>
                        <tr>
                              <td data-label="FirstName">Cassidy</td>
                              <td data-label="LastName">Lawrence</td>
                              <td data-label="Phone">0000000000</td>
                              <td data-label="Email">cassidy@gmail.com</td>
                              <td data-label="Image"><img src="https://i.postimg.cc/Gt87rd3h/team.jpg" class="img-fluid" style="height:12vh" alt=""></td>
                              <td data-label="Gender">Male</td>
                              <td data-label="Role">Admin</td>
                              <td data-label="joinDate">1 March 2023</td>
                              <td data-label="edit"><UpdateUser/></td>
                              <td data-label="delete"><i class="fa-solid fa-trash"></i></td>
                        </tr>
                        <!-- User -->
                  </tbody>
                </table>
                <h2 class="product-crud">PRODUCT CRUD</h2>
                <table class="table">
                  <thead>
                      <tr>
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
                        <tr>
                              <td data-label="FirstName">Meezaan</td>
                              <td data-label="LastName">Davids</td>
                              <td data-label="Phone">0658707217</td>
                              <td data-label="Email">meezaan@gmail.com</td>
                              <td data-label="Image"><img src="https://i.postimg.cc/Gt87rd3h/team.jpg" class="img-fluid" style="height:12vh" alt=""></td>
                              <td data-label="Gender">Male</td>
                              <td data-label="edit"><i class="fa-solid fa-pen-to-square"></i></td>
                              <td data-label="delete"><i class="fa-solid fa-trash"></i></td>
                        </tr>
                        <tr>
                              <td data-label="FirstName">Cassidy</td>
                              <td data-label="LastName">Lawrence</td>
                              <td data-label="Phone">0000000000</td>
                              <td data-label="Email">cassidy@gmail.com</td>
                              <td data-label="Image"><img src="https://i.postimg.cc/Gt87rd3h/team.jpg" class="img-fluid" style="height:12vh" alt=""></td>
                              <td data-label="Gender">Male</td>
                              <td data-label="edit"><i class="fa-solid fa-pen-to-square"></i></td>
                              <td data-label="delete"><i class="fa-solid fa-trash"></i></td>
                        </tr>
                  </tbody>
                </table>
              </div>
          </div>
          </div>
        <FooterComponent/>
    </body>
</template>

<script>
import UpdateUser from '@/components/UpdateUser.vue';
import AddUser from '@/components/AddUser.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import NavbarComponent from '@/components/NavbarComponent.vue';

export default {
    components: { NavbarComponent, FooterComponent, AddUser, UpdateUser }
}
</script>
<style scoped>
 body {
  background-color:  rgb(32, 32, 32);
 }

 .shopping {
  padding: 30px;
 }
  .user-crud, .product-crud {
    font-family: 'Tilt Neon', cursive;
    text-align: center;
    margin-top: 10px;
    font-size: 40px;
    color: white;
    text-shadow: 2px 2px 4px #000000;
  }

  .table{
    width: 100%;
}
.table td,.table th{
  border:1px solid #ddd;
  text-align: center;
  font-size:16px;
}
.table th{
    background-color:black;
    color:rgb(255, 200, 99);
}
.table tbody tr{
    background-color: black;
    color: white;
}
/*responsive*/
@media(max-width: 300px){

    .table {
      height: 100%;
      overflow-y: auto;
    }
    .table thead{
        display: none;
    }
    .table, .table tbody, .table tr, .table td{
        display: block;
        width: 100%;
    }
    .table tr{
        margin-bottom:15px;
    }
    .table td{
        text-align: right;
        padding-left: 50%;
        text-align: right;
        position: relative;
        width: 100%;
    }
    .table td::before{
        content: attr(data-label);
        position: absolute;
        left:0;
        width: 50%;
        padding-left:15px;
        font-size:15px;
        font-weight: bold;
        text-align: left;
    }
}
</style>