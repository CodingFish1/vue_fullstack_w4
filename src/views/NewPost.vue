<template>
<NavBar />
    <div class="container">
        <div class="row">
            <!-- 左邊動態牆 -->
            <div class="col wall-left">
              <PostWall />
            </div>

            <!-- 右邊控制項 -->
            <div class="col">
              <WidgetComponent />
            </div>
        </div>
        <RWDComponent />
    </div>
</template>

<script>
import WidgetComponent from "../components/WidgetComponent.vue";
import PostWall from "../components/PostWall.vue";
import RWDComponent from "../components/RWDComponent.vue";
export default {
    components: {
    WidgetComponent,
    RWDComponent,
    PostWall,
},
}
</script>

<style lang="scss" scoped>

</style>