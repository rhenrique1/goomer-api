import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Product } from "../entity/Product";
import { plainToClass } from "class-transformer";
import { ProductDto } from '../DTOs/ProductDto';
import { isArray, validate } from "class-validator";
import { ProductServices } from "../services/ProductServices";
export class ProductController {

	private productRepository = getRepository(Product);
	private productServices: ProductServices;

	constructor() {
		this.productServices = new ProductServices();
	}

	async all(request: Request, response: Response, next: NextFunction) {
		return this.productRepository.find();
	}

	async one(request: Request, response: Response, next: NextFunction) {
		return this.productRepository.findOne(request.params.id);
	}

	async save(request: Request, response: Response, next: NextFunction) {
		return this.productRepository.save(request.body);
	}

	async remove(request: Request, response: Response, next: NextFunction) {
		let productToRemove = await this.productRepository.findOne(request.params.id);
		await this.productRepository.remove(productToRemove);
	}

	async update(request: Request, response: Response, next: NextFunction) {
		const product = plainToClass(ProductDto, request.body);
		var res = await this.productServices.update(product);

		if ((res instanceof Product)) {
			console.log('entrou no if');
			let productToUpdate = await this.productRepository.findOne(res.id);
			await this.productRepository.update(productToUpdate.id, res);
			return response.status(200).send(res);
		} else {
			console.log('entrou no else');
			console.log(res);
			return response.status(400).send(res);
		}
	}
}
