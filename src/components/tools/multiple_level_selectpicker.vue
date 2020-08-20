<template>
    <div class="dropdown open">
      <a id="asset_type_btn" role="button" data-toggle="dropdown" class="btn btn-default" href="javascript:;" aria-expanded="true">
          选择类型 <span class="caret"></span>
      </a>
      <ul class="dropdown-menu" role="menu" aria-labelledby="assert_type_btn">
          <li class="dropdown-submenu"><a tabindex="-1" class="disabled" id="typeId1" href="javascript:;">固定资产</a>
              <ul class="dropdown-menu">
                  <li class="dropdown-submenu"><a tabindex="-1" id="typeId3" href="javascript:;">房屋及构筑物</a>
                      <ul class="dropdown-menu">
                          <li class="dropdown-submenu"><a tabindex="-1" id="typeId12" href="javascript:;">测试</a>
                              <ul class="dropdown-menu">
                                  <li class="dropdown-submenu"><a tabindex="-1" id="typeId9"
                                                                  href="javascript:;">test</a>
                                      <ul class="dropdown-menu">
                                          <li><a tabindex="-1" href="javascript:;" id="typeId10"
                                                  onclick="selectType('10','再测试')">再测试</a></li>
                                      </ul>
                                  </li>
                              </ul>
                          </li>
                      </ul>
                  </li>
                  <li class="dropdown-submenu"><a tabindex="-1" id="typeId4" href="javascript:;">通用设备</a>
                      <ul class="dropdown-menu">
                          <li><a tabindex="-1" href="javascript:;" id="typeId11"
                                  onclick="selectType('11','电脑')">电脑</a></li>
                      </ul>
                  </li>
                  <li><a tabindex="-1" href="javascript:;" id="typeId5" onclick="selectType('5','专用设备')">专用设备</a></li>
                  <li><a tabindex="-1" href="javascript:;" id="typeId6" onclick="selectType('6','文物和陈列品')">文物和陈列品</a>
                  </li>
              </ul>
          </li>
          <li class="dropdown-submenu"><a tabindex="-1" class="disabled" id="typeId2" href="javascript:;">低值易耗品</a>
              <ul class="dropdown-menu">
                  <li class="dropdown-submenu"><a tabindex="-1" id="typeId7" href="javascript:;">易耗品</a>
                      <ul class="dropdown-menu">
                          <li class="dropdown-submenu"><a tabindex="-1" id="typeId13" href="javascript:;">测试易耗品</a>
                              <ul class="dropdown-menu">
                                  <li><a tabindex="-1" href="javascript:;" id="typeId15"
                                          onclick="selectType('15','添加易耗品')">添加易耗品</a></li>
                              </ul>
                          </li>
                      </ul>
                  </li>
                  <li class="dropdown-submenu"><a tabindex="-1" id="typeId8" href="javascript:;">低值物品</a>
                      <ul class="dropdown-menu">
                          <li><a tabindex="-1" href="javascript:;" id="typeId14" onclick="selectType('14','测试低值物品')">测试低值物品</a>
                          </li>
                      </ul>
                  </li>
              </ul>
          </li>
      </ul>
    </div>
</template>
<style scoped>
.dropdown-submenu {
  position: relative;
}
.dropdown-submenu > .dropdown-menu {
  top: 0;
  left: 100%;
  margin-top: -6px;
  margin-left: -1px;
  -webkit-border-radius: 0 6px 6px 6px;
  -moz-border-radius: 0 6px 6px;
  border-radius: 0 6px 6px 6px;
}
.dropdown-submenu:hover > .dropdown-menu {
  display: block;
}
.dropdown-submenu > a:after {
  display: block;
  content: " ";
  float: right;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
  border-width: 5px 0 5px 5px;
  border-left-color: #ccc;
  margin-top: 5px;
  margin-right: -10px;
}
.dropdown-submenu:hover > a:after {
  border-left-color: #fff;
}
.dropdown-submenu.pull-left {
  float: none;
}
.dropdown-submenu.pull-left > .dropdown-menu {
  left: -100%;
  margin-left: 10px;
  -webkit-border-radius: 6px 0 6px 6px;
  -moz-border-radius: 6px 0 6px 6px;
  border-radius: 6px 0 6px 6px;
}
</style>
