import { validate } from "class-validator";
import { ProductDto } from "../DTOs/ProductDto";
import { Product } from "../entity/Product";

export class ProductServices {

  public async update(product: ProductDto): Promise<Product | any> {
    await validate(product, { skipMissingProperties: true }).then(errors => {
      // errors is an array of validation errors
      if (errors.length > 0) {
        let errorTexts = [];
        for (const errorItem of errors) {
          errorTexts = errorTexts.concat(errorItem.constraints);
        }
        console.log(errorTexts);
        return errorTexts;
      } else {
        // pass 'product' object to repository/service
        return product;
      }
    });
  }
}