

exports.index=function(req,res){
	res.render('index',{title:'大侠的网站首页'});
};

exports.login = function(req,res){
	res.render('login',{
		title:'登录'
	})
};
