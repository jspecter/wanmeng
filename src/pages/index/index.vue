<template>
	<view id="index-page">
         <cut-page>
             <template slot="left">
               <index-left></index-left>
             </template>
             <template slot="right">
               <index-right></index-right>
             </template>
         </cut-page>
	</view>
</template>

<script>
    import CutPage from '@/component/cutPage.vue';
    import IndexLeft from '@/component/indexLeft.vue';
    import IndexRight from '@/component/indexRight.vue';

	export default {
        name:'IndexPage',
        components:{
            CutPage
        },
        data() {
			return {
			}
		},
		onLoad() {
           console.log(IndexLeft,IndexRight);
		},
		methods: {

		}
	}
</script>

<style>
	#index-page {
        width: 100vw;
        height: 100vh;
    }
</style>
