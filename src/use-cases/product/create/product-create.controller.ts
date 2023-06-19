import { BaseController, StatusCode } from "@expressots/core";
import {
    controller,
    httpPost,
    requestBody,
    response,
} from "inversify-express-utils";
import { Response } from "express";
import {
    ICreateProductRequestDTO,
    ICreateProductResponseDTO,
} from "./product-create.dto";
import { CreateProductUseCase } from "./product-create.usecase";

@controller("/product/create")
class ProductCreateController extends BaseController {
    constructor(private createProductUseCase: CreateProductUseCase) {
        super();
    }

    @httpPost("/")
    async execute(
        @requestBody() payload: ICreateProductRequestDTO,
        @response() res: Response,
    ): Promise<ICreateProductResponseDTO> {
        return this.callUseCase(
            this.createProductUseCase.execute(payload),
            res,
            StatusCode.Created,
        );
    }
}

export { ProductCreateController };
