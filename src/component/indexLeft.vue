<template>
    <view class="index-left">
         <template v-for="item in toolBoxes">
             <view class="tool-item" :key="item.id">
                 {{item.name}}
             </view>
         </template>
    </view>
</template>
<script>
	export default {
        name:'IndexLeft',
		data() {
			return {
               toolBoxes:[
                   {
                       id:0,
                       name:'百宝箱'
                   },
                   {
                       id:1,
                       name:'男人海洋'
                   },
                   {
                       id:2,
                       name:'火星撞地球'
                   }
               ]
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>
<style lang="scss">
    .index-left{
        display: flex;
        width:375rpx;
        min-height:calc(100% - 50px);
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
    }
    .tool-item{
        width:250rpx;
        height:250rpx;
        box-sizing: border-box;
        padding: 50rpx 30rpx;
        border-radius: 50%;
        border:1px solid $gray-color;
        text-align: center;
    }
</style>
