<template>
  <v-container>
    <h1>フロントエンド動作確認です</h1>
    <h1>{{loginUser.user.name}}のログイン</h1>
    <button @click="userLogout">ログ負うと</button>
  </v-container>
</template>

<script setup lang="ts">

  const { title } = useArticleTitle()
  onMounted(() => title.value = 'ダッシュボード')

  const { loginUser, logout } = useAuth()

  const userLogout = async () => {
    await logout()
  }

  const { spots } = useSpots()
  const { data: props } = await useFetch('/api/deal',{ params: { id: loginUser.value.user.id  } })
  spots.value = props

</script>