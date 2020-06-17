

export default{
    addGoodsToCart (state, item) {
      item.isInCart = true;
      item.count++;
      state.cartGoods.push(item);
      state.cartCounter++;
    },
    adds(state,item){
      
      state.cardid++
    },
    deletes(){
      state.cardid--
    },
    deleteGoodsFromCart(state, itemId) {
      state.cartCounter--;
      state.cartGoods.some((val, index, Goods) => {
        if (val.id === itemId) {
          val.isInCart = false;
          val.count--;
          Goods.splice(index, 1);
          return true;
        }
      })
    },
    addGoods(state, itemId){
      state.cartCounter++;
      state.cartGoods.some(val => {
        if (val.id === itemId) {
          val.count++
          return true;
        }
      })
    },
    reduceGoods(state, itemId){
      state.cartCounter--;
      state.cartGoods.some(val => {
        if (val.id === itemId) {
          val.count--;
          return true;
        }
      })
    },
    changeCurrentSelKind(state, kind){
      state.GoodsCurrentSelKind = kind;
    },
    login(state, username){
      state.username = username;
      state.isLogin = true;
    },
    logout(state){
      state.isLogin = false;
    },
    addNewAddress(state, newAdd){
      state.address.push(newAdd);
    },
    modifyAddress(state, item){
      state.address[item.index] = item.value;
    },
    deleteAddress(state, index){
      state.address.splice(index, 1);
    },
    muce(state,data){
        state.muces=data
        state.dialogVisible=false
    }
  }