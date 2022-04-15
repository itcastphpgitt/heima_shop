<template>
	<view class="goods_list">
		<view class="goods_item" @click="navigator">
			<image src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6d0a3e7acc3e91e2cfd83dbbe1d1c029.jpg?thumb=1&w=300&h=300&f=webp&q=90"></image>
		    <view class="price">
				<text>￥2199</text>
				<text>￥2499</text>
			</view>
			<view class="name">
				华为（HUAWEI）荣耀6Plus  16G双4G版
			</view>
		</view>
		<view class="goods_item">
			<image src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6d0a3e7acc3e91e2cfd83dbbe1d1c029.jpg?thumb=1&w=300&h=300&f=webp&q=90"></image>
		    <view class="price">
				<text>￥2199</text>
				<text>￥2499</text>
			</view>
			<view class="name">
				华为（HUAWEI）荣耀6Plus  16G双4G版
			</view>
		</view>
		<view class="goods_item">
			<image src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6d0a3e7acc3e91e2cfd83dbbe1d1c029.jpg?thumb=1&w=300&h=300&f=webp&q=90"></image>
		    <view class="price">
				<text>￥2199</text>
				<text>￥2499</text>
			</view>
			<view class="name">
				华为（HUAWEI）荣耀6Plus  16G双4G版
			</view>
		</view>
		<view class="goods_item">
			<image src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6d0a3e7acc3e91e2cfd83dbbe1d1c029.jpg?thumb=1&w=300&h=300&f=webp&q=90"></image>
		    <view class="price">
				<text>￥2199</text>
				<text>￥2499</text>
			</view>
			<view class="name">
				华为（HUAWEI）荣耀6Plus  16G双4G版
			</view>
		</view>
	<view class="goods_item">
		<image src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6d0a3e7acc3e91e2cfd83dbbe1d1c029.jpg?thumb=1&w=300&h=300&f=webp&q=90"></image>
	    <view class="price">
			<text>￥2199</text>
			<text>￥2499</text>
		</view>
		<view class="name">
			华为（HUAWEI）荣耀6Plus  16G双4G版
		</view>
	</view>
		<view class="goods_item">
			<image src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6d0a3e7acc3e91e2cfd83dbbe1d1c029.jpg?thumb=1&w=300&h=300&f=webp&q=90"></image>
		    <view class="price">
				<text>￥2199</text>
				<text>￥2499</text>
			</view>
			<view class="name">
				华为（HUAWEI）荣耀6Plus  16G双4G版
			</view>
		</view>
		<view class="goods_item">
			<image src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6d0a3e7acc3e91e2cfd83dbbe1d1c029.jpg?thumb=1&w=300&h=300&f=webp&q=90"></image>
		    <view class="price">
				<text>￥2199</text>
				<text>￥2499</text>
			</view>
			<view class="name">
				华为（HUAWEI）荣耀6Plus  16G双4G版
			</view>
		</view>
		<view class="goods_item">
			<image src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6d0a3e7acc3e91e2cfd83dbbe1d1c029.jpg?thumb=1&w=300&h=300&f=webp&q=90"></image>
		    <view class="price">
				<text>￥2199</text>
				<text>￥2499</text>
			</view>
			<view class="name">
				华为（HUAWEI）荣耀6Plus  16G双4G版
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:['goods'],
		methods:{
			navigator(){
				this.$emit('goodsItemClick');
			}
		}
	}
</script>

<style lang="scss">
	.goods_list{
				padding:0 15rpx;
				display:flex;
				flex-wrap:wrap;
				justify-content: space-between;
				.goods_item{
					background:#fff;
					// width:355rpx;
					width:355rpx;
					margin:10rpx 0;
					padding:15rpx;
					box-sizing:border-box;
					image{
						width:80%;
						height:150px;
						display:block;
						margin:auto;
					}
					.price{
						color:$shop-color;
						font-size:36rpx;
						margin: 15rpx 0 10rpx 0;
						text:nth-child(2){
							color:#ccc;
							font-size:28rpx;
							margin-left:17rpx;
							text-decoration: line-through;
						}
					}
					.name{
						font-size: 28rpx;
						line-height: 50rpx;
						padding-bottom: 15rpx;
						padding-top: 10rpx;
					}
				}
			}
</style>
