<template>
  <div class="broadSide">
    <ul>
      <li>1</li>
    </ul>
    <ul>
      <li>2</li>
    </ul>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      listItems: ['星辰大海', '人间百态', '车水马龙', '小桥流水', '大漠孤烟']
    }
  }
}
</script>
<style scoped>
.broadSide {
  background: cadetblue;
  border: 1px solid green;
  height: 150px;
}
</style>
