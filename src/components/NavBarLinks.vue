<template>
    <b-navbar  class="navbarMain">
        <b-navbar-nav >
            <b-nav-item><router-link to='/'> Upload Players</router-link></b-nav-item> 
            <b-nav-item  ><router-link to='/view_delete'>View/Delete Resources</router-link></b-nav-item> 
        </b-navbar-nav>
  </b-navbar>

  
</template>

<script>
export default {
  name: 'NavBarLinks',
}
</script>

<style>
 .navbar{
    background: rgba(249, 250, 250, 1);
    height:  5em;
    color:rgb(6, 6, 102)!important;
 }
 .nav-item{
     color:rgb(6, 6, 102)!important;
     font-weight: bold;
 }
 .nav-link{
    color:rgba(18, 98, 248, 1)!important; 
 }
 .router-link-exact-active {
  font-style: italic;
  text-decoration: underline;
}
</style>