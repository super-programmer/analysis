<template>
  <div class="analy-detail-tabs-box">
    <div class="m-table">
      <table>
        <tr>
          <th>
            知识点
          </th>
          <th>
            正确率
          </th>
        </tr>
        <tr v-for="item in knos">
          <td>
            {{item.name}}
          </td>
          <td>
            {{(item.ratio*100).toFixed(0)}}%
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: ['knos'],
  name: 'stuKnowledge'
}
</script>

<style scoped>

</style>
