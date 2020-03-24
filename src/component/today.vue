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
        let self = this;
        uni.getLocation({
            type: 'wgs84',
            success: function(location) {
                console.log('当前位置的经度：' + location.longitude);
                console.log('当前位置的纬度：' + location.latitude);

                uni.request({
                    url: 'http://localhost:3000/weather',
                    data: {
                        location: `${location.longitude}:${location.latitude}`
                    },
                    dataType: 'json',
                    success: res => {
                        console.log(res.data);
                        this.text = 'request success';
                    }
                });
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
