<template>
  <div>
    <!-- <Header :back="true">首页</Header> -->
    <!-- <div class="bannerBox">
      <Loading v-if="looding"></Loading>
      <template v-else>
        <Swiper :swiperList="bannerData"></Swiper>
        <div class="container">
          <h3>热门图书</h3>
          <ul>
            <li v-for="(item,index) in bookData" :key="index">
              <img v-lazy="item.bookimgsrc" />
              <span>{{item.bookinfo}}</span>
            </li>
          </ul>
        </div>
      </template>
    </div> -->
    <ul class="container">
      <li v-for="(item,index) in list" :key="index">
        <h3>{{item}}</h3>
      </li>
    </ul>
  </div>
</template>
<script>
import Header from "../base/Mhead";
import Swiper from "../base/swiper";
import Loading from "../base/loading";
import { getBannerData, getBookData, getAll, getShishishuxin } from "../api";
export default {
  data() {
    return {
      bannerData: [],
      bookData: [],
      looding: true,
      list: [] // 获取的数据列表
    };
  },
  created() {
    // this.getBanner(); //获取轮播图数据
    // this.getbook(); //获取列表书
    this.getImgData();
    this.getData();
  },
  methods: {
    // async getBanner() {
    //   this.bannerData = await getBannerData();
    // },
    // async getbook() {
    //   this.bookData = await getBookData();
    //   console.log(typeof this.bookData)
    // }
    async getImgData() {
      let [bannerData, bookData] = await getAll();
      this.bannerData = bannerData;
      this.bookData = bookData;
      this.looding = false;
    },
    // 这是获取数据的函数
    async getData() {
      let data = await getShishishuxin();
      this.list=data.data;
    },
    // 这是一个定时器
    timer() {
      return setTimeout(() => {
        this.getData();
      }, 5000);
    }
  },
  watch: {
    list() {
      this.timer();
    }
  },
  destroyed() {
    clearTimeout(this.timer);
  },
  computed: {},
  components: { Header, Swiper, Loading }
};
</script>
<style scoped lang="less">
.container {
  width: 90%;
  margin: 0 auto;
  h3 {
    padding: 5px 0;
    color: brown;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 10px;
    li {
      width: 50%;
      text-align: center;
      margin: 5px 0;
      img {
        width: 100%;
      }
    }
  }
}
</style>