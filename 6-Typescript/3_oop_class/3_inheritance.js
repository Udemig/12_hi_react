/*
 ! Inheritance (Kalıtım | Miras)
 * Bir OOP kavramıdır. Bir sınıfın farklı bir sınıfın özelliklerini ve methodlarını miras almasına izin verir.
 * Bu işlem kodun tekrar kullanılabilirliğini arttırır ve kod organizasyonunu güçlendiririr.
 * Miras her zaman "ana sınıf" tan türetilmiş olan "alt sınıf" lar arasında gerçekleşir...
 * Alt sınıf (Derived | Child Class), bir üst sınıftan (Parent Class) miras olarak özelliklerini ve davranışlarını alır.
*/
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
// Parent Class
var GeometrikSekil = /** @class */ (function () {
    function GeometrikSekil(ad) {
        this.ad = ad;
    }
    GeometrikSekil.prototype.tanim = function () {
        console.log("Bu bir ".concat(this.ad, " \u015Fekildir"));
    };
    return GeometrikSekil;
}());
// Derived Class - Constructor Yok
var Dikdortgen = /** @class */ (function (_super) {
    __extends(Dikdortgen, _super);
    function Dikdortgen() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.uzunluk = 30;
        _this.genislik = 100;
        return _this;
    }
    return Dikdortgen;
}(GeometrikSekil));
var d = new Dikdortgen("Dikdörtgen");
console.log(d);
d.tanim();
// Derived Class - Constructor Var
var Daire = /** @class */ (function (_super) {
    __extends(Daire, _super);
    function Daire(yaricap) {
        var _this = _super.call(this, "Daire") || this; // parent class'ın constructor'ına değer gönder
        _this.yaricap = yaricap;
        return _this;
    }
    return Daire;
}(GeometrikSekil));
var daire = new Daire(100);
console.log(daire);
daire.tanim();
// Parent
var Arac = /** @class */ (function () {
    function Arac(marka, model, yakit) {
        this.marka = marka;
        this.model = model;
        this.yakit = yakit;
    }
    Arac.prototype.calistir = function () {
        console.log("Araca giriş yapılıyor");
    };
    return Arac;
}());
// Child
var Araba = /** @class */ (function (_super) {
    __extends(Araba, _super);
    function Araba(marka, model, yakit, vites_tipi) {
        var _this = _super.call(this, marka, model, yakit) || this;
        _this.vites_tipi = vites_tipi;
        return _this;
    }
    // Method Overring: Miras olarak alınan methodun üzerine yaz
    Araba.prototype.calistir = function () {
        _super.prototype.calistir.call(this);
        console.log("Kontak çevriliyor");
    };
    return Araba;
}(Arac));
var araba1 = new Araba("BMW", "420", "benzin", "otomatik");
console.log(araba1);
araba1.calistir();
// Bir class aynı anda birden fazla class'ı miras alamaz
// Ama miras alma olayı birden fazla kez gereçkleşebilir
var Human = /** @class */ (function () {
    function Human() {
        this.eye_color = "";
    }
    return Human;
}());
var Father = /** @class */ (function (_super) {
    __extends(Father, _super);
    function Father() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.eye_color = "Kahverengi";
        return _this;
    }
    return Father;
}(Human));
var Mother = /** @class */ (function (_super) {
    __extends(Mother, _super);
    function Mother() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.eye_color = "Mavi";
        return _this;
    }
    return Mother;
}(Human));
var Son = /** @class */ (function (_super) {
    __extends(Son, _super);
    function Son() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Son;
}(Father));
var son = new Son();
console.log(son); //  { eye_color: 'Kahverengi' }
