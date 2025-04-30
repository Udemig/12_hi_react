var Sorter = /** @class */ (function () {
    function Sorter(data) {
        this.data = data;
    }
    Sorter.prototype.sortData = function () {
        return this.data.sort();
    };
    return Sorter;
}());
var arr1 = new Sorter(["f", "e", "a", "b", "c", "d"]);
var arr2 = new Sorter([9, 8, 7, 1, 2, 3, 4, 5, 6]);
var arr3 = new Sorter([true, false, true]);
console.log(arr1.sortData());
console.log(arr2.sortData());
