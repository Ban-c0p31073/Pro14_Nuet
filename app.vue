<template>
  <v-app>
    <v-app-bar flat border>
      <v-app-bar-nav-icon @click="drawer=!drawer" />
      <v-app-bar-title class="pl-5">{{title}}</v-app-bar-title>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer">
      <v-container>
        <v-list nav dense>
          <v-list-item v-for="(navList,i) in navLists" :key="i" :to="navList.to" active-color="secondary">
            <v-list-item-avatar>
              <v-icon :icon="navList.icon" />
            </v-list-item-avatar>
            <v-list-item-title v-text="navList.name"/>
          </v-list-item>
        </v-list>
        <v-divider/>
        <v-list nav>
          <v-list-group v-for="(n,i) in spots" :key="i">
              <template v-slot:activator="{ props }" nav>
                <v-list-item v-bind="props" :title="n.spots_name"></v-list-item>
              </template>
              <v-list-item title="管理画面"  :to="'/management/'+n.spots_id" active-color="secondary"/>
              <v-list-item title="分析データ"  :to="'/management/'+n.spots_id+'/data'" active-color="secondary"/>
          </v-list-group>
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
    }
  }
}
</script>

<script setup lang="ts">
  const { title } = useArticleTitle()
  const { spots } = useSpots()
  const { data: props } = await useFetch('/api/deal')

  spots.value = props
</script>