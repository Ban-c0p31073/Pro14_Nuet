<template>
   <div>
      <v-tooltip location="bottom" v-if="time < 24">
         <template v-slot:activator="{ props }">
         <v-icon
            color="black"
            dark
            v-bind="props"
            class="mr-1"
         >
            mdi-bicycle
         </v-icon>
         </template>
         <span>{{time}}時間</span>
      </v-tooltip>

      <v-tooltip location="bottom" v-else>
         <template v-slot:activator="{ props }">
         <v-icon
            color="red"
            dark
            v-bind="props"
            class="mr-1"
            @click="overlay = !overlay"
         >
            mdi-bicycle
         </v-icon>
         </template>
         <span>{{time}}時間!!!</span>
      </v-tooltip>

      <v-overlay v-model="overlay" class="align-center justify-center">
         <v-btn
         color="success"
         @click="overlay = false"
         >
         Hide Overlay
         </v-btn>
      </v-overlay>
   </div>
</template>

<script setup lang="ts">
interface Props {
   time: number
}

const props = withDefaults(defineProps<Props>(), {
  time: null
})

</script>

<script lang="ts">
  export default {
    data: () => ({
      overlay: false,
    }),
  }
</script>