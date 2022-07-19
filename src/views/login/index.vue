<template>
  <div class="add">
    <div class="lest">
      <h1>欢迎光临</h1>
    </div>
    <!-- tab -->
    <div class="tap">
      <h1>欢迎回来</h1>
      <h2>——————账户密码登录——————</h2>

      <el-form
        :model="form"
        status-icon
        :rules="rules"
        ref="formRef"
        class="demo-ruleForm"
      >
        <el-form-item prop="username">
          <el-input
            v-model="form.username"
            placeholder="请输入用户名"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="form.password"
            placeholder="请输入密码"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm" v-loading='loading'>确定登录</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { GetList } from "@/api/resquery";
import { setItem } from "@/utlis/storage.js";
import { Message } from "element-ui";
export default {
  data() {
    return {
      loading:false,
      form: {
        username: "admin",
        password: "admin",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  // 计算属性
  computed: {},
  // 载入后生命周期函数
  mounted() {},
  // 监听属性
  watch: {},
  // 使用data属性里面的方法
  methods: {
    submitForm() {
      this.$refs.formRef.validate(async (valid) => {
        if (valid) {
          const { data } = await GetList(this.form);
          this.$message({
            showClose: true,
            message: "恭喜你，这是一条成功消息",
            type: "success",
          });
          this.loading=true
          if (data.data.token) {
            setItem("token", data.data.token);
          }
          this.$router.push("/");
        } else {
          console.log("error submit!!");
          this.loading=false
          return false;
        }
      });
    },
  },
  // 创建后
  created() {},
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.add {
  width: 100%;
  height: 100vh;
  background-color: aqua;
}
.tap {
  width: 400px;
  height: 100vh;
  background-color: #fff;
  padding: 20px;
  float: right;
  padding-top: 200px;
  text-align: center;
  h2 {
    color: #999;
    margin: 20px 0;
  }
  h1 {
    font-size: 28px;
    font-weight: 600;
  }
}
.lest {
  float: left;
  width: 60%;
  h1 {
    color: #fff;
    font-size: 50px;
    font-weight: 800;
    text-align: center;
    margin-top: 150px;
  }
}
</style>
