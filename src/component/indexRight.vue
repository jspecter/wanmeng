<template>
    <view class="index_right">
        <points></points>
        <scroll-view class="scroll-bar" scroll-y="true" :scroll-top="0">
            <view v-for="item in 14" :key="item" class="day"></view>
        </scroll-view>
    </view>
</template>
<script>
import Points from './points.vue';

export default {
    name: 'IndexRight',
    components: {
        Points
    },
    data() {
        return {};
    },
    onLoad() {},
    methods: {}
};
</script>
<style lang="scss">
.index_right {
    position: relative;
    width: 100%;
    height: calc(100vh - 50px);
    .scroll-bar {
        height: 100%;
    }
}
.day {
    height: 7.14%;
    border-bottom: 1px solid rgba($color: #fff, $alpha: 0.6);
    &:last-child {
        border-bottom: none;
    }
}
</style>
