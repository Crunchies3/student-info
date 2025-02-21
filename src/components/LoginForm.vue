<script setup>
import { RouterLink } from 'vue-router';
import axios from 'axios';
import { reactive } from 'vue';
import router from '@/router';


const form = reactive({
    email: '',
    password: ''
})

const handleSubmit = async () => {
    try {
        const response = await axios.post('http://192.168.1.102:8000/api/login', form);
        console.log(response.data);
        router.push('/dashboard');
    } catch (error) {
        console.error(error);
    }
}


</script>

<template>
    <div class="container d-flex justify-content-center align-items-center min-vh-100">
        <div class="border p-2 border-secondary w-50 rounded-5">
            <div class="p-5 mt-3 align-items-center">
                <div class="header-text mb-4">
                    <h1 class="title">Log In</h1>
                </div>
                <form @submit.prevent="handleSubmit">
                    <div class="mb-4">
                        <label for="email" class="mb-2 text-secondary">Username or Email address</label>
                        <input v-model="form.email" id="email" name="email" type="email"
                            class="p-2 form-control rounded-3 input-field" value="">
                        <div class="invalid-feedback">
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <label for="password" class="mb-2 text-secondary">Password</label>
                        <div class="input-group mb-2" id="show_hide_password">
                            <input v-model="form.password" id="password" name="password" type="password"
                                class="p-2 rounded-3 form-control input-field" value="">
                            <div class="invalid-feedback">
                            </div>
                        </div>
                    </div>

                    <div class="input-group mb-5 d-flex  justify-content-between">
                        <div class="forgot">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <small class="form-check-label tetx-secondary" for="flexCheckDefault">
                                    Remember me
                                </small>
                            </div>
                        </div>
                        <div class="forgot">
                            <small class="forgot-password primary"><a href="./forgot_password_page.php"
                                    style="text-decoration: none; font-weight: bold;">Forgot
                                    Password?</a></small>
                        </div>
                    </div>
                    <div class="mb-3">
                        <button class="btn btn-lg w-100 rounded-5"
                            style="background-color: #124F6F; color: whitesmoke; font-weight: 600;">Log
                            In</button>
                    </div>
                    <div class="d-flex align-content-center justify-content-center">
                        <RouterLink to="/register">No Account yet? Sign-Up!</RouterLink>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
