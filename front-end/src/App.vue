<template>
  <div id="app">
    <v-app>
      <PageHeader></PageHeader>
      <v-content>
        <div class="pt-5"></div>
        <div class="pt-3"></div>
          <v-container fluid>
            <router-view/>
          </v-container>
      </v-content>
    </v-app>
  </div>
</template>
<script>
import PageHeader from "@/components/Header";
export default {
  name: 'App',
  components:{
    PageHeader
  }
}
</script>
<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
