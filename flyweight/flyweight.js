//享元模式
    var flyWight  = (function(window, undefined){//立即执行函数返回一个享元对象
        var Cars = {};//这里是存储器，用存储所有的car对象
        var Car = function(d) {//构造方法
            this.id = d.id;
            this.lt = d.lt;//轮胎
            this.fxp = d.fxp;//方向盘
            this.lhq = d.lhq;//离合器
            this.sc = d.sc;//刹车
            this.zw = d.zw;//座位
            this.cc = d.cc;//车窗
            this.dhy = d.dhy;//导航仪
        }
        Car.prototype.gmg = 'china';// 买家的国籍，这里适应定义一些公共属性，适用于所有车辆的公用属性，比如购买的国家，方便统一修改
        Car.prototype = {//Car的原型类方法，上面提供了操作Car实例的一些方法，可以自己定义，卤煮在此只定义最基本的方法
            set : function(n ,v) {
                this[n] = v;
            },
            get : function(n) {
                return this[v];
            }
        }
        var _factory = function(d) {//构建实例工厂，以pp（品牌）为类构建Car类别，，此方法属于私有，外部无法调用。
            if(!Cars[d.pp]) {
                Cars[d.pp] = new Car(d);
            }
            return Cars[d.pp];//返回该品牌的类别
        }
 
        var controlCar =  {//享元对象
            allCars : {},//另一个存储所有车辆的对象,
            addCar : function(data) {//添加一辆车
                if(this.allCars[data.id]) return this.allCars[data.id];
                this.allCars[data.id] = {
                    id : data.id,
                    pp : data.pp,
                    ys : data.ys,
                    cp : data.cp,
                    buyTime : data.buyTime,
                    jg : data.jg,
                    car : _factory(data)
                }
            },
            removeCar : function(data) {//删除一辆车
                if(this.allCars[data.id]) {
                    this.allCars[data.id] = undefined;
                }
            },
            getCar : function (id) {//获取一辆汽车
                return this.allCars[id];
            }
        }
 
        return controlCar;//返回享元对象
    })(window, undefined);


var data = [
    {id:1,lt:4,fxp:1,lhq:1,sc:1,zw:5,cp:'x1231',pp:'benchi', ys:'red', jg:200000, buyTime : '1999-08-20', cc : 6, dhy : 1},
    {id:2,lt:4,fxp:1,lhq:1,sc:1,zw:5,cp:'x1232',pp:'benchi', ys:'black', jg:207000, buyTime : '1999-08-21', cc : 6, dhy : 1},
    {id:3,lt:4,fxp:1,lhq:1,sc:1,zw:5,cp:'x1233',pp:'benchi', ys:'gray', jg:200000, buyTime : '1999-08-22', cc : 6, dhy : 1},
 
    {id:4,lt:4,fxp:1,lhq:1,sc:1,zw:5,cp:'x4564',pp:'fute', ys:'yellow', jg:150000, buyTime : '1999-08-23', cc : 6, dhy : 1},
    {id:5,lt:4,fxp:1,lhq:1,sc:1,zw:5,cp:'x4565',pp:'fute', ys:'black', jg:160000, buyTime : '1999-08-24', cc : 6, dhy : 1},
    {id:6,lt:4,fxp:1,lhq:1,sc:1,zw:5,cp:'x4566',pp:'fute', ys:'gray', jg:109000, buyTime : '1999-08-25', cc : 6, dhy : 1},
 
    {id:7,lt:4,fxp:1,lhq:1,sc:1,zw:5,cp:'x7897',pp:'baoma', ys:'black', jg:380000, buyTime : '1999-08-26', cc : 6, dhy : 1},
    {id:8,lt:4,fxp:1,lhq:1,sc:1,zw:5,cp:'x7898',pp:'baoma', ys:'blue', jg:300000, buyTime : '1999-08-27', cc : 6, dhy : 1}
]

for(var i=0; i<data.length; i++) {
    flyWight.addCar(data[i]);
}

//总结：享元模式的核心:1有基础单元共享的数据对象集合，2.构造工厂函数，3.存储实例对象的容器。










