<template>
  <div>
    <!-- 导航栏 -->
      <app-bread></app-bread>

    <!-- 商品详情 -->
    <div class="section">
      <div class="wrapper clearfix">
        <div class="wrap-box">
          <!--页面左边-->
          <div class="left-925">
            <div class="goods-box clearfix">
              <!--商品图片-->
              <div class="pic-box">
                  <app-left-img></app-left-img>
              </div>
              <!--/商品图片-->

              <!--商品信息-->
                <app-left-info></app-left-info>
              <!--/商品信息-->
            </div>

            <div id="goodsTabs" class="goods-tab bg-wrap">
              <!--选项卡-->
              <div id="tabHead" class="tab-head" style="position: static; top: 517px; width: 925px;">
                <ul>
                  <li>
                    <a class="selected" href="javascript:;">商品介绍</a>
                  </li>
                  <li>
                    <a href="javascript:;" class="">商品评论</a>
                  </li>
                </ul>
              </div>
              <!--/选项卡-->

              <!--选项内容-->
              <div class="tab-content entry" style="display:block;">
                内容
              </div>

              <div class="tab-content" style="display: block;">
                <!--网友评论-->
                  <app-comment></app-comment>

                <!--/网友评论-->
              </div>

            </div>

          </div>
          <!--/页面左边-->

          <!--页面右边-->
              <app-right></app-right>
          <!--/页面右边-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppBread from "./frame/BreadXie.vue";
import AppLeftImg from "./frame/LeftImg.vue";
import AppLeftInfo from "./frame/Leftinfo.vue";
import AppRight from "./frame/rightContent.vue";
import AppComment from "../../common/comment.vue";
export default {
    components:{
      AppBread:AppBread,
      AppLeftImg:AppLeftImg,
      AppLeftInfo:AppLeftInfo,
      AppRight:AppRight,
      AppComment:AppComment
    }
};
</script>

<style scoped>

</style>