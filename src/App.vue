<template>
  <div id="app">
    <transition name="fadeIn">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="fadeIn">
      <keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <Tab></Tab>
  </div>
</template>

<script>
import Tab from "./base/Tab";
export default {
  name: "App",
  components: { Tab }
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
a {
  text-decoration: none !important;
}
.fadeIn-enter{
  opacity: 0;
}
.fadeIn-enter-active{
  transition: all .3s linear;
}
.fadeIn-leave-active{
  transition: all .3s linear;
  opacity: 0;
}
.bannerBox {
  position: fixed;
  top: 40px;
  width: 100%;
  // height:220px;
  bottom: 50px;
  overflow: auto;
}
</style>
