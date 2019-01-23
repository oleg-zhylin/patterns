import {AbstractStockProduct} from "./AbstractStockProduct";
import {AbstractShopProduct} from "./AbstractShopProduct";

export interface AbstractFactory {
    createStockProduct(): AbstractStockProduct;
    createShopProduct(): AbstractShopProduct;
}