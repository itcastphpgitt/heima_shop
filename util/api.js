const BASE_URL='http://localhost:3000'
export const myRequest=(options)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			// url:BASE_URL+options.url,
			url:'https://www.showdoc.cc/128719739414963?page_id=2612830563673346',
			methods:options.method||'GET',
			data:options.data||{},
			success:(res)=>{
				if(res.data.status!==0){
					return uni.showToast({
						title:'获取数据失败！'
					})
				}
				resolve(res);
			},
			fail:(err)=>{
				uni.showToast({
					title:'请求接口失败!'
				})
				reject(err)
			}
		})
	})
}
// myRequest({
// 	url:'/server',
// 	method:'POST'
// })