import{ Component } from '@angular/core';

@Component({
selector: 'order-app',
templateUrl:'app/order1/order1.html'

})
export class OrderComponent{

    pageTitle:string = "Order list";
    imageWidth:number =50;
    showImage:boolean = false;
    


    orders: any[] = [

        {
            "productId": 1,
            "ProductName": "Watch",
            "ProductCode": "1234",
            "releaseDate": "10-Dec-2017",
            "discription": "model number 2134 titan",
            "price" : 20,
            "StarRating" : 4.1,
            "imageUrl" : "https://www.pdmsince1885.com/wp-content/uploads/2017/04/plumbing_icon-1.png"

        } ,   
        {
            "productId": 2,
            "ProductName": "Watch",
            "ProductCode": "1bew",
            "releaseDate": "15-Dec-2017",
            "discription": "model number ad2134 fastrack",
            "price" : 20,
            "StarRating" : 4.3,
            "imageUrl" : "https://www.pdmsince1885.com/wp-content/uploads/2017/04/plumbing_icon-1.png"

        } , 
        {
            "productId": 3,
            "ProductName": "Watch",
            "ProductCode": "vbg1234",
            "releaseDate": "30-Dec-2017",
            "discription": "model number 2vfg134 max",
            "price" : 20,
            "StarRating" : 5.1,
            "imageUrl" : "https://www.pdmsince1885.com/wp-content/uploads/2017/04/plumbing_icon-1.png"

        } , 
        {
            "productId": 4,
            "ProductName": "Watch",
            "ProductCode": "12gf34",
            "releaseDate": "20-Dec-2017",
            "discription": "model number 21gh34 titan",
            "price" : 20,
            "StarRating" : 3.1,
            "imageUrl" : "https://www.pdmsince1885.com/wp-content/uploads/2017/04/plumbing_icon-1.png"

        } 



    ];
    
    toggleImage(): void{

        this.showImage = !this.showImage;

    }
}