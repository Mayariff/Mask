import {useRoutes} from "react-router-dom";
import {routingData} from "./routingData";

const Routes = () => {
    const routes = useRoutes(routingData)
    return routes
};

export default Routes;