<template>
  <v-container>
    <v-card class="pa-3">
      <h1>設定画面</h1>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
  const { title } = useArticleTitle()
  onMounted(() => title.value = '駐輪場管理')
</script>