<template>
  <div id="app">
    <b-container fluid="xl">
      <NavBar/> 
      <NavBarLinks/>
      <router-view></router-view>
    </b-container>
  </div>
</template>

<script>
    import NavBar from './components/NavBar.vue'
    import NavBarLinks from './components/NavBarLinks.vue'

    export default {
      name: 'App',
      components: {
        NavBar,
        NavBarLinks
      }
    }
</script>

<style>
.body{
  background-color: rgba(146, 155, 154, 1);
}
.hrProp{
  height: 5em;
  background-color: rgba(249, 250, 250, 1) ;
  margin-top: 0%;
}
</style>
