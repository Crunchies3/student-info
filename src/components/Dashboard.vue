<template>
  <div class="dashboard-container text-center">
    <!-- Title -->
    <h1 class="font-weight-bold my-4">{{ name }}</h1>

    <!-- Subtitle (Email Address) -->
    <h5 class="text-muted">your-email@example.com</h5>
  </div>



  <div @click="logout" class="btn btn-primary">logout</div>
</template>


<script setup>

import router from '@/router';

npm install primevue @primeuix/themesconst name = 'Dashboard';

const logout = () => {
  console.log("nigana naaa");
  localStorage.removeItem("authToken");
  router.push("/");
};

</script>

<style scoped>
.dashboard-container {
  margin-top: 50px;
}
</style>