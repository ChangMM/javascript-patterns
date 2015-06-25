
//1.第一种单例模式
function Universe() {
	
	// 当还没实例化变量时的表现~
	if (typeof Universe.instance === 'object') {
		return Universe.instance;
	}
	
	// 和正常的对象定义表现一样
	this.start_time = 0;
	this.bang = "Big";

	// cache缓存
	Universe.instance = this;

	// 默认的 return:
	// return this;
}

// var u1 = new Universe();
// var u2 = new Universe();
// u1 === u2  //true


//2.第二种单例模式
/*** Instance in a Closure ***/

function Universe() {
				
	// the cached instance
	var instance = this;

	// proceed as normal
	this.start_time = 0;
	this.bang = "Big";

	// rewrite the contructor
	Universe = function () {
			return instance;
		};
}


// 3.第三种   不是太懂啊
function Universe() {

    // 缓存实例
    var instance;

    // 重新构造函数
    Universe = function Universe() {
        return instance;
    };

    // 后期处理原型属性
    Universe.prototype = this;

    // 实例
    instance = new Universe();

    // 重设构造函数指针
    instance.constructor = Universe;

    // 其它功能
    instance.start_time = 0;
    instance.bang = "Big";

    return instance;
}


// 测试
var uni = new Universe();
var uni2 = new Universe();
console.log(uni === uni2); // true

// 添加原型属性
Universe.prototype.nothing = true;

var uni = new Universe();

Universe.prototype.everything = true;

var uni2 = new Universe();

console.log(uni.nothing); // true
console.log(uni2.nothing); // true
console.log(uni.everything); // true
console.log(uni2.everything); // true
console.log(uni.constructor === Universe); // true



// 4.第四种
var Universe;

(function () {

    var instance;

    Universe = function Universe() {

        if (instance) {
            return instance;
        }

        instance = this;

        // 其它内容
        this.start_time = 0;
        this.bang = "Big";
    };
} ());



















