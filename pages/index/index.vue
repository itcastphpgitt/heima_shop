<template>
	<view class="home">
		<!-- 轮播图区域 -->
	<swiper indicator-dots circular>
		<swiper-item>
			<image src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0ce57203f1618c7554d8a22f92e18446.jpg?w=2452&h=920"></image>
		</swiper-item>
		<swiper-item>
			<image src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a532e33470d046b3f044d5ea49fc5e9e.png?thumb=1&w=1839&h=690&f=webp&q=90"></image>
		</swiper-item>
		<swiper-item>
			<image src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/918820682e4a490221cfd92b24c14b86.jpg?thumb=1&w=1839&h=690&f=webp&q=90"></image>
		</swiper-item>
		<swiper-item>
			<image src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/61bef947ca0b863003b3e68336192a3a.jpg?thumb=1&w=1839&h=690&f=webp&q=90"></image>
		</swiper-item>
	</swiper>
	<!-- 导航栏区域 -->
	<view class="nav">
		<view class="nav_item" v-for="(item,index) in navs" :key="index" @click="navItemClick(item.path)">
						<view :class="item.icon"></view>
						<text>{{item.title}}</text>
					</view>
		<!-- <view class="nav_item">
			<view class="iconfont icon-ziyuan"></view>
			<text>黑马超市</text>
		</view>
		<view class="nav_item">
			<view class="iconfont icon-guanyuwomen"></view>
			<text>联系我们</text>
		</view>
		<view class="nav_item">
			<view class="iconfont icon-tupian"></view>
			<text>社区图片</text>
		</view>
		<view class="nav_item">
			<view class="iconfont icon-shipin"></view>
			<text>学习视频</text>
		</view> -->
	</view>
	<!-- 推荐商品区域 -->
	<view class="hot_goods">
		<view class="tit">推荐商品</view>
		<goods-list @goodsItemClick="goGoodsDetail()"></goods-list>
		<!-- <view class="goods_list">
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
				<image src=""></image>
				 <view class="price">
					 <text></text>
					 <text></text>
				 </view>
				  <view class="name"></view>
			</view>
			<view class="goods_item">
				<image src=""></image>
				 <view class="price">
					 <text></text>
					 <text></text>
				 </view>
				 <view class="name"></view>
			</view>
			<view class="goods_item">
				<image src=""></image>
				 <view class="price">
					 <text></text>
					 <text></text>
				 </view>
				 <view class="name"></view>
			</view>
			<view class="goods_item">
				<image src=""></image>
				 <view class="price">
					 <text></text>
					 <text></text>
				 </view>
				 <view class="name"></view>
			</view>
		</view> -->
	</view>
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list/goods-list.vue'
	export default {
		data() {
			return {
			swipers: [],
							goods: [],
							navs: [
								{
									icon: 'iconfont icon-ziyuan',
									title: '黑马超市',
									path: '/pages/goods/goods'
								},
								{
									icon: 'iconfont icon-guanyuwomen',
									title: '联系我们',
									path: '/pages/contact/contact'
								},
								{
									icon: 'iconfont icon-tupian',
									title: '社区图片',
									path: '/pages/pics/pics'
								},
								{
									icon: 'iconfont icon-shipin',
									title: '学习视频',
									path: '/pages/videos/videos'
								}
							]
						}
		},
		onLoad() {
			this.getSwipers();
			// this.getHotGoods();
		},
		components:{
		"goods-list":goodsList	
		},
		methods: {
			//获取轮播图的数据
			async  getSwipers(){
				// console.log('获取轮播图的数据!');
				//  uni.request({
				// 	url:'http://localhost:3000/server',
				// 	success:(res)=>{
				// 		console.log(res);
				// 		if(res.data.status!==0){
				// 			return uni.showToast({
				// 				title:'获取数据失败！'
				// 			})
				// 		}
				// 		this.swipers=res.data.message;
				// 	}
				// })
				// const res=await this.$myRequest({
				// 	url:''
				// }),
				// conosle.log(res);
							// this.swipers=res.data.message;
			},
			
			//获取热门商品数据
						// async getHotGoods(){
						// 	const res=await this.$myRequest({
						// 		url:''
						// 	})
						// 	console.log(res);
						// this.goods=res.data.message;
						// },
						//导航点击的处理函数
						navItemClick(url){
							console.log('跳转');
							uni.navigateTo({
								url
							})
						},
						//导航到商品详情页
						goGoodsDetail(){
							uni.navigateTo({
								url:'/pages/goods-detail/goods-detail'
							})
						}
			
		}
	}
</script>

<style lang="scss">
	.home{
		swiper{
			width:750rpx;
			height:380rpx;
			image{
				height:100%;
				width:100%;
			}
		}
		.nav{
			display:flex;
			.nav_item{
				width:25%;
				text-align: center;
				view{
					width:120rpx;
					height:120rpx;
					background:$shop-color;
					border-radius:60rpx;
					margin:10px auto;
					line-height:120rpx;
					color:#fff;
				}
				.icon-tupian{
					// font-size:45rpx;
				}
				text{
					font-size:30rpx;
				}
			}
		}
		.hot_goods{
			background:#eee;
			overflow: hidden;
			margin-top: 10px;
			.tit{
				height:50px;
				line-height: 50px;
				color:$shop-color;
				text-align:center;
				// 字与字之间的间距
				letter-spacing:20px;
				background:#fff;
				margin:7rpx 0;
			}
		
		}
	}
</style>
