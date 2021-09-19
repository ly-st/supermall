<template>
<div class="recommend">
  <div v-for="item in recommend" class="recommend-item">
    <a :href="item.link">
      <img :src="item.image" alt="">
      <div>{{item.title}}</div>
    </a>
  </div>
</div>
</template>

<script>
export default {
  name: "RecommendView",
  props:{
    recommend:Array
  },
  data(){
    return {

    }
  },
}
</script>

<style scoped>
.recommend {
  display: flex;
  width: 100%;
  padding: 10px 0 20px;
  border-bottom: 10px solid #eee;
}
.recommend-item {
  flex: 1;
  width: 25%;
  text-align: center;
  font-size: 12px;
}
.recommend-item img {
  width: 90%;
  margin-bottom: 8px;
}

</style>
