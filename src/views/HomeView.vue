<template>
    <NavBar />
    <div class="container">
        <div class="row">
            <!-- 左邊動態牆 -->
            <div class="col wall-left">
              <SearchBar />
              <InfoCard />
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
import SearchBar from "../components/SearchBar.vue";
import InfoCard from "../components/InfoCard.vue";
import WidgetComponent from "../components/WidgetComponent.vue";
import RWDComponent from "../components/RWDComponent.vue";

export default {
    components: {
    SearchBar,
    InfoCard,
    WidgetComponent,
    RWDComponent
},
}
</script>

<style lang="scss" scoped>
</style>
