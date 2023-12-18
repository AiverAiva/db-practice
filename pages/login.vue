<template>
    <div>
        <label>email</label>
        <input type="email" v-model="user.email" />
        <label>password</label>
        <input type="password" v-model="user.password" />
        <button @click="loginUser()">Login</button>
    </div>
</template>
  
<script setup>
const user = ref({
    email: '',
    password: ''
});

const loginUser = async () => {
    const response = await $fetch('/api/users/login', {
        method: 'POST',
        body: {
            ...user.value
        }
    });
    console.log(response);
};
</script>