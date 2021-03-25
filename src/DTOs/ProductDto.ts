import { IsDecimal, IsInt, IsString } from "class-validator";

export class ProductDto {
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