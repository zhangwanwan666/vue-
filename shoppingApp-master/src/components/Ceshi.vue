<template>
  <div class="edit-address-page">
    <header>
      <span class="toProfile" @click="toProfile">
        <i class="el-icon-arrow-left"></i>
      </span>
      <h3>我的小宝藏</h3>
    </header>
    <main>
      <ul class="all-address" v-if="allAddress.length > 0">
        <li class="address" v-for="(item, index) in allAddress" v-bind:key="index">
          <p>{{ item.name }}</p>
          <p>{{ item.phone }}</p>
          <p>{{ item.city + item.detailAdd }}</p>
          <el-button type="text" @click="toModifyAddress(index)">编辑</el-button>
        </li>
      </ul>
    </main>
    <main>
      <ul class="all-address" v-if="listAdrass.length > 0">
        <li class="address" v-for="(item, index) in listAdrass" v-bind:key="index">
          <span>{{item[0]}}:</span>
          <span>{{item[1]}}</span>
        </li>
      </ul>
    </main>
    <mt-checklist title="复选框列表" v-model="value" :options="['选项A', '选项B', '选项C']"></mt-checklist>
    {{value}}
    <div class="n"></div>
    <footer>
      <el-button type="danger" @click="toAdressInputForm">新增收货地址</el-button>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listAdrass: [],
      value: []
    };
  },
  computed: {
    allAddress() {
      // console.log(this.$store.state.address,"this.$store.state.address")
      return this.$store.state.address;
    }
  },
  created() {
    let address = this.$store.state.address;
    let as = [];
    address.map((item, index) => {
      as.push(
        ["姓名", item.name],
        ["电话", item.phone],
        ["所在城市", item.city],
        ["详细地址", item.detailAdd]
      );
    });
    this.listAdrass = as;
    console.log(as, "add");

    as.map((item, i) => {
      console.log(item[0], item[1]);
    });
  },
  methods: {
    toProfile() {
      this.$router.push({
        path: "/Profile"
      });
      //解决主页与详情页切换时，菜单栏无法更新获取当前路由的问题
      this.$store.state.cartCounter++;
      this.$store.state.cartCounter--;
    },
    toAdressInputForm() {
      this.$router.push({
        path: "/Profile/AddNewAddress"
      });
    },
    toModifyAddress(index) {
      this.$router.push({
        path: "/Profile/ModifyAddress",
        query: {
          index: index
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/variable.scss";

.edit-address-page {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #f5f5f5;
  header {
    position: relative;
    height: 5rem;
    border-bottom: 0.1rem solid #eee;
    line-height: 5rem;
    background-color: #fff;
    .toProfile i {
      position: absolute;
      left: 1rem;
      font-size: 2rem;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  main {
    margin-top: 1rem;
    text-align: left;
    line-height: 2.3rem;
    .all-address {
      background-color: #fff;
      .address {
        position: relative;
        padding: 1rem;
        border-top: 0.1rem solid #eee;
        .el-button {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
  }
  footer {
    // position: fixed;
    // width: 100%;
    // bottom: 0.1rem;
    // left: 0;
    // .el-button--danger{
    //   width: 90%;
    //   background-color: $mainRed;
    // }
  }
  .n {
    height: 10px;
    width: 100%;
    margin-bottom: 100px;
  }
}
</style>