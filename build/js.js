var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(pName, pAge) {
        if (pName === void 0) { pName = 'Robert'; }
        if (pAge === void 0) { pAge = 32; }
        this._name = pName;
        this._age = pAge;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (pName) {
            this._name = pName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (pAge) {
            if (pAge > 0) {
                this._age = pAge;
            }
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.toString = function () {
        return ('Nom: ' + this._name + '\nAge: ' + this._age);
    };
    return Person;
}());
var Fighter = /** @class */ (function (_super) {
    __extends(Fighter, _super);
    function Fighter(pName, pAge, pFightingStyle) {
        if (pFightingStyle === void 0) { pFightingStyle = "chelou"; }
        var _this = _super.call(this, pName, pAge) || this;
        _this._fightingStyle = pFightingStyle;
        return _this;
    }
    Object.defineProperty(Fighter.prototype, "fightingStyle", {
        get: function () {
            return this._fightingStyle;
        },
        set: function (pFightingStyle) {
            this._fightingStyle = pFightingStyle;
        },
        enumerable: false,
        configurable: true
    });
    Fighter.prototype.hit = function () {
        return this.name + ' donne un coup en utilisant son style de ' + this.fightingStyle;
    };
    Fighter.prototype.toString = function () {
        return _super.prototype.toString.call(this) + '\nStyle: ' + this.fightingStyle;
    };
    return Fighter;
}(Person));
var Boxer = /** @class */ (function (_super) {
    __extends(Boxer, _super);
    function Boxer(pName, pAge) {
        var _this = _super.call(this, pName, pAge) || this;
        _this._fightingStyle = 'boxing';
        return _this;
    }
    Boxer.prototype.giveCrochet = function () {
        return this.name + ' donne un superbe crochet du gauche ! Son style de ' + this.fightingStyle + ' est reconnaissable entre mille !';
    };
    return Boxer;
}(Fighter));
var Karateka = /** @class */ (function (_super) {
    __extends(Karateka, _super);
    function Karateka(pName, pAge) {
        var _this = _super.call(this, pName, pAge) || this;
        _this._fightingStyle = 'karatay';
        return _this;
    }
    Karateka.prototype.giveMawashi = function () {
        return this.name + ' donne un superbe Mawashigueri des familles de son majestueux pied gauche ! Son style de ' + this.fightingStyle + ' est absolument saisissant !';
    };
    return Karateka;
}(Fighter));
var Rasta = /** @class */ (function (_super) {
    __extends(Rasta, _super);
    function Rasta(pName, pAge) {
        return _super.call(this, pName, pAge) || this;
    }
    Rasta.prototype.givePeace = function () {
        return this.name + ' donne la paix du haut de ses ' + this.age + ' ans. Amour.';
    };
    return Rasta;
}(Person));
function displayInfo(pInfo) {
    var DOMEl = window.document.querySelector('textarea');
    DOMEl.innerHTML += '------------\n' + pInfo + '\n------------\n\n';
}
var p = new Person('Louis', 30);
var p2 = new Fighter('Jordan', 43);
var p3 = new Boxer('Mike', 30);
var p4 = new Karateka();
var p5 = new Rasta('Emile', 4);
displayInfo(p.toString());
displayInfo(p2.toString());
displayInfo(p2.hit());
displayInfo(p3.toString());
displayInfo(p3.giveCrochet());
displayInfo(p3.hit());
displayInfo(p4.toString());
displayInfo(p4.giveMawashi());
displayInfo(p5.toString());
displayInfo(p5.givePeace());
