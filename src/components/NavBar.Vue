<template>
    <b-navbar toggleable="lg" type="dark" variant="primary" class="px-3">
      <!-- Left Side: Brand Logo and Name -->
      <b-navbar-brand class="d-flex align-items-center">
        <b-img src="@/assets/brand-logo.png" alt="Brand Logo" height="40" class="mr-2"></b-img>
        <span class="brand-name text-white">Brand Name</span>
      </b-navbar-brand>
  
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
  
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <!-- Right Side: User Avatar -->
          <b-nav-item>
            <b-avatar variant="light" size="40px"></b-avatar>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </template>
  
  <script>
  export default {
    name: "NavBar",
  };
  </script>
  
  <style scoped>
  .brand-name {
    font-size: 1.2rem;
    font-weight: bold;
  }
  </style>
  