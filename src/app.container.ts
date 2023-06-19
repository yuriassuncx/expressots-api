import { AppContainer } from "@expressots/core";
import { AppModule } from "./use-cases/app/app.module";
import { ProductModule } from "./use-cases/product/product.module";

const appContainer = new AppContainer();

const container = appContainer.create([
    // Add your modules here
    AppModule,
    ProductModule,
]);

export { container };
