"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var OrderComponent = (function () {
    function OrderComponent() {
        this.pageTitle = "Order list";
        this.imageWidth = 50;
        this.showImage = false;
        this.orders = [
            {
                "productId": 1,
                "ProductName": "Watch",
                "ProductCode": "1234",
                "releaseDate": "10-Dec-2017",
                "discription": "model number 2134 titan",
                "price": 20,
                "StarRating": 4.1,
                "imageUrl": "https://www.pdmsince1885.com/wp-content/uploads/2017/04/plumbing_icon-1.png"
            },
            {
                "productId": 2,
                "ProductName": "Watch",
                "ProductCode": "1bew",
                "releaseDate": "15-Dec-2017",
                "discription": "model number ad2134 fastrack",
                "price": 20,
                "StarRating": 4.3,
                "imageUrl": "https://www.pdmsince1885.com/wp-content/uploads/2017/04/plumbing_icon-1.png"
            },
            {
                "productId": 3,
                "ProductName": "Watch",
                "ProductCode": "vbg1234",
                "releaseDate": "30-Dec-2017",
                "discription": "model number 2vfg134 max",
                "price": 20,
                "StarRating": 5.1,
                "imageUrl": "https://www.pdmsince1885.com/wp-content/uploads/2017/04/plumbing_icon-1.png"
            },
            {
                "productId": 4,
                "ProductName": "Watch",
                "ProductCode": "12gf34",
                "releaseDate": "20-Dec-2017",
                "discription": "model number 21gh34 titan",
                "price": 20,
                "StarRating": 3.1,
                "imageUrl": "https://www.pdmsince1885.com/wp-content/uploads/2017/04/plumbing_icon-1.png"
            }
        ];
    }
    OrderComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    OrderComponent = __decorate([
        core_1.Component({
            selector: 'order-app',
            templateUrl: 'app/order1/order1.html'
        })
    ], OrderComponent);
    return OrderComponent;
}());
exports.OrderComponent = OrderComponent;
//# sourceMappingURL=order1-list.component.js.map