
<template>
<div>
  <div>
    <h1>ログインユーザ</h1>
    <form @submit.prevent="login1">
      <div class="form-group">
        <label for="email">Email:</label>
        <input v-model="user.email">
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" v-model="user.password">
      </div>
      <button type="submit">ログイン</button>
    </form>
  </div>
</div>
</template>

<script lang="ts">
  export default {
    data(){
      return {
        user:{
          email:'',
          password:''
        }
      }
    },
    methods:{
      async login1(){
        const a = await $fetch( '/api/login', {
            method: 'POST',
            body: this.user
        } );
        const { currentUser, login } = useAuth();
        const userLogin = await login(a)
      }
    }
  }
</script>

<script setup lang="ts">
  const { currentUser, login } = useAuth()
  const userLogin = async () => {
    await login(a)
  }
</script>