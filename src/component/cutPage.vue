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
    props: {
        left: {
            type: Number,
            default: 1,
            required: true
        },
        right: {
            type: Number,
            default: 1,
            required: true
        }
    },
    onLoad() {},
    methods: {}
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
}

.cut-right {
    width: 50%;
    height: 100%;
    flex: 1;
}
</style>
