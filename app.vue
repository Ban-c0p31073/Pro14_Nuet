<template>
  <v-app>
    <v-app-bar color="primary">
      <v-app-bar-nav-icon @click="drawer=!drawer" />
      <v-toolbar-title>{{title}}</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer">
      <v-container>
        <v-list-item>
          <v-list-item-title class="title">
            Navigation lists
          </v-list-item-title>
        </v-list-item>
        <v-divider />
        <v-list nav dense>
          <v-list-item v-for="(navList,i) in navLists" :key="i" :to="navList.to" active-color="primary">
            <v-list-item-avatar>
              <v-icon :icon="navList.icon" />
            </v-list-item-avatar>
            <v-list-item-title v-text="navList.name" />
          </v-list-item>
        </v-list>
      </v-container>
    </v-navigation-drawer>
    <v-main>
      <nuxt-page/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
export default {
  data(){
    return{
      drawer: null,
      navLists:[
        {name: 'ダッシュボード',icon: 'mdi-vuetify', to: '/'},
        {name: '放置時間管理',icon: 'mdi-cogs', to: '/next'},
        {name: 'グラフ',icon: 'mdi-palette', to: '/'},
        {name: '駐輪場登録用試作',icon: 'mdi-view-dashboard', to: '/register'},
        {name: 'かきくけこ',icon: 'mdi-function'},
        {name: 'さしすせそ',icon: 'mdi-vuetify'},
      ],
    }
  }
}
</script>

<script setup lang="ts">
   const { title } = useArticleTitle()
</script>

<style lang="scss" scoped>

</style>