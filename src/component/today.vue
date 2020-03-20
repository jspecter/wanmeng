<template>
    <view class="today">
        <view class="weather">
            <span class="city"></span>
        </view>
    </view>
</template>
<script>
export default {
    data() {
        return {
            location: {}
        };
    },
    methods: {},
    mounted() {
        uni.getLocation({
            type: 'wgs84',
            success: function(res) {
                this.location = res;
                console.log('当前位置的经度：' + res.longitude);
                console.log('当前位置的纬度：' + res.latitude);
            }
        });
    }
};
</script>
<style lang="scss">
.today {
    height: 50px;
    padding: 0 20rpx;
    line-height: 50px;
    border-bottom: 1px solid $gray-color;
    background-color: #fff;
}
</style>
