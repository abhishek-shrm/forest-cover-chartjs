<template>
  <section>
    <div class="tabs is-centered is-boxed is-medium">
      <ul>
        <li  @click="link='chart'" :class="link=='chart'?'is-active':''">
          <router-link :to="{name:'chart'}" tag="a">
            <span>Chart</span>
          </router-link>
        </li>
        <li  @click="link='data'" :class="link=='data'?'is-active':''">
          <router-link :to="{name:'data'}" tag="a">
            <span>Data</span>
          </router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        link:'chart'
      }
    },
    methods:{

    },
    watch:{
      '$route'(to,from){
        this.link=to.name;
      }
    }
  }

</script>

<style lang="scss" scoped>
  @import "~bulma/sass/utilities/_all";
  $tabs-link-active-color:$primary;
  $tabs-link-active-border-bottom-color:$primary;


  @import "~bulma";
  @import "~buefy/src/scss/buefy";

</style>
