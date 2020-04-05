<template>
  <!-- <div class="container">
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
    <Page :total="total" :pageSizes="[10,15,20]" :pageSize="pageSize" @handleSizeChange="handleSizeChange" @current="current" :cur="currentPage"></Page>
    <el-checkbox v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
    <div style="margin: 15px 0;"></div>
    <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
      <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
    </el-checkbox-group>
    <Button type="success" @click="fn">点击</Button>
  </div>-->
  <el-table :data="tableData" style="width: 100%" @row-click="rowClick">
    <el-table-column label="日期" width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column label="姓名" width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)"
          ref="button11"
          :type="scope.row.flag?'warning':'success'"
        >编辑</el-button>
        <!-- ref="button11" -->
        <!-- :type="button11" -->
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
import { modifyName } from "../api/index";
export default {
  data() {
    return {
      tableData: [
        {
          id: 1,
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: 2,
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          id: 3,
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          id: 4,
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      button11: ""
    };
  },
  created() {},
  methods: {
    async getModifyNameData() {},

    rowClick(index, row) {
      // console.log(index, row, "111"); //只能拿到当前行的数据
    },
    async handleEdit(i, row) {
      let { id } = row;
      let res = await modifyName({ id });
      let { data } = res;
      this.tableData.splice(i, 1, data[0]);
      this.$refs.button11 = "warning";
      // if (this.tableData[i].id == data[0].id) {
      //   this.button11 = "warning";
      // }
      // console.log(data[0].id);
      // this.tableData = this.tableData.map((item, index) => {
      //   if (item.id == data[0].id) {
      //     item = data;
      //   }
      //   return itme;
      // });

      console.log(this.tableData, "1");
      // console.log(index, row, "sadsas"); //能拿到当前行的index和数据
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};

// import * as TYPES from "../store/mutations-types.js";
// import { Table, Button } from "element-ui";
// import { getTable } from "../api/index";
// import Page from "../components/page";

// const cityOptions = ["上海", "北京", "广州", "深圳"];
// export default {
//   data() {
//     return {
//       checkAll: true,
//       checkedCities: [],
//       cities: ["上海", "北京", "广州", "深圳"],
//       isIndeterminate: true
//     };
//   },
//   created() {
//     for (let i = 0; i < this.cities.length; i++) {
//       let item = this.cities[i];
//       this.checkedCities.push(item);
//     }
//   },
//   methods: {
//     handleCheckAllChange(val) {
//       console.log(val);
//       this.checkedCities = val ? this.cities : [];
//       this.isIndeterminate = false;
//     },
//     handleCheckedCitiesChange(value) {
//       let checkedCount = value.length;
//       this.checkAll = checkedCount === this.cities.length;
//       this.isIndeterminate =
//         checkedCount > 0 && checkedCount < this.cities.length;
//     }
//   }
// };
// export default {
//   data() {
//     return {
//       msg: "",
//       tableData: [],
//       options: [
//         {
//           value: 1,
//           label: "王小虎"
//         },
//         {
//           value: 2,
//           label: "王小"
//         }
//       ],
//       value: "",
//       total: 10,
//       currentPage: 1,
//       pageSize: 10
//     };
//   },
//   async created() {
//     let data = await getTable({
//       name: ""
//     });
//     // console.log(data);
//     this.tableData = data.data;
//     this.total = data.total;
//   },
//   methods: {
//     async submit(val) {
//       let res = await getTable({
//         name: this.value
//       });
//       let { data } = res;
//       this.tableData = data;
//       this.total = res.total;
//       this.currentPage = res.cur;
//     },
//     handleSizeChange(val) {
//       this.pageSize = val;
//     },
//     current(val) {
//       this.currentPage = val;
//     }
//   },
//   computed: {
//     getValue() {
//       return this.$store.state.prod;
//     },
//     getVal() {
//       return this.$store.getters.getValue;
//     }
//   },
//   components: { Table, Button, Page }
// };
</script>
<style scoped>
</style>