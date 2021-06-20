<template>
    <div class="index flex align-center justify-center">
        <div id="echarts" style="width: 800px; height: 500px;"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
    name: 'index',
    mounted() {
        let myChart = echarts.init(document.getElementById('echarts'))
        myChart.setOption({
            title: {
                text: '今年销量趋势'
            },
            color: ['#0ba29a'],
            tooltip: {},
            xAxis: {
                data: [
                    '1月',
                    '2月',
                    '3月',
                    '4月',
                    '5月',
                    '6月',
                    '7月',
                    '8月',
                    '9月',
                    '10月',
                    '11月',
                    '12月'
                ]
            },
            yAxis: {},
            series: [
                {
                    name: '销量',
                    type: 'line',
                    data: [5, 20, 36, 20, 45, 60, 64, 66, 70, 80, 89, 122]
                }
            ]
        })
    }
}
</script>

<style lang="scss" scoped></style>
