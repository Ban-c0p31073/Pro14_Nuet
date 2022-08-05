<template>
  <v-container>
    <v-row class="pa-4">
      <v-col cols="12">
        <v-card class="pa-3">
          <div class="d-flex">
            <div>
              <p class="text-h4 pb-4">{{name}} の分析データ</p>
              <p class="text-h5">時間別 - 混雑状況</p>
            </div>
            <div class="w-25  ml-auto">
              <v-select class="pa-4" :items="items" label="期間" v-model="select"/>
            </div>
          </div>
          <ManagementCongestionSituationChart :chartData="situationChartData" style="height: 400px;"/>
        </v-card>
      </v-col>
      <v-col lg="6" cols="12">
        <v-card class="pa-3">
          <p class="text-h5">利用時間別 - 台数分布</p>
          <ManagementNumberChart :chartData="numberChartData" style="height: 400px;"/>
        </v-card>
      </v-col>
      <v-col lg="6" cols="12">
        <v-card class="pa-3">
          <p class="text-h5">利用時間別 - 台数分布</p>
          <ManagementAverageChart :chartData="numberChartData" style="height: 400px;" />
        </v-card>
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
      items: ['1日間', '7日間', '1か月間', '3か月間'],
      select: '1日間',
      situationChartData: {
        label: 'Data One',
        backgroundColor: '#f87979',
        data: [43,43,43,43,43,43,43,54,73,80,80,77,89,73,80,80,77,60,60,60,60,60,60,40,99],
        labels: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
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