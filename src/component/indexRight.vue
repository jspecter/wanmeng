<template>
    <view class="index_right">
        <scroll-view class="scroll-bar" scroll-y="true" :scroll-top="0">
            <view v-for="item in 14" :key="item" class="day"></view>
        </scroll-view>
    </view>
</template>
<script>
export default {
    name: 'IndexRight',
    data() {
        return {};
    },
    onLoad() {},
    methods: {}
};
</script>
<style lang="scss">
.index_right {
    width: 100%;
    height: calc(100vh - 50px);
    .scroll-bar {
        height: 100%;
    }
}
.day {
    height: 7.14%;
    background-color: #fff;
    border-bottom: 1px solid $gray-color;
    background-image: url('../static/day_back.jpg') no-repeat;
    background-size: contain;
    &:last-child {
        border-bottom: none;
    }
}
</style>
