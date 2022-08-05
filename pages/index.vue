<template>
  <v-container>
    <h1>フロントエンド動作確認です</h1>
  </v-container>
</template>

<script lang="ts">
  export default {
    data () {
      return {
        desserts: [
          {
            name: 'Frozen Yog    urt',
            calories: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          },
          {
            name: 'Eclair',
            calories: 262,
          },
          {
            name: 'Cupcake',
            calories: 305,
          }
        ],
      }
    },
    async setup() {
      const { title } = useArticleTitle()
      onMounted(() => {
        title.value = 'ダッシュボード'
      })
    },
  }
</script>