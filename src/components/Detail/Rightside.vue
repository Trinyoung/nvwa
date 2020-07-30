<template>
  <div class="broadSide my-3">
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
.broadSide .sidebar-heading {
  font-size: 1.5rem;
  margin-top: 20px;
  color: aliceblue;
}
.broadSide {
  color: aliceblue;
  background-image: url('../../../static/侧边栏背景.jpeg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.broadSide .text-muted {
  font-size: 1.1rem;
  color: aliceblue;
}
.avatar-head {
  margin-top: 2rem;
}
.avatar {
  border-radius: 50%;
  width: 30%
}

#sidebarMenu {
  padding-top: 1rem;
}

.list-info {
  list-style-type: none;
}

/* .broadside-bottom {
  height: 5rem;
} */
/* .broadSide {
  background: cadetblue;
  border: 1px solid green;
  height: 150px;
} */
</style>
