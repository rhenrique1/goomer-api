import {RestaurantController} from "./controller/RestaurantController";

export const Routes = [{
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
    action: "save"
}, {
    method: "delete",
    route: "/Restaurants/:id",
    controller: RestaurantController,
    action: "remove"
}];