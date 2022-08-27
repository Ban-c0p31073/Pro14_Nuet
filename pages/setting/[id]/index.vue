<template>
   <v-container>
      <v-card class="pa-3">
         <p class="text-h5 mb-0">カメラ設定</p>
         <v-list nav>
          <v-list-group v-for="(n,i) in cameras" :key="i">
              <template v-slot:activator="{ props }" nav>
                <v-list-item v-bind="props" :title="n.cameras_name"></v-list-item>
              </template>
              <v-list-item title="ラベル登録"/>
              <v-list-item title="削除" @click="deleteCamera(n.cameras_id)" />
          </v-list-group>
          <v-list-item title="新規登録" :to="'/setting/'+ id +'/newCameraForm'" />
        </v-list>
      </v-card>
      <v-card class="pa-3 mt-6">
         <p class="text-h5 mb-0">駐輪場設定</p>
         <v-list nav>
          <v-list-item title="駐輪場の削除" @click="deleteSpot"/>
        </v-list>
      </v-card>
   </v-container>
</template>

<script lang="ts">
  export default {
    methods:{
      async deleteCamera(e){
        const b = await $fetch( '/api/setting/deleteCamera', {
            method: 'POST',
            body: 1,
            params: { id: e }
        } );
        this.$router.push('/setting/')
      },
      async deleteSpot(){
        const route = useRoute()
        const id = route.params.id
        const c = await $fetch( '/api/setting/deleteSpots', {
            method: 'POST',
            body: 1,
            params: { id: id }
        } );
        location.reload()
      }
    }
  }
</script>

<script setup lang="ts">
  const { title } = useArticleTitle()
  const { spots } = useSpots()
  onMounted( async () => {title.value = '設定 / '+name})

  const route = useRoute()
  const id = route.params.id
  const index = spots.value.findIndex(({spots_id}) => spots_id == id)
  const name = spots.value[index].spots_name

  const {data: cameras , refresh} = await useFetch("/api/setting/camera",{ params: { id: id } })
  refresh()

</script>