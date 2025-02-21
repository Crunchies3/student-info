<script setup>

import LoginForm from '@/components/LoginForm.vue';
import router from '@/router';

const token = localStorage.getItem("authToken");
if (!token) {
    router.push('/');
}

</script>

<template>
    <LoginForm />
</template>