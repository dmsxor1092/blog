<template>
    <div>
  <div v-for="(b,i) in blog" :key ="i">
    <h5 @click="$router.push(`/detail/${i}`)">{{blog[i].title}}</h5>
    <p>{{blog[i].date}}</p>
  </div>
  
</div>
</template>

<script>
export default {
//eslint-disable-next-line
name :'ListApp',
data() {
    return {
        
    }
},
props:{
    blog: Array,
}
}
</script>

<style>

</style>