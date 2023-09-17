import { useContext } from "react"
import { Layout } from "../../components/Layout"
import { OrderCart } from "../../components/OrderCart"
import { MainContext } from "../../Context/mainContext"
import { useParams } from "react-router-dom"

export const MyOrder = () => {
    const { lastOrder, orders } = useContext(MainContext);
    const params = useParams();
    const indexOfOrder = Number(params.id)

    const specificOrder = isNaN(indexOfOrder) ? lastOrder : orders[indexOfOrder];

    return (
        <Layout>
            MyOrder
            <div className="flex flex-col w-80 gap-4">
                {
                    specificOrder?.products?.map(product => (
                        <OrderCart
                            key={product.id}
                            {...product}
                            flag={true}
                            date={lastOrder.date}
                        />
                    ))
                }
                <div className="w-full">
                    <p className="flex justify-between items-center">
                        <span className="font-light">Total:</span>
                        <span className="font-medium text-lg"> ${specificOrder.totalPrice} </span>
                    </p>
                </div>
            </div>
        </Layout>
    )
}
