<template>
  <div class="header">
    <slot v-if="back"></slot>
    <i class="glyphicon glyphicon-transfer" @click="goBack"></i>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props:{
      back:{
          type:Boolean,
          default:false
      }
  },
  methods:{
      goBack(){
          this.$router.push("/add");
      }
  }
};
</script>
<style scoped lang="less">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #afd9ee;
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-weight: bold;
  i {
    position: absolute;
    left: 10px;
    font-size: 20px;
    line-height: 40px;
  }
}
</style>