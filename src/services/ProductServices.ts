import { validate } from "class-validator";
import { getRepository, Like } from "typeorm";
import { Request } from "express";
import { Product } from "../entity/Product";
import { ProductDto } from "../DTOs/ProductDto";
export class ProductServices {

  private productRepository = getRepository(Product);

  public async update(request: Request): Promise<Product> {
    const p = new ProductDto(request.body);

    validate(p).then((errors) => {
      if (errors.length > 0) {
        return errors.map(v => v.constraints);
      }
    });

    const product = await this.productRepository.save(p);
    return product;
  }

  public async getProductsByRestaurantId(restaurantId: string) {
    return await this.productRepository.find({
      where: { restaurantId: restaurantId },
    });
  }

  public async getByNameLike(request: Request) {
    const paramObject = JSON.parse(request.params.param);
    return await this.productRepository.createQueryBuilder('product')
      .innerJoinAndSelect('product.restaurant', 'restaurant')
      .where(`product.name LIKE ('%${paramObject.nameLike}%')`)
      .getMany();
    // find({ where: { restaurantId: paramObject.restaurantId, name: Like(`%${paramObject.nameLike}%`) },});
  }
}