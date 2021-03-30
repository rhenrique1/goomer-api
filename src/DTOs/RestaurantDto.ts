import { IsInt, IsString } from "class-validator";

interface Restaurant {
  id: number;
  name: string;
  photo: string;
  address: string;
}
export class RestaurantDto {

  constructor(restaurant: Restaurant) {
    this.id = restaurant.id;
    this.photo = restaurant.photo;
    this.name = restaurant.name;
    this.address = restaurant.address;
  }

  @IsInt()
  id: number;

  @IsString()
  name: string;

  @IsString()
  photo: string;

  @IsString()
  address: string;
}