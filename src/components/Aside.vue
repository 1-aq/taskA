<template>
  <div class="Aside">
    <el-menu
      :style="{ width: collapse ? '64px' : '200px' }"
      default-active="2"
      router
      class="el-menu-vertical-demo"
    >
      <el-submenu :index="item.icon">
        <template slot="title">
          <i :class="'el-icon-' + item.icon"></i>
          <span>{{ item.name }}</span>
        </template>
        <el-menu-item-group
          v-for="(SubItem, SubIndex) in item.child"
          :key="SubIndex"
        >
          <el-menu-item
            :class="'el-icon-' + SubItem.icon"
            :index="SubItem.icon"
            >{{ SubItem.name }}</el-menu-item
          >
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default: "",
    },
    collapse: Boolean,
  },
  data() {
    return {};
  },
  // 计算属性
  computed: {},
  // 载入后生命周期函数
  mounted() {},
  // 监听属性
  watch: {},
  // 使用data属性里面的方法
  methods: {},
  // 创建后
  created() {
    // console.log(item);
  },
};
</script>
<style lang="scss"></style>
