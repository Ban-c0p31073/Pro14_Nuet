<template>
  <v-container>

  </v-container>
</template>

<script lang="ts">
  export default {
    data: () => ({
      open: ['Users'],
      admins: [
        ['Management', 'mdi-account-multiple-outline'],
        ['Settings', 'mdi-cog-outline'],
      ],
      cruds: [
        ['Create', 'mdi-plus-outline'],
        ['Read', 'mdi-file-outline'],
        ['Update', 'mdi-update'],
        ['Delete', 'mdi-delete'],
      ],
    }),
  }
</script>

<script setup lang="ts">
  const { title } = useArticleTitle()
  onMounted(() => title.value = 'データ分析')

  const { spots } = useSpots()
</script>