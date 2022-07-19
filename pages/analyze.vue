<template>

  <v-card
    class="mx-auto"
    width="300"
  >
    <v-list>
      <v-list-group v-for="(n,i) in spots" :key="i">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" :title="n.spots_name"></v-list-item>
          </template>
          <v-list-item
            title="管理画面"
          ></v-list-item>
          <v-list-item
            title="分析データ"
          ></v-list-item>
      </v-list-group>
    </v-list>
  </v-card>

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