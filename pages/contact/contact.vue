<template>
	<view class="contact">
		<image class="img"  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/524f43e06f4722b1ff745402d7ad7cbb.jpg?thumb=1&w=1839&h=375&f=webp&q=90"></image>
	<view class="info">
		<view @click="phone">联系电话：400-618-9090(点击拨打)</view>
		<view>地址：ＸＸ省ＸＸ市</view>		
	</view>
	<map class="map" :latitude="latitude":scale="scale" :longitude="longitude" :markers="markers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude:114.857978,
				latitude:27.780454,
				scale:11,
				markers:[
									{
										longitude: 114.857978,
										latitude: 27.780454,
										iconPath: '../../static/logotu.png',
										width: 30,
										height: 30
									}
								]
			}
		},
		methods: {
			phone(){
				uni.makePhoneCall({
				    phoneNumber: '15179706457' //仅为示例
				});
			}
		}
	}
</script>

<style lang="scss">
	.contact{
		.img{
			width:750rpx;
			height:320rpx;
		}
		.info{
			padding:10rpx 20rpx;
			font-size: 30rpx;
			view{	
				line-height:60rpx;
				border-bottom:1px solid #eee;
			}
		}
		.map{
			width:750rpx;
			height:750rpx;
		}
	}

</style>
