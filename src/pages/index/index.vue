<template>
    <view id="index-page">
        <view class="index-mask">
            <today></today>
            <cut-page>
                <template slot="indexLeft">
                    <index-left></index-left>
                </template>
                <template slot="indexRight">
                    <index-right></index-right>
                </template>
            </cut-page>
        </view>
    </view>
</template>

<script>
import Today from '@/component/today.vue';
import CutPage from '@/component/cutPage.vue';
import IndexLeft from '@/component/indexLeft.vue';
import IndexRight from '@/component/indexRight.vue';

export default {
    name: 'IndexPage',
    components: {
        Today,
        CutPage,
        IndexLeft,
        IndexRight
    },
    data() {
        return {};
    }
};
</script>

<style lang="scss">
#index-page {
    position: relative;
    width: 100vw;
    height: 100vh;
    /* background-image: url("../../static/boy.png"); */
    background-repeat: no-repeat;
    background-position: center -250rpx;
}

.index-mask {
    height: inherit;
    //   background-color: rgba(0, 0, 0, 0.1);
}
</style>
