'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	
	// if(!(/^[1][3,4,5,6,7,8,9][0-9]{9}$/).test(event.phone)){
		
	//     return {
	// 		code:201,
	// 		msg:event.phone+"11111"
	// 	}
	// }
	// if(!(/^[0-9]{6}$/).test(event.code)){
	//     return {
	// 		code:202,
	// 		msg:'密码格式错误'
	// 	}
	// }
	
	
	//返回数据给客户端
	return event
};
