import { provide } from "inversify-binding-decorators";
import { randomUUID } from "crypto";
import { IEntity } from "./base.entity";

@provide(Product)
class Product implements IEntity {
    public id!: string;
    public name!: string;
    public price!: number;
    public description!: string;
    public photoUrl!: string;

    constructor(props: Omit<Product, "id">, id?: string) {
        Object.assign(this, props);

        if (!id) {
            this.id = randomUUID();
        }
    }
}

export { Product };
