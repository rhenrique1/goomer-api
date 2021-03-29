import { validate } from "class-validator";
import { getRepository } from "typeorm";
import { Request, Response } from "express";
import { Restaurant } from "../entity/Restaurant";
import { RestaurantDto } from "../DTOs/RestaurantDto";

export class RestaurantServices {

  private restaurantRepository = getRepository(Restaurant);

  public async update(request: Request): Promise<Restaurant> {
    const r = new RestaurantDto(request.body);

    validate(r).then((errors) => {
      if (errors.length > 0) {
        return errors.map(v => v.constraints);
      }
    });

    const restaurant = await this.restaurantRepository.save(r);
    return restaurant;
  }


}