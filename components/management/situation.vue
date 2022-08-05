<template>
   <v-sheet color="grey lighten-3" class="ma-6 d-flex flex-column " height="500">
      <ManagementSituationRow v-for="(n,i) in datasets" :key="i" :row="n.row" :bicycle="n.bicycle" />
   </v-sheet>
</template>

<script lang="ts">
  export default {
    data () {
      return {
         datasets: [
            {
               row:"A",
               bicycle:[
                  20,26,34,12,14,23,17,15,43
               ]
            },
            {
               row:"0",
               bicycle:[]
            },
            {
               row:"B",
               bicycle:[
                  1,2,3,4,5,6,7,8,9,0,23,35
               ]
            },
            {
               row:"0",
               bicycle:[]
            },
            {
               row:"C",
               bicycle:[
                  1,2
               ]
            }
         ]
      }
    }
  }
</script>