<template>
  <div class="home">
    <div class="header">
      <div class="rals">积云编程</div>
      <div class="img">
        <i class="el-icon-set-up"></i>
        <i class="el-icon-refresh-left q"></i>
      </div>
      <div class="list">
        <i class="el-icon-cpu"></i>
      </div>
    </div>
    <div class="top">
      <aside>
        <Aside
          v-for="(item, index) in this.List"
          :key="index"
          :item="item"
        ></Aside>
      </aside>
      <main>
        <Main></Main>
      </main>
    </div>
  </div>
</template>
<script>
import { GetCategory } from "@/api/resquery.js";
import { getItem } from "@/utlis/storage.js";
import Header from "@/components/Header.vue";
import Aside from "@/components/Aside.vue";
import Main from "@/components/Main.vue";
export default {
  // name:'Roles',
  data() {
    return {
      token: "",
      res: [],
      List: {},
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
    async GetList() {
      this.token = getItem("token");
      this.res = await GetCategory(this.token);
      this.List = this.res.data.data.menus;
      console.log(this.List);
    },
  },
  // 创建后
  created() {
    // this.GetList();
    console.log(this.GetList());
  },
  components: {
    Main,
    Header,
    Aside,
  },
};
</script>
<style lang="scss">
.header {
  background-color: rgba(67, 56, 202);
  color: #333;
  height: 10vh;
  color: #fff;
  display: flex;
  line-height: 60px;
  cursor: pointer;

  .rals {
    display: inline-block;
    width: 238px;
    text-align: center;
    // line-height: 60px;
    font-size: 30px;
  }
  .img {
    font-size: 24px;
  }
  .q {
    margin: 0 20px;
  }
  .list {
    float: right;
  }
}
.top {
  display: flex;
}
aside {
  color: #333;
  height: 90vh;
  width: 290px;
}

main {
  width: 100%;
  background-color: #e9eef3;
  color: #333;
}
</style>
