<template>
  <div class="home">

    张俊辉
  </div>
</template>

<script>
import OneCommodity from './HomeOneCommodity.vue'
import HomeHeader from './HomeHeader.vue'

export default {
  name: 'ceshi',
  data () {
    var UA = navigator.userAgent;
    var ipad = !!(UA.match(/(iPad).*OS\s([\d_]+)/)),
        isIphone = !!(!ipad && UA.match(/(iPhone\sOS)\s([\d_]+)/)),
        isAndroid = !!(UA.match(/(Android)\s+([\d.]+)/)),
        isPC = !(isIphone || isAndroid || ipad);
    return {
      goods:[],
      dialogVisible: isPC
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
  },
  components: {
    OneCommodity: OneCommodity,
    HomeHeader: HomeHeader,
  },
  //本地测试：http://localhost:8080/static/data/goods.json
  //gitHub：/shoppingApp/static/data/github-goods.json
  //阿里云：
  mounted () {
    this.axios.get('http://127.0.0.1:7778/static/data/goods.json')
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
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/variable.scss";

.home{
  width: 100%;
  padding-bottom: $NavHeight + 5px;
  padding-top: $HomeHeaderHeight;
}
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
</style>
