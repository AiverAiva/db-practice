<template>
    <div>
        <label>name</label>
        <input type="text" v-model="user.name" />
        <label>email</label>
        <input type="email" v-model="user.email" />
        <label>password</label>
        <input type="password" v-model="user.password" />
        <button @click="addUser()">Add User</button>
    </div>
</template>
  
<script setup>
const user = ref({
    name: '',
    email: '',
    password: ''
});

const addUser = async () => {
    const response = await $fetch('/api/users/register', {
        method: 'POST',
        body: {
            ...user.value
        }
    });
    console.log(response);
};
</script>