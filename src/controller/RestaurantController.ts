import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Restaurant } from "../entity/Restaurant";
import { RestaurantDto } from "../DTOs/RestaurantDto";
import { RestaurantServices } from "../services/RestaurantServices";

export class RestaurantController {
  private restaurantRepository = getRepository(Restaurant);
  private restaurantServices: RestaurantServices;

  constructor() {
    this.restaurantServices = new RestaurantServices();
  }

  async all(request: Request, response: Response, next: NextFunction) {
    return this.restaurantRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.restaurantRepository.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.restaurantRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let restaurantToRemove = await this.restaurantRepository.findOne(request.params.id);
    await this.restaurantRepository.remove(restaurantToRemove);
  }

  async update(request: Request, response: Response, next: NextFunction) {
    const restaurant = await this.restaurantServices.update(request);
    if (restaurant instanceof RestaurantDto) {
      return response.status(200).json({ msg: 'Restaurant updated' });
    }
    return response.status(404).json({ msg: 'Restaurant not found' });
  }

  async getByNameFilter(request: Request, response: Response, next: NextFunction) {
    return this.restaurantServices.getByNameLike(request.params.nameLike);
  }
}