<template>
   <v-tooltip location="bottom">
      <template v-slot:activator="{ props }">
      <v-icon
         color="black"
         dark
         v-bind="props"
      >
         mdi-bicycle
      </v-icon>
      </template>
      <span>20 時間</span>
   </v-tooltip>
</template>

<script setup lang="ts">

</script>