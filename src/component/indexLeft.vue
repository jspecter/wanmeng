<template>
    <view class="index-left">
        <template v-for="item in toolBoxes">
            <view class="tool-item" :key="item.id" @click="onClickItem(item)">
                {{ item.name }}
            </view>
        </template>
    </view>
</template>
<script>
export default {
    name: 'IndexLeft',
    data() {
        return {
            toolBoxes: [
                {
                    id: 0,
                    name: 'Treasure'
                },
                {
                    id: 1,
                    name: 'Ocean'
                },
                {
                    id: 2,
                    name: 'Mars'
                }
            ]
        };
    },
    methods: {
        onClickItem({ id, name }) {
            switch (id) {
                case 0: {
                    uni.navigateTo({
                        url: '/pages/treasure/treasure'
                    });
                    break;
                }

                default:
                    break;
            }
        }
    }
};
</script>
<style lang="scss">
.index-left {
    display: flex;
    width: 375rpx;
    height: calc(100% - 50px);
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
}
.tool-item {
    width: 200rpx;
    height: 200rpx;
    margin-top: 100rpx;
    padding: 50rpx 30rpx;
    border-radius: 50%;
    border: 1px solid #fff;
    box-shadow: 0 0 10px 1px rgba($color: rgb(39, 153, 230), $alpha: 0.3);
    text-align: center;
    color: #fff;
}
</style>
