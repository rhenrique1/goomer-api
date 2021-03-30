import { RestaurantsRoutes } from "./restaurantsRoutes";
import { ProductsRoutes } from "./productsRoutes";
import { OpeningHoursRoutes } from "./openingHoursRoutes";

export const Routes = [...RestaurantsRoutes, ...ProductsRoutes, ...OpeningHoursRoutes];