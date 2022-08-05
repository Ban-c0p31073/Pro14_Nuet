<template>
   <v-container>
      <v-card class="pa-3">
         <div class="d-flex flex-column">
            <p class="text-h4">{{name}}</p>
            <v-list-item density="compact" class="mt-2">
               <v-list-item class="text-h6 pa-0">混雑状況：</v-list-item>
               <v-list-item class="pa-0">
                  <v-chip class="my-2 " color="cyan" label>
                     空車
                  </v-chip>
               </v-list-item>
            </v-list-item>
            <v-row>
               <v-col lg="6" cols="12">
                  <v-sheet color="grey lighten-3" class="ma-6">
                     <v-img src="/assets/img/1.png" height="500"/>
                  </v-sheet>
               </v-col>
               <v-col lg="6" cols="12">
                  <ManagementSituation />
               </v-col>
            </v-row>
         </div>
      </v-card>
   </v-container>
</template>

<script setup lang="ts">
  const { title } = useArticleTitle()
  const { spots } = useSpots()
  onMounted(() => title.value = '駐輪場管理 / '+name)

  const route = useRoute()
  const id = route.params.id
  const index = spots.value.findIndex(({spots_id}) => spots_id == id)
  const name = spots.value[index].spots_name
</script>