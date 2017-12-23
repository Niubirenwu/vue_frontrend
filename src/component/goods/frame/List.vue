<template>
  <!-- 列表 -->
  <div class="section" >
    <div v-for="item in listData.goodsGroup" :key="item.level1cateid">
         <!--子类-->
    <div class="main-tit">
      <h2>{{item.catetitle}}</h2>
      <p>
        <router-link :to="{name:'gd',params:{id:subitem.subcateid}}" v-for="subitem in item.level2catelist" :key="subitem.subcateid">{{subitem.subcatetitle}}</router-link>

      </p>
    </div>
    <!--/子类-->
    <div class="wrapper clearfix">
      <div class="wrap-box">
        <ul class="img-list">
          <li v-for="itemDatas in item.datas" :key="itemDatas.artID">
            <router-link :to="{name:'gd',params:{id:itemDatas.artID}}">
              <div class="img-box">
                <img :src="itemDatas.img_url">
              </div>
              <div class="info">
                <h3>{{itemDatas.artTitle}}</h3>
                <p class="price">
                  <b>¥{{itemDatas.sell_price}}</b>元</p>
                <p>
                  <strong>库存 {{itemDatas.stock_quantity}}</strong>
                  <span>市场价：
                    <s>{{itemDatas.market_price}}</s>
                  </span>
                </p>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    </div>
   
  </div>
</template>

<script>
export default {
  data(){
    return {
      listData:{
        goodsGroup:[]
      }
    }
  },
  methods:{
    getListData(){
      this.$http.get(this.$api.goodsContent)
      .then(rsp=>{
        this.listData.goodsGroup =rsp.data.message;
      })
    }
  },
  created(){
    this.getListData();
  }
};
</script>

<style scoped>

</style>