<template>
  <v-container>
      <v-card class="pa-3">
        <p class="text-h5">駐輪場設定</p>
         <v-list nav dense>
            <v-list-item v-for="(n,i) in spots" :key="i" :to="'/setting/'+n.spots_id" :title="n.spots_name" />
            <v-list-item title="新規登録" to="/setting/new" />
         </v-list>
      </v-card>
  </v-container>
</template>

<script setup lang="ts">
  const { title } = useArticleTitle()
  onMounted(() => title.value = '設定')

  const { spots } = useSpots()
</script>