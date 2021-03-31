import { getRepository } from "typeorm";
import { Request } from "express";
import { Restaurant } from "../entity/Restaurant";
import { OpeningHours } from "../entity/OpeningHours";
import { Product } from "../entity/Product";

export class RestaurantServices {

  private restaurantRepository = getRepository(Restaurant);
  private openingHoursRepository = getRepository(OpeningHours);
  private productRepository = getRepository(Product);

  public async insertOrUpdate(request: Request) {
    const r = request.body;

    const restaurant = new Restaurant();
    restaurant.id = r.id;
    restaurant.address = r.address;
    restaurant.name = r.name;
    restaurant.photo = r.photo;

    const newRestaurant = await this.restaurantRepository.save(restaurant);

    if (newRestaurant) {
      let openingHours: OpeningHours[] = [];
      let products: Product[] = [];

      r.openingHours.forEach((element: OpeningHours) => {
        openingHours.push(element);
      });

      r.products.forEach((element: Product) => {
        products.push(element);
      });

      openingHours.forEach(async element => {
        const newOpeningHours = this.openingHoursRepository.create(element);
        newOpeningHours.restaurant = newRestaurant;
        await this.openingHoursRepository.save(newOpeningHours);
      });

      products.forEach(async element => {
        const newProducts = this.productRepository.create(element);
        newProducts.restaurant = newRestaurant;
        await this.productRepository.save(newProducts);
      });

      return true;
    }

    return null;
  }

  public async getByNameLike(request: Request) {
    const paramObject = JSON.parse(request.params.param);
    return await this.restaurantRepository.createQueryBuilder("restaurant")
      .leftJoinAndSelect("restaurant.openingHours", "openingHours")
      .where(`restaurant.name LIKE ('%${paramObject.nameLike}%')`)
      .getMany();
  }
}