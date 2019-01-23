import {AbstractShopProduct} from "../interfaces";

export class ExclusiveShopProduct implements AbstractShopProduct {
    private priceValue: number;

    constructor(price: number) {
        this.priceValue = price;
    }

    price() {
        return this.priceValue + 42;
    }
}