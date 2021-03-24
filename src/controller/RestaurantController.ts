import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Restaurant} from "../entity/Restaurant";

export class RestaurantController {

  private restaurantRepository = getRepository(Restaurant);
  
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

}