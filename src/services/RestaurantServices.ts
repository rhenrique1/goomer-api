import { getRepository } from "typeorm";
import { Request } from "express";
import { Restaurant } from "../entity/Restaurant";
import { OpeningHours } from "../entity/OpeningHours";

export class RestaurantServices {

  private restaurantRepository = getRepository(Restaurant);
  private openinghoursRepository = getRepository(OpeningHours);

  public async insertOrUpdate(request: Request) {
    const r = request.body;

    const r2 = new Restaurant();
    r2.id = r.id;
    r2.address = r.address;
    r2.name = r.name;
    r2.photo = r.photo;

    const restaurant = await this.restaurantRepository.save(r2);

    if (restaurant) {
      let openingHours: OpeningHours[] = [];

      r.openingHours.forEach(element => {
        openingHours.push(element);
      });

      openingHours.forEach(async element => {
        const newOpeningHours = this.openinghoursRepository.create(element);
        newOpeningHours.restaurant = restaurant;
        await this.openinghoursRepository.save(newOpeningHours);
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