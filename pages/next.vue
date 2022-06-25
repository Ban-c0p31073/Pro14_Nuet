<template>
  <v-container>
    <p>APIの動作確認のために、東京の気温を表示してます。</p>
    <p>GET,POSTのうち、GET側は動作確認ができました。</p>
    {{ props.hourly.temperature_2m }}
  </v-container>
</template>

<script setup lang="ts">
   const { title } = useArticleTitle()
   onMounted(() => title.value = 'なんかの画面')

   const { data: props } = await useFetch('/api/deal')
</script>