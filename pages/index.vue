<template>
  <v-container>
    <h1>フロントエンド動作確認です</h1>
      <v-table>
        <thead>
          <tr>
            <th class="text-left">
              ID
            </th>
            <th class="text-left">
              停車時間
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in desserts"
            :key="item.name"
          >
            <td>{{ item.name }}</td>
            <td>{{ item.calories }} 分</td>
          </tr>
        </tbody>
      </v-table>
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