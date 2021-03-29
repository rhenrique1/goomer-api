import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Product } from "../entity/Product";
import { ProductDto } from '../DTOs/ProductDto';
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
		const product = await this.productServices.update(request);
		if (product instanceof ProductDto) {
			return response.status(200).json({ msg: 'Product updated' });
		}
		return response.status(404).json({ msg: 'Product not found' });
	}

	async getProductsByRestaurantId(request: Request, response: Response, next: NextFunction) {
		return this.productServices.getProductsByRestaurantId(request.params.restaurantId);
	}
}
