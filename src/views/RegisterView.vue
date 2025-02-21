<script setup>

import RegisterForm from '@/components/RegisterForm.vue';
import router from '@/router';
const token = localStorage.getItem("authToken");
if (!token) {
    router.push('/');
}

</script>

<template>
    <RegisterForm />
</template>