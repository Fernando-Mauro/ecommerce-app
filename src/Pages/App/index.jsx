import { useRoutes,  BrowserRouter } from "react-router-dom"

import { MyAccount } from "../MyAccount"
import { Home } from '../Home'
import { NotFound } from '../NotFound'
import { SignIn } from '../SignIn'
import { MyOrder } from "../MyOrder"
import { MyOrders } from "../MyOrders"

const AppRoutes = () => {

    const routes = useRoutes([
        {path: "/", element: <Home />},
        {path : "my-orders",element: <MyOrders/>},
        {path : "my-account", element: <MyAccount/>},
        {path : "sign-in", element: <SignIn/>},
        {path : "my-order", element: <MyOrder/>},
        {path : "*", element: <NotFound/>},
    ]);

    return routes;
}

export const App = () => {
    return (
        <BrowserRouter>
            <AppRoutes/>
        </BrowserRouter>
    )
}