<template>
    <view class="cut-view">
        <view class="cut-left">
            <slot name="indexLeft"></slot>
        </view>
        <view class="cut-right">
            <slot name="indexRight"></slot>
        </view>
    </view>
</template>
<script>
export default {
    data() {
        return {};
    },
    methods: {},
    mounted() {}
};
</script>
<style lang="scss">
.cut-view {
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    height: calc(100% - 50px);
}

.cut-left {
    width: 50%;
    flex: 1;
    border-right: 1rpx solid $gray-color;
    // background-color: rgba($color: $man-color, $alpha: 0.3);
    // background-image: url('../static/left_bg.png');
    background-blend-mode: soft-light;
    background-repeat: no-repeat;
    background-size: 50%;
    background-position: 40% 30%;
}

.cut-right {
    position: relative;
    width: 50%;
    height: 100%;
    flex: 1;
    //   background-color: rgba($color: $woman-color, $alpha: 0.3);
    // background-image: url('../static/right_bg.png');
    background-blend-mode: soft-light;
    background-repeat: no-repeat;
    background-size: contain;
    background-position-y: 40%;
}
</style>
