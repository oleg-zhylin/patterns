import {AbstractStockProduct} from "../interfaces";

export class DeliveredProductStockProduct implements AbstractStockProduct{
    deliveryTime(): number {
        return 0;
    }
}