import { IsDecimal, IsInt, IsString } from "class-validator";

interface Product {
  id: number;
  name: string;
  photo: string;
  description: string;
  price: number;
  promotionalPrice: number;
  restaurantId: number;
}
export class ProductDto {

  constructor(product: Product) {
    this.id = product.id;
    this.name = product.name;
    this.photo = product.photo;
    this.description = product.description;
    this.price = product.price;
    this.promotionalPrice = product.promotionalPrice;
    this.restaurantId = product.restaurantId;
  }

  @IsInt()
  id: number;

  @IsString()
  name: string;

  @IsString()
  photo: string;

  @IsString()
  description: string;

  @IsDecimal()
  price: number;

  @IsDecimal()
  promotionalPrice: number;

  @IsInt()
  restaurantId: number;
}