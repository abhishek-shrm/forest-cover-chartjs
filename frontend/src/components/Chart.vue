<template>
  <section>
    <div class="myChart">
      <canvas ref="chart" id="chartCanvas" width="400" height="400"></canvas>
    </div>
    <div class="block">
      <h1 class="title is-6">
        This graph shows us that the India has become more green than it was 20 years ago.
      </h1>
    </div>
  </section>
</template>

<script>

import API from '../api'
import Chart from 'chart.js'

export default {
  data(){
    return{
      years:[],
      forestCovers:[]
    }
  },
  created(){

  },
  mounted(){
    API().get('/')
    .then(res=>{
      res.data.result.forEach(el=>{
        this.years.push(el.year);
        this.forestCovers.push(el.cover);
      });
      var ctx=this.$refs.chart.getContext('2d');
      var data={
        labels: this.years,
        datasets: [
          { // one line graph
            label: 'Forest geographical area coverage',
            data: this.forestCovers,
            fill:false,
            backgroundColor: 'rgba(32,190,23,.5)',
            borderWidth: 3,
            pointHoverBorderColor:"rgba(220,220,220,1)",
            pointHoverRadius:5,
            borderColor:"rgba(32,190,23,1)"
          }
        ]
      };
      var options={
        responsive: true,
        scales: {
          yAxes: [{
            scaleLabel:{
              display:true,
              labelString:'Forest area in sq. km'
            },
            ticks: {
              beginAtZero: false,
              padding: 10
            }
          }],
          xAxes:[{
            scaleLabel:{
              display:true,
              labelString:'Years'
            }
          }]
        },
        maintainAspectRatio:false,
        title:{
          display:true,
          text:'Forest geographical area coverage of India from 1987-2017'
        },
        tooltips:{
          backgroundColor:'rgba(255, 255, 255, 0.8)',
          titleFontColor:'#555',
          bodyFontColor:'#555',
          borderColor:'black',
          borderWidth:0.2
        }
      };
      Chart.defaults.global.defaultFontSize=14;
      var myLineChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options
      });
    })
    .catch(error=>{
      console.log(error);
    });
  }
}

</script>

<style lang="scss" scoped>
@import "~bulma/sass/utilities/_all";

section{
    margin-top: 2em;
    .myChart{
      width:90%;
      margin-left:3em;
      margin-right:1em;
    }
    #chartCanvas{
      -webkit-box-shadow: 4px 3px 8px -3px rgba(0,0,0,0.73);
      -moz-box-shadow: 4px 3px 8px -3px rgba(0,0,0,0.73);
      box-shadow: 4px 3px 8px -3px rgba(0,0,0,0.73);
    }
    .block{
      margin-top: 3em;
      text-align: center;
    }
}


@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>