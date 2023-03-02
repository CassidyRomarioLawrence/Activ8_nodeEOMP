<template>
    <div>
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#updateUserModal">
            <i class="fa-solid fa-pen-to-square"></i>
        </button>

        <!-- Modal -->
        <div class="modal fade" id="updateUserModal" tabindex="-1" aria-labelledby="updateUserModal"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content bg-dark">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="updateUserModal">Modal title</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <input type="text" placeholder="ID" v-model="userId" class="form-control my-3" required>
                        <input type="text" placeholder="Firstname" v-model="firstName" class="form-control my-3" required>
                        <input type="text" placeholder="Lastname" v-model="lastName" class="form-control my-3" required>
                        <input type="number" placeholder="Phone number" v-model="phoneNumber" class="form-control my-3"
                            required>
                        <input type="email" placeholder="Email Address" v-model="email" class="form-control my-3" required>
                        <input type="text" placeholder="Gender" v-model="gender" class="form-control my-3" required>
                        <input type="text" placeholder="" v-model="userImage" class="form-control my-3" required>
                        <input type="date" placeholder="Join date" v-model="joinDate" class="form-control my-3" required>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-danger">Update details</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            userId: '',
            firstName: '',
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
        user() {
            return this.$store.dispatch("register", {
                userId:this.userId,
                firstName: this.firstName,
                lastName: this.lastName,
                phoneNumber: this.phoneNumber,
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

<style scoped></style>