<template>
  <div class="footer">
    <router-link to="/home">
      <i class="glyphicon glyphicon-home"></i>
      <span>首页</span>
    </router-link>
    <router-link to="/list">
      <i class="glyphicon glyphicon-th-list"></i>
      <span>详情</span>
    </router-link>
    <router-link to="/collect">
      <i class="glyphicon glyphicon-heart"></i>
      <span>收藏</span>
    </router-link>
    <router-link to="/add">
      <i class="glyphicon glyphicon-plus"></i>
      <span>添加</span>
    </router-link>
  </div>
</template>
<style scoped lang="less">
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  display: flex;
  border-top: 1px solid #ccc;
  a {
    display: flex;
    flex-direction: column;
    color: yellowgreen;
    flex: 1;
    align-items: center;
    justify-content: center;
  }
  a.router-link-active {
    color: red;
  }
}
</style>
