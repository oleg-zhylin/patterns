import {AbstractStockProduct} from "../interfaces";

export class PendingDeliveryStockProduct implements AbstractStockProduct{

    private pendingDays:number;

    constructor(pendingDays:number) {
        this.pendingDays = pendingDays;
    }

    deliveryTime(): number {
        return this.pendingDays + this.pendingDays * 0.25;
    }
}