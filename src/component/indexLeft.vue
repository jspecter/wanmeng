<template>
    <scroll-view class="index-left">
         <template v-for="item in toolBoxes">
             <view class="tool-item" :key="item.id">
                 {{item.name}}
             </view>
         </template>
    </scroll-view>
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

</style>
