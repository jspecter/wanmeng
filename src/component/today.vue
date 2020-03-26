<template>
    <view class="today">
        <view class="weather">
            <span class="path">{{ location.path }}</span>
            <span class="now">{{ now.text }}</span>
            <span class="now">{{ now.temperature }}</span>
        </view>
    </view>
</template>
<script>
export default {
    data() {
        return {
            location: {},
            now: {}
        };
    },
    methods: {},
    mounted() {
        // let self = this;
        // uni.getLocation({
        //     type: 'wgs84',
        //     success: function(location) {
        //         uni.request({
        //             url: 'http://localhost:3000/weather',
        //             data: {
        //                 location: `${location.latitude}:${location.longitude}`
        //             },
        //             dataType: 'json',
        //             success: ({ data }) => {
        //                 const { location, now } = data.results[0];
        //                 self.location = location;
        //                 self.now = now;
        //             }
        //         });
        //     }
        // });
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
