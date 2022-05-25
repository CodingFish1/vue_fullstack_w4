<template>
    <div class="wall-card border" v-for="item in userList" :key="item._id">
        <!-- 使用者發文資訊 -->
        <div class="wall-card-user">
            <p class="wall-card-user-img">
                <img :src="'data:image/png;base64,'+item.user.avatar" alt="user" class="nav-user-img">
            </p>
            <p class="wall-card-user-info">
                <span class="wall-card-user-name">{{item.user.name}}</span>
                <span class="wall-card-user-date">{{item.user.createdAt}}</span>
            </p>
        </div>
        <!-- 發文文章 -->
        <div class="wall-card-article">
            <span class="">{{item.content}}</span>
        </div>
        <!-- 發文圖片 -->
        <div class="wall-card-img">
            <img :src="item.image" alt="" class="img-fluid-nb">
        </div>
    </div>
</template>

<script>
import emitter from "../assets/emitter";
export default {
data () {
    return {
      userList: '',
    }
  },
  mounted () {
    emitter.on('orderByCreatedAt', (data)=>{
        this.getList(data)
    });
    emitter.on('searchForKeyword', (data)=>{
        this.updataList(data)
    });
    this.getList()
  },
  methods: {
    getList(data = 'asc') {
      this.$http.get(`${process.env.VUE_APP_API}/posts?timeSort=${data}`).then((res) => {
        this.userList = res.data.data
      })
    },
    updataList(keyword) {
      this.$http.get(`${process.env.VUE_APP_API}/posts?keyword=${keyword}`).then((res) => {
        this.userList = res.data.data
        console.log(this.userList)
      })
    }
  }
}
</script>

<style scoped lang="scss">
    .wall-card {
        margin-top: 16px;
        padding: 24px;
        box-shadow: 0px 3px 0px #000400;
        border-radius: 8px;
        padding-bottom: 0;
    }

    .wall-card-user {
        display: flex;
        align-items: center;
        margin-bottom: 16px;
    }

    .wall-card-user-img img {
        width: 45px;
        height: 45px;
    }

    .wall-card-user-info {
        margin-left: 12px;
    }

    .wall-card-user-name {
        display: block;
        font-family: 'Noto Sans TC', sans-serif;
        font-weight: bold;
    }

    /* 發文名字hover */
    .wall-card-user-name:hover {
        text-decoration: underline;
        color: #03438D;
        cursor: default;
    }

    .wall-card-user-date {
        display: block;
        font-size: 12px;
        color: #9B9893;
    }

    /* 發文內容 */
    .wall-card-article {
        font-family: 'Noto Sans TC', sans-serif;
        font-weight: normal;
        color: #000400;
        margin-bottom: 16px;
    }

    .wall-card-article span {
        display: block;
    }

    .wall-card-img {
        margin-bottom: 24px;
    }
    .img-fluid-nb{
        object-fit:cover;
        max-width:100%;
        height:100%
    }
</style>