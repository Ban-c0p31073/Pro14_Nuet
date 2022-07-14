<template>
  <v-container>
    <v-row>
      <v-col v-for="(v, k) in menus" :key="k" lg="6" cols="12">
        <ManagementCard :name="v.name" :situation="v.situation" :to="v.to"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  const { title } = useArticleTitle()
  onMounted(() => title.value = '駐輪場管理')

  interface Menus {
    name: String,
    situation: Boolean
  }

  const menus = reactive<Menus>([
    { name: '藤沢北口駐輪場', situation: false , to: "/management/1"},
    { name: '文教大学前駐輪場', situation: true , to: "/management/2" },
    { name: '＊＊駐輪場', situation: false , to: "/management/3" },
    { name: '＊＊駐輪場', situation: false , to: "/management/4" },
    { name: '＊＊駐輪場', situation: false , to: "/management/5" }

  ])
</script>