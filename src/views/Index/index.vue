<!--
 * @Author: MuFeng
 * @Date: 2023/5/1 9:07
 * @FileDescription:
 -->
<script setup>
import Nav from "@/components/index/Nav.vue";
import {ref} from "vue";

const blogName=ref("MuFeng‘s Blog")
const categoryList=ref([])
</script>

<template>
<Nav :blogName="blogName" :categoryList="categoryList"></Nav>
</template>

<style scoped>

</style>
