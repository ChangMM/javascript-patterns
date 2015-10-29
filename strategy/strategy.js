
//1.获得用于检验的数据
var data = {
    firstName : '晓薇儿',
    lastName : '被瑞尔',
    age : 100,
    sex : 0,
    adress : 'stree 12th',
    phone : '15988563322',
    boss : true
};

var voidValue = {//策略者
    C : {},//默认配置规则
    M : {//未通过验证时输出的信息
        isEmpty : 'EMPTY',
        isPhone : 'NOTPHONE',
        isBoolean : 'NOTBOOLEAN',
        isLength : 'BIGGER THAN MAX',
        isUndefined : 'UNDEFINED',
        isNumber : 'NOTNUMBER'
    },
    R : {//自定义规则，所有的规则在里面逐步添加
        	isEmpty : function(v) {
                return v !== '';
            },
            isUndefined :  function(v) {
                return typeof v === 'undefined';
            },
            isPhone : function(v) {
                return /^1[3|4|5|8]\d{9}$/.test(v);
            },
            isBoolean : function(v) {
                return Object.prototype.toString.call(v) === '[object Boolean]';
            },
            isNumber : function(v) {
                return Object.prototype.toString.call(v) === '[object Number]';
            },
            isName :  function(v) {
                return /^[\u4E00-\u9FFF]{1,6}$/.test(v);
            },
            isAdress : function(v) {
            	// return this.R["isEmpty"](v) && v.length<200;
            	// 这样写会报错！！！！
            	return voidValue.R["isEmpty"](v) && v.length<200;
            }
    },
    vaild : function(d) {//入口函数，传入数据源
        for(var i in d) {//循环传入的对象
        	// 
            if(!this.C[i]) continue;

            //判断是否有用户自定义输出的字符串，这里其实是经常用到的，
            //比如某个字段没有通过验证需要怎么样提示，以及提示的文字，在验证表单是尤其重要！

            if(this.C[i].fn) {
            	// 获取检验数据的函数 以及自己定义的返回的信息
                var fn = this.R[this.C[i]['fn']] || this.C[i]['fn'], message = this.C[i]['tip'];
            }else {
            	// 采用系统自定的输出信息
                var fn = this.R[this.C[i]] || this.C[i], message = this.M[this.C[i]];
            }

            //这里我们判断是需要执行验证函数还是比对数值大小
            var t = Object.prototype.toString.call(fn);
            if(t === '[object Function]') {
                if(!fn(d[i])) {
                    this.showMsg(message);
                    return false;
                }
            }else if(t === '[object Number]') {
                if(!/\d+/.test(d[i]) || parseInt(d[i]) >= fn) {
                    this.showMsg(message);
                    return false;
                }
            }  
        }
        return d;//如果都匹配到了，可以输出完整的数据源对象。
    },
    showMsg : function(msg){
    	console.warn(msg);
    }
};

// C是公开的对象，外面可以任意改变其值，是为了针对多种多样的验证逻辑。
// 是定义的需要检验的字段，要采用的函数，以及返回的信息
// 最外层的字段必须是和数据源字段一一对应的，
// 可自己定义检验数据的方法！！！

voidValue.C = {
    firstName :{fn : 'isName',   tip : '请填写正确的姓名'},
    lastName : {fn : 'isName',   tip : '请填写正确的姓名'},
    age :      {fn : 108,        tip : '您是彭祖吗？这么高龄！'},
    adress :   {fn : 'isAdress', tip : '请输入正确的地址'},
    phone :    {fn : 'isPhone',  tip : '请填写正确的手机号码'},
    boss :     {fn : 'isBoolean',tip : '你确定你是老板妈妈吗？'},
    sex:       {fn : 'isEmpty',  tip : '性别忘了吧'}
};

// 具体调用
var m = voidValue.vaild(data);
console.log(m);

