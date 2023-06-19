import { provide } from "inversify-binding-decorators";
import { ProductRepository } from "../../../repositories/product/product.repository";
import { Product } from "../../../entities/product.entity";

@provide(FindAllProductUseCase)
class FindAllProductUseCase {
    constructor(private productRepository: ProductRepository) {}

    async execute(): Promise<Product[] | null> {
        try {
            const products = await this.productRepository.findAll();

            return products;
        } catch (error: any) {
            throw error;
        }
    }
}

export { FindAllProductUseCase };
