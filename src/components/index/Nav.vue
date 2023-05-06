<!--
 * @Author: MuFeng
 * @Date: 2023/5/1 12:12
 * @FileDescription: 首页头部标签
 -->
<script setup lang='ts'>
import { ref } from 'vue'

const blogName = ref<string>()

const props=defineProps({
  blogName: String,
  categoryList: Array
})


</script>
<template>
  <div>
    <div>
      <!--博客名-->
      <router-link to='/'>
        <h3>{{ props.blogName }}</h3>
      </router-link>
      <!--首页-->
      <router-link to='/home'>
        <i></i>
        <span>首页</span>
      </router-link>
      <!--分类-->
      <el-dropdown>
        <span>
          <i></i>
          <span>分类</span>
        </span>
        <el-dropdown-menu>
          <el-dropdown-item :command="category.name" v-for="(category,index) in props.categoryList" :key="index">{{ category.name }}></el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <!--归档-->
      <router-link to='#'>
        <i></i>
        <span>归档</span>
      </router-link>
      <!--动态-->
      <router-link to='#'>
        <i></i>
        <span>动态</span>
      </router-link>
      <!--友人帐-->
      <router-link to='#'>
        <i></i>
        <span>友人帐</span>
      </router-link>
      <!--关于我-->
      <router-link to='#'>
        <i></i>
        <span>关于我</span>
      </router-link>
      <el-autocomplete>
        <i></i>
        <template>
          <div></div>
          <span></span>
        </template>
      </el-autocomplete>
      <button>
        <i></i>
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>
