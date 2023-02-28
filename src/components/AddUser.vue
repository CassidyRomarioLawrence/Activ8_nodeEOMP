<template>
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Launch demo modal
  </button>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <input type="text" placeholder="First Name">
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'AddUser',

    data() {
      return {
        firstName :'',
        lastName: '',
        phoneNumber: '',
        email: '',
        userPass: '',
        gender: '',
        userRole: '',
        userImage: 'https://i.postimg.cc/Gt87rd3h/team.jpg',
        joinDate: '',
      }
    },
    computed: {
      user(){
        return this.$store.dispatch("register", {
          firstName:this.firstName,
          lastName:this.lastName,
          phoneNumber:this.phoneNumber,
          email: this.email,
          userPass: this.userPass,
          gender: this.gender,
          userRole: this.userRole,
          joinDate: this.joinDate
        })
      }
    }
    
}
</script>

<style scoped>
    
</style>