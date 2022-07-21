<template>
  <v-container>
    <p class="text-h4">{{name}} の分析データ</p>
    <v-row class="pt-5">
      <v-col cols="12">
        <p class="text-h5">時間別 - 混雑状況</p>
        <ManagementCongestionSituationChart :chartData="situationChartData" style="height: 400px;"/>
      </v-col>
      <v-col lg="6" cols="12">
        <p class="text-h5">利用時間別 - 台数分布</p>
        <ManagementNumberChart :chartData="numberChartData" style="height: 300px;"/>
      </v-col>
      <v-col lg="6" cols="12">
        <p class="text-h5">利用時間別 - 台数分布</p>
        <ManagementAverageChart :chartData="numberChartData" style="height: 300px;" />
      </v-col>
    </v-row>
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

<script lang="ts">
export default {
  data() {
    return {
      situationChartData: {
        label: 'Data One',
        backgroundColor: '#f87979',
        data: [43,43,43,43,43,43,43,54,73,80,80,77,89,73,80,80,77,60,60,60,60,60,60,40,99]
      },
      numberChartData: {
        label: '台数分布',
        backgroundColor: '#f87979',
        data: [10,20,40,45,15,40,30,40,45,15,40,10]
      }
    }
  }
}
</script>