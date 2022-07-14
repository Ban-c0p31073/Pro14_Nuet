<template>
  <v-app>
    <v-app-bar color="primary">
      <v-app-bar-nav-icon @click="drawer=!drawer" />
      <v-app-bar-title class="pl-5">{{title}}</v-app-bar-title>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer">
      <v-container>

        <v-list nav dense>
          <v-list-item v-for="(navList,i) in navLists" :key="i" :to="navList.to" active-color="primary">
            <v-list-item-avatar>
              <v-icon :icon="navList.icon" />
            </v-list-item-avatar>
            <v-list-item-title v-text="navList.name" />
          </v-list-item>
        </v-list>
        <v-divider/>
        <v-list nav dense>
          <v-list-item v-for="(n,i) in parkingLists" :key="i" :to="n.to" active-color="primary">
            <v-list-item-title v-text="n.name" />
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
        {name: '駐輪場管理',icon: 'mdi-cogs', to: '/management'},
        {name: 'データ分析',icon: 'mdi-poll', to: '/analyze'},
        {name: '1111',icon: 'mdi-palette', to: '/next'},
        {name: '2222',icon: 'mdi-palette', to: '/register'},
      ],
      parkingLists:[
        {name: '藤沢駐輪場', to: '/management/1'},
        {name: '文教駐輪場', to: '/management/2'},
        {name: '文教第二駐輪場', to: '/management/3'},
        {name: '文教第三駐輪場', to: '/management/4'},
        {name: '文教第四駐輪場', to: '/management/5'},
      ],
    }
  }
}
</script>

<script setup lang="ts">
  const { title } = useArticleTitle()
</script>