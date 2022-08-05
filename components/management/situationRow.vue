<template>
   <v-sheet  v-if="row == 0" color="grey" class="flex-grow-1">
   </v-sheet>
   <v-sheet  v-else color="white" class="flex-grow-1 d-flex flex-row align-center ma-1" style="position: relative;" border >
      <p style="position: absolute; top: 0px;">{{row}}列</p>
      <ManagementBicycle v-for="(n,i) in bicycle" :key="i" :time="n" /> 
   </v-sheet>
</template>

<script setup lang="ts">

interface Props {
   row: String,
   bicycle: Array<number>
}

const props = withDefaults(defineProps<Props>(), {
  row: 0,
  bicycle: []
})

</script>