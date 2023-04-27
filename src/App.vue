<script setup lang="ts">
import { GetTest } from '@/api/test'

const test = GetTest
</script>

<template>
<div>{{ test }}</div>
</template>

<style scoped>
</style>
