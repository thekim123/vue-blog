<template>
    <div>
        <h5>{{blogExample[id].title}}</h5>
        <p>{{ blogExample[id].date }}</p>
        <p>{{blogExample[id].content}}</p>
    </div>
</template>

<script>
import blogExample from '@/assets/blog-example';

export default {
    name: 'DetailView',
    data(){
        return{
            id: this.$route.params.id,
            blogExample: blogExample
        }
    }
}
</script>

<style>

</style>