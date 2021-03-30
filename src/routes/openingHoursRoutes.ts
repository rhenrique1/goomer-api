import { OpeningHoursController } from "../controller/OpeningHoursController";

export const OpeningHoursRoutes = [{
	method: "get",
	route: "/OpeningHours",
	controller: OpeningHoursController,
	action: "all"
}, {
	method: "get",
	route: "/OpeningHours/:id",
	controller: OpeningHoursController,
	action: "one"
}, {
	method: "post",
	route: "/OpeningHours",
	controller: OpeningHoursController,
	action: "save"
}, {
	method: "delete",
	route: "/OpeningHours/:id",
	controller: OpeningHoursController,
	action: "remove"
}, {
	method: "put",
	route: "/OpeningHours",
	controller: OpeningHoursController,
	action: "update"
}, {
	method: "get",
	route: "/restaurant/OpeningHours/:restaurantId",
	controller: OpeningHoursController,
	action: "getOpeningHoursByRestaurantId"
}];
