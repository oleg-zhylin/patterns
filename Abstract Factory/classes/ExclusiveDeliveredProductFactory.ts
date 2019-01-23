import {AbstractFactory} from "../interfaces";
import {DeliveredProductStockProduct} from "./DeliveredProductStockProduct";
import {ExclusiveShopProduct} from "./ExclusiveShopProduct";

export class ExclusiveDeliveredProductFactory implements AbstractFactory {
    constructor(private priceValue: number) {}

    createStockProduct(){
        return new DeliveredProductStockProduct();
    }

    createShopProduct(){
        return new ExclusiveShopProduct(this.priceValue);
    }
}