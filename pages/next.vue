<template>
<v-container>
</v-container>
</template>

<script setup lang="ts">
  const { title } = useArticleTitle()
  onMounted(() => title.value = 'なんかの画面')

  const { spots } = useSpots()
</script>