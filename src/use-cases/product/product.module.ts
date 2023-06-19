import { CreateModule } from "@expressots/core";
import { ProductFindallController } from "./findall/product-findall.controller";
import { ProductCreateController } from "./create/product-create.controller";

const ProductModule = CreateModule([
    ProductFindallController,
    ProductCreateController,
]);

export { ProductModule };
