<template>
	<view>
		<goods-list></goods-list>
		<view class="isOver" v-if="flag">...我是有底线的...</view>
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list/goods-list.vue'
	export default {
		data() {
			return {
				pageindex:1,
				goods:[],
				// flag:false,
				flag:true
			}
		},
		components:{"goods-list":goodsList	},
		methods: {
			//定义一个获取商品列表的数据
			// async getGoodsList{
			// 	const res=await this.$mRequest(url:'/api/getgoods?pageindex='+this.pageindex)
			// }
			// this.goods=[...this.goods,...res.data.message];
			// uni.stopPullDownRefresh()
			// callback&&callback();
			// console.log(res);
			
		},
		onLoad(){
			// this.getGoodsList();
			setTimeout(()=> {
			            console.log('start pulldown');
			        }, 1000);
			        uni.startPullDownRefresh();
		},
		onReachBottom(){
			// if(this.goods.length<this.pageindex*10){
			// 	return this.flag=true;
			// }
			// console.log('触底了！');
			this.pageindex++;
			// this.getGoodsList();
		},
		onPullDownRefresh(){
			console.log('下拉刷新了');
		// 	this.goods=[];
		// 	this.flag=false;
		// 	setTimeout(()=>{
		// 		this.getGoodsList()
		// 	},1000);
		console.log('refresh');
		        setTimeout(()=> {
		            uni.stopPullDownRefresh();
		        }, 1000);
		}	
	}
</script>

<style lang="scss">
	.goods_list{
		background:#eee;
	}
	.isOver{
		width: 100%;
		height:50px;
		line-height:50px;
		text-align: center;
		// background:#fff;
		font-size: 28rpx;
	}
</style>
