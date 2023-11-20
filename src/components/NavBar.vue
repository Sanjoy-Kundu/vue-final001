<script setup></script>
<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">E-<span class="text-danger">SHOP</span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <router-link to="/home"><a class="nav-link active " aria-current="page" href="#">Home</a></router-link>
        </li>
        <li class="nav-item">
            <router-link to="/"><a class="nav-link" aria-current="page" href="#">Product Lists</a></router-link>
        </li>
        <li class="nav-item">
            <router-link to="/about"><a class="nav-link " aria-current="page" href="#">About Us</a></router-link>
        </li>
        <li class="nav-item">
            <router-link to="/contact"><a class="nav-link" aria-current="page" href="#">Contact Us</a></router-link>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</template>

<style scoped>
a{
    text-decoration: none;
    font-size: 20px;
}
a:hover{
    color: rgb(227, 63, 63);
}
</style>