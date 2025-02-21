<script setup>

import Dashboard from '@/components/Dashboard.vue';
import router from '@/router';

const token = localStorage.getItem("authToken");
if (!token) {
    router.push('/');
}

</script>

<template>
    <Dashboard />
</template>