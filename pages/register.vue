<!-- <template>
    <div>
        <label>name</label>
        <input type="text" v-model="user.name" />
        <label>email</label>
        <input type="email" v-model="user.email" />
        <label>password</label>
        <input type="password" v-model="user.password" />
        <button @click="addUser()">Add User</button>
    </div>
</template> -->
<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <h2 class="title has-text-centered">Register!</h2>

          <Notification :message="error" v-if="error"/>

          <form method="post" @submit.prevent="register">
            <div class="field">
              <label class="label">Username</label>
              <div class="control">
                <input
                  type="text"
                  class="input"
                  name="username"
                  v-model="user.username"
                  required 
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input
                  type="email"
                  class="input"
                  name="email"
                  v-model="user.email"
                  required
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input
                  type="password"
                  class="input"
                  name="password"
                  v-model="user.password"
                  required
                />
              </div>
            </div>
            <div class="control">
              <button type="submit" class="button is-dark is-fullwidth">Register</button>
            </div>
          </form>

          <div class="has-text-centered" style="margin-top: 20px">
            Already got an account? <nuxt-link to="/login">Login</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Notification from '~/components/Notification'

const user = ref({
    name: '',
    email: '',
    password: ''
});

export default {
  components: {
    Notification,
  },

  data() {
    return {
        user:{
            username: '',
            email: '',
            password: '',
            error: null
        }
    }
  },

  methods: {
    async register() {
      try {
        await this.$fetch('/api/users/register', {
            method: 'POST',
            body: {
                ...user.value
            }
        });

        this.$router.push('/')
      } catch (e) {
        this.error = e.response.data.message
      }
    }
  }
}
</script>
<!-- <script setup>
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
</script> -->