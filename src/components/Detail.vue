<template>
  <div class="detailContainer">
    <Mheader :back="true">详情</Mheader>
    <ul>
      <li v-for="(item,index) in bookInfoData" :key="index">
        <img :src="item.bookimgsrc" alt />
        <h4>{{item.bookname}}</h4>
        <p>{{item.bookinfo}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import Mheader from "../base/Mhead";
import { getBookInfo } from "../api";
export default {
  data() {
    return {
      bookInfoData: []
    };
  },
  mounted() {
    this.getBookInfoData();
  },
  methods: {
    async getBookInfoData() {
      this.bookInfoData = await getBookInfo({ id: this.$route.params.bid });
    }
  },
  computed: {},
  components: { Mheader }
};
</script>
<style scoped>
.detailContainer {
  position: absolute;
  top: 40px;
}
</style>