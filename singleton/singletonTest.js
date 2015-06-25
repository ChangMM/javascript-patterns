var singleton = function( fn ){
    var result;
    return function(){
        return result || ( result = fn .apply( this, arguments ) );
    }
};

var obj = function(args){
	// 参数集合
	var args = args || {};

	return{
		name  :args.name||"添加属性",
		method:args.fn||function(){
			console.log("添加方法~");
		}
	}
}

var myObj = singleton(obj);
var m1 = myObj();
var m2 = myObj();

m1===m2;  //true  


//关于单例模式的两个最佳实践
//1.

var Singleton = (function(){
	var instanced;

	var init = function(){
		return {
			method: function(){
				console.log("可以添加方法~");
			},
			property:"可以添加参数"
		}
	} 

 return {
        getInstance: function () {
            if (!instanced) {
                instanced = init();
            }
            return instanced;
        }
    };

})();

// 2.

var SingletonTester = (function () {

    //参数：实例化单例的一个参数集合
    function Singleton(args) {

        //设置args变量为接收的参数或者为空（如果没有提供的话）
        var args = args || {};
        //设置name参数
        this.name = 'SingletonTester';
        //设置pointX的值
        this.pointX = args.pointX || 6; //从接收的参数里获取，或者设置为默认值
        //设置pointY的值
        this.pointY = args.pointY || 10;
    }

    //实例容器
    var instance;
    var _static = {
        name: 'SingletonTester',

        //获取实例的方法
        //返回Singleton的实例
        getInstance: function (args) {
            if (instance === undefined) {
                instance = new Singleton(args);
            }
            return instance;
        }
    };
    return _static;
})();



















