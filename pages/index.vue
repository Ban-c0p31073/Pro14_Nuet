<template>
  <v-container>
    <h1>フロントエンド動作確認です</h1>
    <h1>{{loginUser.user.name}}のログイン</h1>
    <button @click="userLogout">ログ負うと</button>
  </v-container>
</template>

<script lang="ts">

</script>

<script setup lang="ts">

  const { title } = useArticleTitle()
  onMounted(() => title.value = 'ダッシュボード')

  const { loginUser, logout } = useAuth()

  const userLogout = async () => {
    await logout()
  }

</script>