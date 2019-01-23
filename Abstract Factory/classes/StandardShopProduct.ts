import {AbstractShopProduct} from "../interfaces";

export class StandardShopProduct implements AbstractShopProduct{
    private priceValue: number;

    constructor(price:number) {
        this.priceValue = price;
    }

    price():number {
        return this.priceValue;
    }
}