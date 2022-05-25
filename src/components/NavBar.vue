<template>
  <div class="container border-bottom">
        <div class="row">
            <div class="nav">
                <p class="nav-text">MetaWall</p>
                <div class="nav-user">
                    <img :src="'data:image/png;base64,'+icon" alt="user" class="nav-user-img">
                    <span class="nav-user-name">Member</span>
                    <!-- hover出現的選單 -->
                    <div class="nav-user-hover border">
                        <div class="nav-user-hover-text">
                            <p class="padding border-bottom">我的貼文牆</p>
                            <p class="padding border-bottom">修改個人資料</p>
                            <p class="padding ">登出</p>
                        </div>
                    </div>
                    <div class="nav-user-hover-shadow border">
                        <div class="nav-user-hover-text">
                            <p class="padding border-bottom-white">我的貼文牆</p>
                            <p class="padding border-bottom-white">修改個人資料</p>
                            <p class="padding border-bottom-white">登出</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      icon: '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',
    };
  }
}
</script>

<style scoped lang="scss">
    // @import url('https://fonts.googleapis.com/css2?family=Azeret+Mono&family=Noto+Sans+TC:wght@400;500;700&family=Paytone+One&display=swap');

    // * {
    //     padding: 0;
    //     margin: 0;
    //     list-style: none;
    //     box-sizing: border-box;
    // }




    // /* 通用CSS */
    // .border {
    //     border: 2px solid #000400;
    // }

    // .border-bottom {
    //     border-bottom: 2px solid #000400;
    // }

    // .border-bottom-white {
    //     border-bottom: 2px solid #fff;
    // }

    // .padding {
    //     padding: 8px 0;
    // }


    // .container {
    //     width: 100%;
    //     margin-bottom: 49px;
    // }

    // .row {
    //     width: 865px;
    //     margin: 0 auto;
    //     display: flex;
    //     justify-content: space-between;
    // }

    // .col {
    //     margin: 0 auto;
    // }

    /* ---------------導覽列開始--------------- */
    /* 導覽列 */
    .nav {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    /* 導覽列左邊LOGO */
    .nav-text {
        font-family: 'Paytone One', sans-serif;
        font-weight: bold;
        font-size: 36px;
        color: #000400;
    }

    /* 導覽列右邊使用者的外框 */
    .nav-user {
        display: flex;
        align-items: center;
        cursor: default;
        position: relative;
    }

    /* 導覽列右邊使用者hover */
    .nav-user:hover>.nav-user-hover {
        display: block;
        position: absolute;
        top: 34px;
        left: -8px;
        z-index: 10;
    }

    /* 使用同樣選單當成hover的影子 */
    .nav-user:hover>.nav-user-hover-shadow {
        display: block;
        position: absolute;
        top: 40px;
        left: 0px;
    }

    .nav-user-hover,
    .nav-user-hover-shadow {
        width: 182px;
        text-align: center;
        display: none;
        background: #fff;
        font-family: 'Noto Sans TC', sans-serif;
        font-weight: 300;
    }

    .nav-user-hover p {
        cursor: default;
    }

    /* HOVER選單指到改顏色 */
    .nav-user-hover p:hover {
        background: #EFECE7;
    }

    /* 導覽列右邊使用者大頭照 */
    .nav-user-img {
        width: 30px;
        height: 30px;
        margin-right: 10px;
        cursor: default;
    }

    /* 導覽列右邊使用者名稱 */
    .nav-user-name {
        font-family: 'Azeret Mono', sans-serif;
        font-weight: bold;
        border-bottom: 2px solid #000400;
        padding: 0 4.5px 4.5px;
        cursor: default;
    }

    /* ---------------導覽列結束--------------- */
</style>
