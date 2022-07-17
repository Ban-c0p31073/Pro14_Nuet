<template>
</template>

<script setup lang="ts">
  const { title } = useArticleTitle()
  onMounted(() => title.value = 'データ分析')
</script>