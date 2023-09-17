import { useContext } from "react"
import { Layout } from "../../components/Layout"
import { OrderCart } from "../../components/OrderCart"
import { MainContext } from "../../Context/mainContext"

export const MyOrder = () => {
    const { order } = useContext(MainContext);
    return (
        <Layout>
            MyOrder
            <div className="flex flex-col w-80 gap-4">
                {
                    order?.slice(-1)[0]?.products?.map(element => (
                        <OrderCart
                            key={element.id}
                            image={element.image}
                            title={element.title}
                            price={element.price}
                            count={element.count}
                            id={element.id}
                            flag={true}
                        />
                    ))
                }
            </div>
        </Layout>
    )
}
