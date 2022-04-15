<template>
	<view class="news-detail">
		<text>标题</text>
		<view class="info">
			<text>发表时间：</text>
			<text>浏览：</text>
		</view>
		<view class="content">
			内容
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
			
		}
	}
</script>

<style lang="scss">
	.news-detail{
		font-size: 30rpx;
		padding:0 20rpx;
		.title{
			text-align: center;
			width:750rpx;
			margin:20rpx;
			display:block;
			margin:0 20rpx;
		}
		.info{
			display:flex;
			justify-content: space-between;
		}
	}
</style>
