import { RestaurantController } from "../controller/RestaurantController";

export const RestaurantsRoutes = [{
	method: "get",
	route: "/Restaurants",
	controller: RestaurantController,
	action: "all"
}, {
	method: "get",
	route: "/Restaurants/:id",
	controller: RestaurantController,
	action: "one"
}, {
	method: "post",
	route: "/Restaurants",
	controller: RestaurantController,
	action: "insertOrUpdate"
}, {
	method: "delete",
	route: "/Restaurants/:id",
	controller: RestaurantController,
	action: "remove"
}, {
	method: "put",
	route: "/Restaurants",
	controller: RestaurantController,
	action: "insertOrUpdate"
}, {
	method: "get",
	route: "/Restaurants/name/:param",
	controller: RestaurantController,
	action: "getByNameFilter"
}];