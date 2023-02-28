<template>
    <nav class="navbar navbar-expand-lg bg-black">
        <div class="container-fluid">
          <a href="/" class="navbar-brand"><img src="https://i.postimg.cc/25NW2htS/transparent.png" style="height:10vh" alt=""></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav gap-3">
              <li class="nav-item active">
                <a href="/" class="nav-link text-light"><span>HOME</span></a>
              </li>
              <li class="nav-item">
                <a href="/#about" class="nav-link text-light">ABOUT</a>
              </li>
              <li class="nav-item">
                <a href="/shop" class="nav-link text-light">SHOP</a>
              </li>
              <li class="nav-item">
                <a href="/admin" class="nav-link text-light">ADMIN</a>
              </li>
              <li class="nav-item">
                <a href="/#contact" class="nav-link text-light">CONTACT</a>
              </li>
            </ul>
            <ul class="user">
              <li><button><a href="/login">LOGIN</a></button></li>
              <li><button><a href="/register">SIGN UP</a></button></li>
            </ul>
          </div>
        </div>
      </nav>
</template>

<script>
export default {
    
}
</script>
<style scoped>
.navbar-nav {
    font-size: x-large;
    text-align: center;
  }
  .navbar-nav {
    align-items: center;
    justify-content: center;
    margin: auto;
  }
  .nav-link:hover {
    background-color: rgba(84, 81, 81, 0.2);
    color: black;
  }
  .user {
    display: flex;
    gap: 5px;
  }
  .user a {
    text-decoration: none;
    color: black;
    font-weight: bold;
  }
  .user li {
    list-style: none;
  }
  .user button {
    background-color: rgb(255, 200, 99);
    color: black;
    border-radius: 70px;
    padding: 10px;
    font-size: medium;
  }
  span {
    color: rgb(255, 200, 99);
  }
  
</style>