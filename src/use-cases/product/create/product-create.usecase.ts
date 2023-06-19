import { ProductRepository } from "../../../repositories/product/product.repository";
import { provide } from "inversify-binding-decorators";
import {
    ICreateProductRequestDTO,
    ICreateProductResponseDTO,
} from "./product-create.dto";

@provide(CreateProductUseCase)
class CreateProductUseCase {
    constructor(private productRepository: ProductRepository) {}

    async execute(
        payload: ICreateProductRequestDTO,
    ): Promise<ICreateProductResponseDTO | null> {
        try {
            const product: any = {
                name: payload.name,
                description: payload.description,
                photoUrl: payload.photoUrl,
                price: payload.price,
            };

            await this.productRepository.create(product);

            return {
                id: product.id,
                name: product.name,
                description: product.description,
                photoUrl: product.photoUrl,
                price: product.price,
            };
        } catch (error: any) {
            throw error;
        }
    }
}

export { CreateProductUseCase };
