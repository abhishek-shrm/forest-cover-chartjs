<template>
  <section>
    <table class="table is-centered is-striped is-hoverable">
      <thead class="home">
        <th scope="col">Year</th>
        <th scope="col"> Forest Cover
          <p class="content is-small">(in sq. km)</p>
        </th>
      </thead>
      <tbody>
        <tr v-for="data in result" :key="data.year">
          <td scope="row">{{data.year}}</td>
          <td scope="row">{{data.cover}}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
  import API from '../api'

  export default {
    data() {
      return {
        result: []
      }
    },
    created() {
      API().get('/')
        .then(res => {
          this.result = res.data.result;
        })
        .catch(error => {
          console.log(error);
        })
    }
  }

</script>

<style lang="scss" scoped>
  @import "~bulma/sass/utilities/_all";

  .table{
    margin-left: auto;
    margin-right: auto;
    margin-top:1em;
    margin-bottom: 2em;
  }

  @import "~bulma";
  @import "~buefy/src/scss/buefy";

</style>
