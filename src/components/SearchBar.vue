<template>
    <div class="choose-items">
        <div class="select-item border">
            <select name="" id="" class="" @change="orderSelector">
                <option value="asc" selected>最新貼文</option>
                <option value="dasc">最舊貼文</option>
            </select>
        </div>
        <div class="search-item border">
            <input type="text" v-model="keyword" @keyup.enter="searchForKeyword" class="search-input" placeholder="搜尋貼文">
            <p class="icon-search">
                <span class="material-icons "> search </span>
            </p>
        </div>
    </div>
</template>

<script>
import emitter from "../assets/emitter";
export default {
  data() {
    return {
        keyword:''
    }
  },
  methods: {
    orderSelector(e) {
      const sort = e.target.value;
      emitter.emit('orderByCreatedAt', sort);
    },
    searchForKeyword() {
      emitter.emit('searchForKeyword', this.keyword);
      this.keyword = '';
    },
}

}
</script>

<style scoped lang="scss">
    /* 動態牆左邊控制項開始 */

    /* 下拉選單與搜尋列 */
    .choose-items {
        display: flex;
    }

    /* 下拉選單 */
    .select-item {
        display: flex;
        align-items: center;
    }

    select {
        padding: 12px 16px;
        background: #fff;
        border: none;
        margin-right: 12px;
    }

    /* 搜尋框與放大鏡 */
    .search-item {
        width: 100%;
        display: flex;
        align-items: center;
        margin-left: 12px;
    }

    /* 搜尋框 */
    .search-item .search-input {
        display: block;
        width: 100%;
        padding: 12px 16px;
        outline: none;
        border: none;
        font: 'Azeret Mono';
    }

    .search-item .search-input::placeholder {
        color: #9B9893;
    }

    /* 放大鏡icon */
    .search-item .icon-search {
        background: #03438D;
        height: 46px;
        width: 46px;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>