/*
 ! Access Modifiers - Erişim Belirteçleri

 * Class propertyleri ile tutucağımız verilerin class'ın dışarısında erişilip erişilmeyeceğini belirtmek için kullandığımız yöntem.
 
 * 3 adet erişim belirteci vardır:

 * public: hem class dışarısından hem de class'ı miras alan diğer class'lardan erişilebilir.
 * protected: class'ın dışarısında erişilemez ama class'ı miras alan diğer class'lardan erişilebilir
 * private: hem cclass'ın dışarısından hem class'ı miras alan diğer class'lardan erişilemez
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
// Parent class
var Arac = /** @class */ (function () {
    function Arac() {
        this.marka = "Honda";
        this.model = "Civic";
        this.chasis_no = 82304723894723908;
    }
    Arac.prototype.tanit = function () {
        console.log(this.marka, this.model);
    };
    return Arac;
}());
// Child class
var Motor = /** @class */ (function (_super) {
    __extends(Motor, _super);
    function Motor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Motor.prototype.calistir = function () {
        console.log("selam");
    };
    return Motor;
}(Arac));
// Child class örneği
var honda = new Motor();
console.log(honda);
honda.calistir();
