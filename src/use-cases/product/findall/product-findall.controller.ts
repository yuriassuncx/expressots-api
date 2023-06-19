import { BaseController, StatusCode } from "@expressots/core";
import { controller, httpGet, response } from "inversify-express-utils";
import { Response } from "express";
import { IFindAllProductResponseDTO } from "./product-findall.dto";
import { FindAllProductUseCase } from "./product-findall.usecase";

@controller("/product/findall")
class ProductFindallController extends BaseController {
    constructor(private findallProductUseCase: FindAllProductUseCase) {
        super();
    }

    @httpGet("/")
    async execute(
        @response() res: Response,
    ): Promise<IFindAllProductResponseDTO> {
        return this.callUseCase(
            this.findallProductUseCase.execute(),
            res,
            StatusCode.OK,
        );
    }
}

export { ProductFindallController };
