<template>
  <div class>
    <Mheader :back="true">列表</Mheader>
    <div class="content">
      <ul>
        <router-link
          v-for="(item,index) in books"
          :key="index"
          :to="{name:'detail',params:{bid:item.id}} "
          tag="li"
        >
          <img v-lazy="item.bookimgsrc" />
          <div>
            <h4>{{item.bookname}}</h4>
            <p>{{item.bookinfo}}</p>
            <span>{{item.bookprice}}</span>
            <button @click="remove(item.id)">移除</button>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
import { getBookAll, deleteInfoBook } from "../api/index";
import Mheader from "../base/Mhead";

//javascript权威指南
//JavaScript权威指南（第6版 )
//69.5
//https://img11.360buyimg.com/n1/s200x200_jfs/t2047/63/2033152973/398005/5ea9044e/56ea5e6aN38c0f2b8.jpg


export default {
  data() {
    return {
      books: []
    };
  },
  created() {
    this.getBookAllData();
  },
  methods: {
    async getBookAllData() {
      this.books = await getBookAll({ methods: 1, id: 0 });
    },
    remove(id) {
        this.$alert("Sdsd")
    //   deleteInfoBook({ id }).then(res => {
    //       console.log(res)
    //     let { ok } = res;
    //     if (ok) {
    //       this.$message({
    //         type: "success",
    //         message: "删除成功"
    //       });
    //     } else {
    //       this.$message({
    //         type: "error",
    //         message: "删除成功"
    //       });
    //     }
    //   });
    }
  },
  computed: {},
  components: { Mheader }
};
</script>
<style scoped lang="less">
.content {
  ul {
    padding: 10px;
    li {
      display: flex;
      padding: 10px 0;
      border-block: 1px solid #f1f1f1;
      img {
        width: 160px;
        height: 140px;
      }
      h4 {
        font-size: 20px;
        line-height: 35px;
      }
      p {
        color: #2a2a2a;
        line-height: 25px;
      }
      span {
        color: red;
      }
      button {
        display: block;
        width: 60px;
        height: 25px;
        color: #fff;
        border-radius: 10px;
        border: none;
        background: orange;
      }
    }
  }
}
</style>