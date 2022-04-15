<template>
	<view class="news">
		<view class="news_item">
			<image src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3d47879ec183e25a36e67e0219636e60.jpg?thumb=1&w=351&h=450&f=webp&q=90"></image>
		    <view class="right">
			<view class="tit">
				1季度多家房企利润跌幅超50%去库存促销战打响
			</view>
			<view class="info">
			  <text>发表时间：2021-12-5</text>	
			  <text>浏览:666次</text>
			</view>
		</view>
		</view>
		<view class="news_item">
			<image src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3d47879ec183e25a36e67e0219636e60.jpg?thumb=1&w=351&h=450&f=webp&q=90"></image>
		    <view class="right">
			<view class="tit">
				1季度多家房企利润跌幅超50%去库存促销战打响
			</view>
			<view class="info">
			  <text>发表时间：2021-12-5</text>	
			  <text>浏览:666次</text>
			</view>
		</view>
		</view>
		<view class="news_item">
			<image src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3d47879ec183e25a36e67e0219636e60.jpg?thumb=1&w=351&h=450&f=webp&q=90"></image>
		    <view class="right">
			<view class="tit">
				1季度多家房企利润跌幅超50%去库存促销战打响
			</view>
			<view class="info">
			  <text>发表时间：2021-12-5</text>	
			  <text>浏览:666次</text>
			</view>
		</view>
		</view>
		<view class="news_item">
			<image src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3d47879ec183e25a36e67e0219636e60.jpg?thumb=1&w=351&h=450&f=webp&q=90"></image>
		    <view class="right">
			<view class="tit">
				1季度多家房企利润跌幅超50%去库存促销战打响
			</view>
			<view class="info">
			  <text>发表时间：2021-12-5</text>	
			  <text>浏览:666次</text>
			</view>
		</view>
		</view>
		<view class="news_item">
			<image src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3d47879ec183e25a36e67e0219636e60.jpg?thumb=1&w=351&h=450&f=webp&q=90"></image>
		    <view class="right">
			<view class="tit">
				1季度多家房企利润跌幅超50%去库存促销战打响
			</view>
			<view class="info">
			  <text>发表时间：2021-12-5</text>	
			  <text>浏览:666次</text>
			</view>
		</view>
		</view>
		<view class="news_item">
			<image src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3d47879ec183e25a36e67e0219636e60.jpg?thumb=1&w=351&h=450&f=webp&q=90"></image>
		    <view class="right">
			<view class="tit">
				1季度多家房企利润跌幅超50%去库存促销战打响
			</view>
			<view class="info">
			  <text>发表时间：2021-12-5</text>	
			  <text>浏览:666次</text>
			</view>
		</view>
		</view>
		<view class="news_item">
			<image src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3d47879ec183e25a36e67e0219636e60.jpg?thumb=1&w=351&h=450&f=webp&q=90"></image>
		    <view class="right">
			<view class="tit">
				1季度多家房企利润跌幅超50%去库存促销战打响
			</view>
			<view class="info">
			  <text>发表时间：2021-12-5</text>	
			  <text>浏览:666次</text>
			</view>
		</view>
		</view>
		<view class="news_item">
			<image src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3d47879ec183e25a36e67e0219636e60.jpg?thumb=1&w=351&h=450&f=webp&q=90"></image>
		    <view class="right">
			<view class="tit">
				1季度多家房企利润跌幅超50%去库存促销战打响
			</view>
			<view class="info">
			  <text>发表时间：2021-12-5</text>	
			  <text>浏览:666次</text>
			</view>
		</view>
		</view>
		<view class="news_item">
			<image src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3d47879ec183e25a36e67e0219636e60.jpg?thumb=1&w=351&h=450&f=webp&q=90"></image>
		    <view class="right">
			<view class="tit">
				1季度多家房企利润跌幅超50%去库存促销战打响
			</view>
			<view class="info">
			  <text>发表时间：2021-12-5</text>	
			  <text>浏览:666次</text>
			</view>
		</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			async getNews(){
				const res=await this.$myRequest({
					url:'/api/getnewslist'
				})
				console.log(res);
			},
			onLoad(){
				// this.getNews();
			}
		}
	}
</script>

<style lang="scss">
	.news{
		.news_item{
			display:flex;
			padding:10rpx 20rpx;
			border-bottom:1px solid $shop-color;
			image{
				min-width:200rpx;
				max-width:200rpx;
				height:150rpx;
			}
			.right{
				margin-left: 15rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.tit{
					font-size: 30rpx;
				}
				.info{
					font-size: 24rpx;
					text:nth-child(2){
						margin-left: 30rpx;
					}
				}
			}
		}
	}

</style>
