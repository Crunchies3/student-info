<template>
  <div class="dashboard-container text-center">
    <!-- Title -->
    <h1 class="font-weight-bold my-4">Dashboard</h1>

    <!-- Subtitle (Email Address) -->
    <h5 class="text-muted">your-email@example.com</h5>

    <!-- DataTable Section (Placeholder) -->
    <b-container class="mt-5">
      <b-card class="shadow-sm p-4">
        <p class="text-muted">DataTable Section</p>
      </b-card>
    </b-container>
  </div>



  <div @click="logout" class="btn btn-primary">logout</div>
</template>

<script>
export default {
  name: "Dashboard",
};
localStorage.removeItem("authToken");


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