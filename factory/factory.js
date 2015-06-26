
//1. 创建构造函数  区别不同物种的属性
//定义人的构造函数
var man = function(o) {
    this.foots = o.foot || 2;
    this.legs = o.legs || 2;
}
//定义鱼的构造函数
var fish = function(o) {
    this.qi = o.qi || 4;
    this.foots = o.foots || 9;
}
//定义外星人的构造函数
var et = function(o) {
    this.legs = o.legs ||10;
    this.eyes = o.eyes || 6;
}

//2.接下来，在创建一工厂函数
//工厂函数的构造函数
var F = function() {}

//f的默认输出实例函数；
F.prototype.vehicleClass = man;

//配置工厂函数的甄别函数
F.prototype.vehicleCreate = function(o) {
    switch(o.vehicleType) {
        case 'man' :
            this.vehicleClass = man;
            break;
        case 'fish' :
            this.vehicleClass = fish;
            break;
        case 'et' :
            this.vehicleClass = et;
            break;
        }
    //返回实例
    return this.vehicleClass(o);
}


// 3.利用工厂函数创建不同的类
var Factory = new F();

//然后调用vehicleCreate方法，通过传参获取不同实例的对象。
var Man = Factory.vehicleCreate({
    vehicleType : 'man',
    legs : 2,
    foots : 2
});














