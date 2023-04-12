<template>
    <div>
        
        <!-- <router-link :to="'/detail/'+blogData.id"> -->
            <h5 @click="$router.push('/detail/'+blogData.id)"> {{blogData.title}}</h5>
        <!-- </router-link> -->
    </div>
</template>

<script>
export default {
    name:'DiaryList',
    props:{
        blogData: Object,
    },
}
</script>

<style>

</style>