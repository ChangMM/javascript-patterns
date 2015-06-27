
function Person(name, sex, height) {
    this.name = name;
    this.sex = sex;
    this.height = height;
    this.getInfo= function () {
        return this.name + " "+this.sex+" " +this.height;
    };
}

// 上面是一个简单的构造函数，但是继承起来很困难，而且getInfo方法每次定义对象时，都重新定义了一遍。下面提供一个好点的方法。
// 利用原型：

function Person(name, sex, height) {
    this.name = name;
    this.sex = sex;
    this.height = height;
}

Person.prototype.getInfo= function () {
        return this.name + " "+this.sex+" " +this.height;
    };

// 这样getInfo方法就可以在所有实例中共享。还有个问题就是上面的两种方式创建对象时都要使用new关键字，下面提供一种强制使用new的方法。

function Person(name, sex, height) {
    if (!(this instanceof Person)) {
        return Person(name, sex, height);
    }
    this.name = name;
    this.sex = sex;
    this.height = height;
    this.getInfo = function () {
        return this.name + " "+this.sex+" " +this.height;
    }
}




