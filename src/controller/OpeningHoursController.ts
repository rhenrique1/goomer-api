import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { OpeningHoursDto } from '../DTOs/OpeningHoursDto';
import { OpeningHoursServices } from "../services/OpeningHoursServices";
import { OpeningHours } from "../entity/OpeningHours";
export class OpeningHoursController {

	private openingHoursRepository = getRepository(OpeningHours);
	private openingHoursServices: OpeningHoursServices;

	constructor() {
		this.openingHoursServices = new OpeningHoursServices();
	}

	async all(request: Request, response: Response, next: NextFunction) {
		return this.openingHoursRepository.find();
	}

	async one(request: Request, response: Response, next: NextFunction) {
		return this.openingHoursRepository.findOne(request.params.id);
	}

	async save(request: Request, response: Response, next: NextFunction) {
		return this.openingHoursRepository.save(request.body);
	}

	async remove(request: Request, response: Response, next: NextFunction) {
		let openingHoursToRemove = await this.openingHoursRepository.findOne(request.params.id);
		await this.openingHoursRepository.remove(openingHoursToRemove);
	}

	async update(request: Request, response: Response, next: NextFunction) {
		const OpeningHours = await this.openingHoursServices.update(request);
		if (OpeningHours instanceof OpeningHoursDto) {
			return response.status(200).json({ msg: 'Opening hours updated' });
		}
		return response.status(404).json({ msg: 'Opening hours not found' });
	}
}
