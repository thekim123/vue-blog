<template>
<DiaryList v-for="(blog, i) in blogExample" :key="i" :blogData="blog"/>
</template>

<script>
import blogExample from '../assets/blog-example.js';
import DiaryList from './DiaryList.vue';

export default {
    name: 'DiaryView',
    data(){
      return{
        blogExample: blogExample,
      }
    },
    components:{
      DiaryList: DiaryList,
    }
    
}
</script>

<style>

</style>