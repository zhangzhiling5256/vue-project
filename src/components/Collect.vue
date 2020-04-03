<template>
  <div class="container">
    <el-select v-model="value" placeholder="请选择">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <el-button type="success" round @click="submit('search')">成功按钮</el-button>

    <el-table
      :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
      :current-page.sync="currentPage"
      style="width: 100%"
    >
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
    <!-- <el-pagination
      background
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      :page-sizes="[10, 20, 30, 40, 50, 100]"
      :page-size="pageSize"
      @size-change="handleSizeChange"
      @current-change="current"
      :current-page.sync="currentPage"
    ></el-pagination>-->
    <Page :total="total" :pageSizes="[10,15,20]" :pageSize="pageSize" @handleSizeChange="handleSizeChange" @current="current" :cur="currentPage"></Page>
  </div>
</template>
<script>
import * as TYPES from "../store/mutations-types.js";
import { Table, Button } from "element-ui";
import { getTable } from "../api/index";
import Page from "../components/page";
export default {
  data() {
    return {
      msg: "",
      tableData: [],
      options: [
        {
          value: 1,
          label: "王小虎"
        },
        {
          value: 2,
          label: "王小"
        }
      ],
      value: "",
      total: 10,
      currentPage: 1,
      pageSize: 10
    };
  },
  async created() {
    let data = await getTable({
      name: ""
    });
    // console.log(data);
    this.tableData = data.data;
    this.total = data.total;
  },
  methods: {
    async submit(val) {
      let res = await getTable({
        name: this.value
      });
      let { data } = res;
      this.tableData = data;
      this.total = res.total;
      this.currentPage = res.cur;
    },
    handleSizeChange(val) {
      this.pageSize = val;
    },
    current(val) {
      this.currentPage = val;
    }
  },
  computed: {
    getValue() {
      return this.$store.state.prod;
    },
    getVal() {
      return this.$store.getters.getValue;
    }
  },
  components: { Table, Button, Page }
};
</script>
<style scoped>
</style>