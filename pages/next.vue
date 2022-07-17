<template>
  <v-container>
    <p>APIの動作確認のために、東京の気温を表示してます。</p>
    <p>GET,POSTのうち、GET側は動作確認ができました。</p>
    {{ spots }}
  </v-container>
</template>

<script setup lang="ts">
  const { title } = useArticleTitle()
  onMounted(() => title.value = 'なんかの画面')

  const { spots } = useSpots()
</script>