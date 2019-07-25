<template>
  <section>
    <div class="myChart">
      <canvas id='chart'></canvas>
    </div>
  </section>
</template>

<script>

import API from '../api'
import Chart from 'chart.js'

export default {
  data(){
    return{
      result:[]
    }
  },
  created(){
    API().get('/')
    .then(res=>{
      this.result=res.data.result;
    })
    .catch(error=>{
      console.log(error);
    })
  }
}
</script>

<style lang="scss" scoped>
@import "~bulma/sass/utilities/_all";



@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>