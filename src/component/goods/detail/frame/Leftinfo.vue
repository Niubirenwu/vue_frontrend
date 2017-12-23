<template>
  <div class="goods-spec">
    <h1>奔腾（BNTN） 380功放+纽约至尊 套装家庭影院</h1>
    <p class="subtitle">送美诗特TA20无线话筒1套+自拍神器杆！ DTS解码数字功放 HDMI、光纤、同轴多组输入输出 USB、蓝牙播放功能</p>
    <div class="spec-box">
      <dl>
        <dt>货号</dt>
        <dd id="commodityGoodsNo">SD6583245641</dd>
      </dl>
      <dl>
        <dt>市场价</dt>
        <dd>
          <s id="commodityMarketPrice">¥5880.00</s>
        </dd>
      </dl>
      <dl>
        <dt>销售价</dt>
        <dd>
          <em class="price" id="commoditySellPrice">¥4880.00</em>
        </dd>
      </dl>
    </div>

    <div class="spec-box">
      <dl>
        <dt>购买数量</dt>
        <dd>
          <div class="stock-box">
            <input id="commodityChannelId" type="hidden" value="2">
            <input id="commodityArticleId" type="hidden" value="98">
            <input id="commodityGoodsId" type="hidden" value="0">
            <input id="commoditySelectNum" type="text" maxlength="9" value="1" maxvalue="10" onkeydown="return checkNumber(event);">
            <a class="add" onclick="addCartNum(1);">+</a>
            <a class="remove" onclick="addCartNum(-1);">-</a>
          </div>
          <span class="stock-txt">
            库存
            <em id="commodityStockNum">10</em>件
          </span>
        </dd>
      </dl>
      <dl>
        <dd>
          <div class="btn-buy" id="buyButton">
            <button class="buy" onclick="cartAdd(this,'/',1,'/shopping.html');">立即购买</button>
            <button class="add" onclick="cartAdd(this,'/',0,'/cart.html');">加入购物车</button>
          </div>
        </dd>
      </dl>
    </div>

  </div>
</template>

<script>
export default {};
</script>

<style scoped>

</style>