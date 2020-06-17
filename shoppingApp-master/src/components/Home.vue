<template>
  <div class="home">
    <home-header></home-header>
    <div class="home-main">
      <transition-group enter-active-class="slideInRight">
        <ul class="goods animated" :key="animatedCurrentKey">
          <li v-for="(item, index) in goods" class="one-com" v-show="isCurrent(item.kind)" v-bind:key="index">
            <one-commodity
              :itemId="item.id"
              :imgUrl="item.img"
              :title="item.title"
              :content="item.content"
              :price="item.price"
              :count="0"
             ></one-commodity>
          </li>
        </ul>
        <div :key="'0' + animatedCurrentKey">
          <p class="no-more-goods">没有更多商品啦，敬请期待!!!</p>
        </div>
      </transition-group>
    </div>

    <el-dialog
    class="el-alert"
      title="提示"
      :visible.sync="dialogVisible"
      width='60%'>
      <p>{{titles}}-我是一只小菜鸟</p>
      <img src="../../static/zhangdawan.png">
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisibles()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import OneCommodity from './HomeOneCommodity.vue'
import HomeHeader from './HomeHeader.vue'

export default {
  name: 'home',
  data () {
    var UA = navigator.userAgent;
    var ipad = !!(UA.match(/(iPad).*OS\s([\d_]+)/)),
        isIphone = !!(!ipad && UA.match(/(iPhone\sOS)\s([\d_]+)/)),
        isAndroid = !!(UA.match(/(Android)\s+([\d.]+)/)),
        isPC = (isIphone || isAndroid || ipad);
    return {
      goods:[],
      dialogVisible:true,
      titles:''
    }
  },
  computed: {
    animatedCurrentKey () {
      return this.$store.state.GoodsCurrentSelKind;
    }
  },
  methods: {
    //分类按钮点击时
    isCurrent (itemKind) {
      let currentKind = this.$store.state.GoodsCurrentSelKind;
      if (currentKind === 0) {
        //0表示全部商品
        return true;
      } else {
        return itemKind === currentKind;
      }
    },
    dialogVisibles(){
      this.$store.dispatch('muce','actions炮筒')
      this.dialogVisible=this.$store.state.dialogVisible
      console.log(this.$store.state.muces)
    }
  },
  components: {
    OneCommodity: OneCommodity,
    HomeHeader: HomeHeader,
  },
  //本地测试：http://localhost:8080/static/data/goods.json
  //gitHub：/shoppingApp/static/data/github-goods.json
  //阿里云：
  mounted () {
    this.axios.get('http://127.0.0.1:7777/static/data/goods.json')
    .then(res => {
      console.log(res,"res")
      this.goods = [...res.data];
    })
    .catch(() =>{
      this.axios.get('http://127.0.0.1:7778/static/data/goods.json')
      .then(res => {
        this.goods = [...res.data];
      })
    })
  
      this.titles=this.$store.state.muces
        console.log(this.titles,this.$store.state.muces,"s")
  },

}
</script>

<style lang="scss" scoped>
@import "../assets/css/variable.scss";

.home{
  width: 100%;
  padding-bottom: $NavHeight + 5px;
  padding-top: $HomeHeaderHeight;

  .home-main{
    width: 100%;
    overflow-x: hidden;
  }
  .goods{
    width: 100%;
    list-style: none;
    padding: 0;
  }
  .goods>li{
    width: 100%;
  }
  .no-more-goods{
    height: 40px;
    line-height: 40px;
  }
  .slideInRight{
    animation-duration: 0.25s;
  }
  .el-alert{
    margin: 0 auto;

    p{
      font-size: 1.4rem;
      color: rosybrown;
    }
    img{
      width: 100%;
    }

   
  }



}

</style>
