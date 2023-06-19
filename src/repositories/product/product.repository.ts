import { inject } from "inversify";
import { Product } from "../../entities/product.entity";
import { IProductRepository } from "../product-repository.interface";
import { provide } from "inversify-binding-decorators";
import { PrismaService } from "../../providers/database/prisma.service";

@provide(ProductRepository)
class ProductRepository implements IProductRepository<Product> {
    @inject(PrismaService) private prismaService!: PrismaService;

    async create(item: Product): Promise<Product | null> {
        const product = await this.prismaService.client.product.create({
            data: item,
        });

        return product;
    }

    async update(item: Product): Promise<Product | null> {
        throw new Error("Method not implemented.");
    }

    async delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    async find(id: string): Promise<Product | null> {
        throw new Error("Method not implemented.");
    }

    async findAll(): Promise<Product[]> {
        const products = await this.prismaService.client.product.findMany();

        return products;
    }
}

export { ProductRepository };
