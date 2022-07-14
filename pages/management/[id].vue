<template>
   <v-container>
      <div class="d-flex flex-column">
         <div class="ma-3 ">
            <p class="text-h4">{{ $route.params.id }}</p>
            <v-list-item density="compact" class="mt-2">
               <v-list-item class="text-h6 pa-0">混雑状況：</v-list-item>
               <v-list-item class="pa-0">
                  <v-chip class="my-2 " color="cyan" label>
                     空車
                  </v-chip>
               </v-list-item>
            </v-list-item>
         </div>
         <v-row>
            <v-col lg="6" cols="12">
               <v-sheet color="grey lighten-3" class="ma-6">
                  <v-img src="/assets/img/1.png" height="500"/>
               </v-sheet>
            </v-col>
            <v-col lg="6" cols="12">
               <v-sheet color="grey lighten-3" class="ma-6">
                  <v-img src="/assets/img/6.jpg" height="500"/>
               </v-sheet>
            </v-col>
         </v-row>
      </div>
   </v-container>
</template>

<script setup lang="ts">
  const { title } = useArticleTitle()
  onMounted(() => title.value = '駐輪場')
</script>