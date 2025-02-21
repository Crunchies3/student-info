<script setup>
import { RouterLink } from 'vue-router';


</script>

<template>
    <div class="container d-flex justify-content-center align-items-center min-vh-100">
        <div class="border bg-light shadow-sm  p-2 border-light-subtle w-50 rounded-5">
            <div class="p-5 mt-3 align-items-center">
                <div class="header-text mb-4">
                    <h1 class="title">Sign-Up</h1>
                </div>
                <form @submit.prevent>
                    <div class="mb-4">
                        <label for="email-input" class="mb-2 text-secondary">Username or Email address</label>
                        <input id="email-input" name="email" type="email" class="p-2 form-control rounded-3 input-field"
                            value="">
                        <div class="invalid-feedback">
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <label for="password-input" class="mb-2 text-secondary">Password</label>
                        <div class="input-group mb-2" id="show_hide_password">
                            <input name="password" type="password" class="p-2 rounded-3 form-control input-field"
                                value="">
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
                            <small class="forgot-password"><a href="./forgot_password_page.php"
                                    style="text-decoration: none; color: #ff8282; font-weight: bold;">Forgot
                                    Password?</a></small>
                        </div>
                    </div>
                    <div class="mb-3">
                        <button class="btn btn-lg w-100 rounded-5"
                            style="background-color: #af2532   ; color: whitesmoke; font-weight: 600;">Log
                            In</button>
                    </div>
                    <div class="d-flex align-content-center justify-content-center">
                        <RouterLink to="/" style="text-decoration: none; color: #af2532;">Already have an account?
                            Log-in!</RouterLink>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
