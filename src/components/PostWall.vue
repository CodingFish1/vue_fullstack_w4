<template>
              <!-- 左邊動態牆 -->
<div class="col wall-left">
    <div class="edit-info ">
        <p class="border">
            <span class="edit-info-text">張貼動態</span>
        </p>
        <p class="border">
            <span class="edit-info-text">張貼動態</span>
        </p>
</div>

                <!-- 張貼區 -->
    <div class="post-block border">
        <div class="post-content">
            <span class="">貼文內容</span>
            <textarea rows="10" cols="10" placeholder="輸入您的貼文內容" class="border" v-model="content"></textarea>
        </div>
        <div class="post-img">
            <img v-if="isDisplay" :src="imageUrl">
            <input class="form-style"
                v-model.lazy="imageUrl"
                v-on:change="isUrl"
                type="text"
                name="imageUrl"
                id="imageUrl"
                placeholder="請輸入圖片網址"
            >
        {{message}}
        </div>
        <div class="post-btn">
            <button type="button" class="border" @click="newPost">送出貼文</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      user: '628e1b163ae6ad1fff2ff3a6',
      content: '',
      imageUrl: '',
      message: '',
      isDisplay: false
    };
  },
  methods: {
    isUrl() {
        if (this.imageUrl.startsWith('https://') === false) {
            this.isDisplay = false
            this.message = '請使用https圖片源'
        } else {
            this.isDisplay = true
            this.message = ""
        }
    },
    newPost() {
      const post = {
        "name": "邊緣小杰",
        "user": this.user,
        "tags": "ddd",
        "type": "group",
        "image": this.imageUrl,
        "content": this.content,
        "likes": 2,
        "comments": 2,
      };
      this.$http.post(`https://enigmatic-mesa-88497.herokuapp.com/posts`,post).then((res) => {
        console.log(res)
      })
    }
  }

}
</script>

<style lang="scss" scoped>
 .edit-info {
        position: relative;
        width: 533px;
        height: 64px;
        margin-bottom: 32px;
        text-align: center;
    }

    /* 定位追蹤名單容器位置 */
    .edit-info p {
        background: #fff;
        position: absolute;
        width: 100%;
        padding: 18px;
    }

    /* 第二個往左下移動 */
    .edit-info p:nth-child(2) {
        top: 4px;
        left: -4px;
        z-index: -1;
    }

    .edit-info span {
        font-family: 'Azeret Mono', sans-serif;
        font-weight: bold;
        color: #000400;
    }

    /* 發文區塊 */
    .post-block {
        padding: 32px;
        background: #FFFFFF;
        box-shadow: 0px 3px 0px #000400;
        border-radius: 8px;
    }

    /* 發文文章 */
    .post-block .post-content {
        margin-bottom: 16px;
    }

    .post-block .post-content span {
        font-family: 'Azeret Mono', sans-serif;
        font-size: 16px;
        color: #000400;
        margin-bottom: 4px;
    }

    .post-block .post-content textarea {
        width: 100%;
        height: 170px;
        padding: 16px 12px;
    }

    /* 發文圖片 */
    .post-block .post-img {
        margin-bottom: 32px;
    }

    .post-block .post-img button {
        margin-bottom: 16px;
        padding: 4px 32px;
        bottom: 0;
        font-family: 'Azeret Mono', sans-serif;
        font-size: 16px;
        color: #fff;
        background: #000400;
        border: none;
    }

    .post-block .post-img img {
        width: 469px;
        height: 157px;
    }

    /* 發文錯誤訊息 */
    .post-wrong-msg{
        display: none;
        margin-top: 32px;
        margin-bottom: 16px;
    }
    .post-wrong-msg span{
        display: block;
        text-align: center;
        font-family: 'Azeret Mono', sans-serif;
        font-size: 16px;
        color: #F57375;
    }
    /* 發文按鈕 */
    .post-block .post-btn {
        display: flex;
        justify-content: center;
    }

    .post-block .post-btn button {
        background: #A8B0B9;
        border-radius: 8px;
        color: #000400;
        padding: 16px 130px;
    }

    .post-block .post-btn button:active {
        background: #EEC32A;
        color: #000400;
    }

    .form-style{
        width:100%;
        text-align: center;
        align-content: center;
        height: 40px;
    }
</style>