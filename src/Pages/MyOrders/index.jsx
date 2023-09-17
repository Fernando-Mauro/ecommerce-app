import { useContext } from "react"
import { Layout } from "../../components/Layout"
import { MainContext } from "../../Context/mainContext"
import { OrderCart } from "../../components/OrderCart"
import { Link } from "react-router-dom"

export const MyOrders = () => {
    const { orders } = useContext(MainContext);
    return (
        <Layout>
            <div className="flex items-center justify-center relative  w-80 mb-4">
                <h1 className="font-medium text-xl"> My orders </h1>
            </div>
            <div className="flex flex-col w-80 gap-4">
                {
                    orders?.map((order, index) => {
                        return (
                            <Link className="border border-solid border-black px-8 py-4 rounded-xl flex flex-col w-full gap-4" to={`/my-order/${index}`} key={index}>
                                {
                                    order.products.map(product => (
                                        <OrderCart
                                            key={product.id}
                                            {...product}
                                            date={order.date}
                                            flag={true}
                                        />
                                    )
                                    )}
                                <div className="w-full">
                                    <p className="flex justify-between items-center">
                                        <span className="font-light">Total:</span>
                                        <span className="font-medium text-lg"> ${order.totalPrice} </span>
                                    </p>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </Layout>
    )
}
