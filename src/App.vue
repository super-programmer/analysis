<template>
  <div id="app">
    <Header :title="'作业系统'"></Header>
    <router-view/>
  </div>
</template>

<script>
import { Header } from 'ygui'
export default {
  name: 'App',
  components: {
    Header: Header
  }
}
</script>

<style>
</style>
