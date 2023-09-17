import { useRoutes, BrowserRouter } from "react-router-dom"

import { MyAccount } from "../MyAccount"
import { Home } from '../Home'
import { NotFound } from '../NotFound'
import { SignIn } from '../SignIn'
import { MyOrder } from "../MyOrder"
import { MyOrders } from "../MyOrders"
import { Navbar } from "../../components/Navbar"
import { MainContextProvider } from "../../Context/mainContext"

const AppRoutes = () => {

    const routes = useRoutes([
        { path: "/", element: <Home /> },
        { path: "/:category", element: <Home /> },
        { path: "my-orders", element: <MyOrders /> },
        { path: "my-account", element: <MyAccount /> },
        { path: "sign-in", element: <SignIn /> },
        { path: "my-order", element: <MyOrder /> },
        { path: "my-order/last", element: <MyOrder/> },
        { path: "my-order/:id", element: <MyOrder /> },
        { path: "my-orders", element: <MyOrders /> },
        { path: "*", element: <NotFound /> },
    ]);

    return routes;
}

export const App = () => {

    return (
        <MainContextProvider>
            <BrowserRouter>
                <Navbar />
                <AppRoutes />
            </BrowserRouter>
        </MainContextProvider>
    )
}