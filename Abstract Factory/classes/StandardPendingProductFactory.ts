import {AbstractFactory} from "../interfaces";
import {StandardShopProduct} from "./StandardShopProduct";
import {PendingDeliveryStockProduct} from "./PendingDeliveryStockProduct";

export class StandardPendingProductFactory implements AbstractFactory {
    constructor(private pendingDays:number, private priceValue: number) {}

    createStockProduct() {
        return new PendingDeliveryStockProduct(this.pendingDays);
    }

    createShopProduct() {
        return new StandardShopProduct(this.priceValue);
    }
}