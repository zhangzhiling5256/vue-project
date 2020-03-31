<template>
  <div>
    <div class="outer_label">
      <img class="inner_label login_logo" src="../assets/logo.png" />
    </div>
    <div class="login_form">
      <input
        type="text"
        class="qxs-ic_user qxs-icon"
        placeholder="用户名"
        v-model="userName"
        id="user"
      />
      <input
        type="password"
        class="qxs-ic_password qxs-icon"
        placeholder="密码"
        v-model="password"
        @keyup="add"
      />
      <!--<button class="login_btn el-button el-button&#45;&#45;primary is-round" type="primary" round>登录</button>-->
      <el-button
        class="login_btn"
        @click.native="login"
        type="primary"
        round
        :loading="isBtnLoading"
      >登录</el-button>
      <div style="margin-top: 10px">
        <span style="color: #000099;" @click="login">司机账号登陆</span>
        <input type="checkbox" v-model="flag" />
        <span style="float: right;color: #A9A9AB">记住密码</span>
      </div>
    </div>
  </div>
</template>
 
 
 
<script>
import { userLogin, getUserInfo } from "../api";
import { Message, Button } from "element-ui";
import * as TYPES from "../store/mutations-types";
import compile from "../utils/secret";
export default {
  data() {
    return {
      userName: "",
      password: null,
      isBtnLoading: false,
      flag: false
    };
  },
  created() {
    let flag = localStorage.getItem("flag");
    if (flag === "true") {
      this.flag = true;
    } else {
      this.flag = false;
    }
    if (this.flag) {
      let name = localStorage.getItem("user_name"),
        pwd = localStorage.getItem("user_pwd");
      this.userName = compile.Decrypt(name);
      if (pwd) {
        this.password = compile.Decrypt(pwd);
      }
    } else {
      let name = localStorage.getItem("user_name");
      this.userName = compile.Decrypt(name);
    }
  },
  computed: {
    btnText() {
      if (this.isBtnLoading) return "登录中...";
      return "登录";
    }
  },
  methods: {
    async login() {
      if (!this.userName) {
        this.$message.error("请输入用户名");
        return;
      }
      if (!this.password) {
        this.$message.error("请输入密码");
        return;
      }
      let { ok, msg, token, name, pwd } = await userLogin({name: this.userName,pwd: this.password });
      if (ok) {
        this.$message({
          message: msg,
          type: "success"
        });
        setTimeout(() => {
          this.$router.push("/home");
        }, 1000);
        localStorage.setItem("token", token);
        // 将登录名使用vuex传递到Home页面
        if (this.flag) {
          this.$store.commit(TYPES.GET_LOGIN, {
            name,
            pwd
          });
        } else {
          this.$store.commit(TYPES.GET_LOGIN, {
            name,
            pwd: null
          });
        }
      } else {
        this.$message({
          message: "登录失败," + msg,
          type: "error"
        });
      }
    },
    add() {}
  },
  watch: {
    flag(newVal, lodVal) {
      !newVal ? localStorage.removeItem("user_pwd") : null;
      localStorage.setItem("flag", newVal);
      // !newVal ?localStorage.setItem("flag",newVal) :localStorage.setItem("flag",newVal);
    }
  }
};
</script>
<style scoped>
.login_form {
  padding-top: 10%;
  padding-left: 10%;
  padding-right: 10%;
}
.qxs-ic_user {
  background: url("../assets/user.png") no-repeat;
  background-size: 13px 15px;
  background-position: 3%;
}
.qxs-ic_password {
  background: url("../assets/password.png") no-repeat;
  background-size: 13px 15px;
  background-position: 3%;
  margin-bottom: 20px;
}
.login_logo {
  height: 100%;
}
.login_btn {
  width: 100%;
  font-size: 16px;
  background: -webkit-linear-gradient(
    left,
    #000099,
    #2154fa
  ); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(
    right,
    #000099,
    #2154fa
  ); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(
    right,
    #000099,
    #2154fa
  ); /* Firefox 3.6 - 15 */
  background: linear-gradient(to right, #000099, #2154fa); /* 标准的语法 */
  filter: brightness(1.4);
}
</style>
