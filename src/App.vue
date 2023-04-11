<template>

<NavBar/>
<router-view></router-view>

</template>

<script>
import NavBar from './components/NavBar.vue';


export default {
  name: 'App',
  data(){
    return {

    }
  },
  components: {
    NavBar: NavBar,
  }
}
</script>

<style>
</style>
