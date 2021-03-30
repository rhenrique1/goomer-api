import { validate } from "class-validator";
import { getRepository, Like } from "typeorm";
import { Request } from "express";
import { OpeningHours } from "../entity/OpeningHours";
import { OpeningHoursDto } from "../DTOs/OpeningHoursDto";
export class OpeningHoursServices {

  private openingHoursRepository = getRepository(OpeningHours);

  public async update(request: Request): Promise<OpeningHours> {
    const p = new OpeningHoursDto(request.body);

    validate(p).then((errors) => {
      if (errors.length > 0) {
        return errors.map(v => v.constraints);
      }
    });

    const openingHours = await this.openingHoursRepository.save(p);
    return openingHours;
  }

  public async getOpeningHourssByRestaurantId(restaurantId: string) {
    return await this.openingHoursRepository.find({
      where: { restaurantId: restaurantId },
    });
  }
}