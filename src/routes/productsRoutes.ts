import { ProductController } from "../controller/ProductController";

export const ProductsRoutes = [{
	method: "get",
	route: "/Products",
	controller: ProductController,
	action: "all"
}, {
	method: "get",
	route: "/Products/:id",
	controller: ProductController,
	action: "one"
}, {
	method: "post",
	route: "/Products",
	controller: ProductController,
	action: "save"
}, {
	method: "delete",
	route: "/Products/:id",
	controller: ProductController,
	action: "remove"
}, {
	method: "put",
	route: "/Products",
	controller: ProductController,
	action: "save"
}, {
	method: "get",
	route: "/restaurant/products/:restaurantId",
	controller: ProductController,
	action: "getProductsByRestaurantId"
}, {
	method: "get",
	route: "/Products/name/:param",
	controller: ProductController,
	action: "getByNameFilter"
}];