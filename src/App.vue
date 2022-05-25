<template>
  <router-view/>
</template>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Azeret+Mono&family=Noto+Sans+TC:wght@400;500;700&family=Paytone+One&display=swap');

    * {
        padding: 0;
        margin: 0;
        list-style: none;
        box-sizing: border-box;
    }

    /* 通用CSS */
    .border {
        border: 2px solid #000400;
    }

    .border-bottom {
        border-bottom: 2px solid #000400;
    }

    .border-bottom-white {
        border-bottom: 2px solid #fff;
    }

    .padding {
        padding: 8px 0;
    }


    .container {
        width: 100%;
        margin-bottom: 49px;
    }

    .row {
        width: 865px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }

    .col {
        margin: 0 auto;
    }

    .wall-left {
        width: 533px;
    }

    @media (max-width: 576px) {
        .row {
            width: 576px;
            flex-wrap: wrap;
            padding: 0 12px;
        }

        .choose-items {
            display: flex;
            flex-wrap: wrap;
        }

        .select-item {
            width: 100%;
            margin-bottom: 8px;
        }

        .search-item {
            width: 100%;
            margin-left: 0;
        }

        .user-info {
            display: none;
        }

        .rwd-items-block {
            display: block;
            padding: 0 12px;
            position: sticky;
            bottom: 4px;
        }

        .rwd-items {
            display: flex;
            justify-content: space-between;
            padding: 8px 48px;
            border-radius: 50px 50px;
            background: #EFECE7;
        }

        .rwd-items p {
            border-radius: 50%;
            height: 48px;
            width: 48px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .rwd-items p:nth-last-child(1) {
            background: #03438D;
            color: #fff;
        }

        .rwd-items p:nth-last-child(1) span {
            transform: rotate(45deg);
        }
    }
</style>
