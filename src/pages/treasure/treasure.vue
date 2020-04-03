<template>
    <view class="page-treasure">
        <view
            class="treasure-list"
            v-for="item in ToolList"
            :key="item.id"
            @click="onClickItem(item)"
        >
            <span class="name">{{ item.name }}</span>
        </view>
    </view>
</template>
<script>
export default {
    data() {
        return {
            ToolList: [
                {
                    id: 0,
                    name: '热量查询'
                }
            ]
        };
    },
    methods: {
        onClickItem({ id, name }) {
            switch (id) {
                case 0:
                    console.log('food');
                    uni.navigateTo({
                        url: '/pages/food/food'
                    });
                    break;

                default:
                    break;
            }
        }
    }
};
</script>
<style lang="scss">
</style>
