import {ExclusiveDeliveredProductFactory, StandardPendingProductFactory} from './classes';

let exclusiveDeliveredProductFactory = new ExclusiveDeliveredProductFactory(1);
let standardPendingProductFactory = new StandardPendingProductFactory(1, 1);
let shopProduct = exclusiveDeliveredProductFactory.createShopProduct();
let standardShopProduct = standardPendingProductFactory.createShopProduct();
let stockProduct = exclusiveDeliveredProductFactory.createStockProduct();
let standardStockProduct = standardPendingProductFactory.createStockProduct();

console.log(shopProduct, standardShopProduct, stockProduct, standardStockProduct);