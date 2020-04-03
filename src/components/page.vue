<template>
  <el-pagination
    background
    layout="total, sizes, prev, pager, next, jumper"
    :total="total"
    :page-sizes="pageSizes"
    :page-size="pageSize"
    @size-change="handleSizeChange"
    @prev-click="clickPrevt"
    @next-click="clickNext"
    @current-change="current"
    :current-page="cur"
  ></el-pagination>
  <!-- :current-page.sync="cur" -->
</template>
<script>
export default {
  props: {
    total: {
      // 总页
      type: Number,
      default: 10
    },
    pageSizes: {
      // 每页展示多少条的数组
      type: Array,
      default: [10, 20, 30, 40, 50, 100]
    },
    pageSize: {
      // 每页10条数据
      type: Number,
      default: 10
    },
    cur: {
      // 当前页数1
      type: Number,
      default: 1
    }
  },
  data() {
    return {};
  },
  methods: {
    current(val) {
      // 让当前页数累加
      this.$emit("current", val);
    },
    clickPrevt() {},
    clickNext() {},
    handleSizeChange(val) {
      // 让当前显示的十条数据累加
      this.$emit("handleSizeChange", val);
    }
  }
};
</script>