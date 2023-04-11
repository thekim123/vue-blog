<template>
    <div>
        
        <router-link :to="'/detail/'+  blogData.id">
            <h5> {{blogData.id }}. {{blogData.title}}</h5>
        </router-link>
    </div>
</template>

<script>
export default {
    name:'DiaryList',
        blogData: Object,
    }

</script>

<style>

</style>