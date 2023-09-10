import { Card } from "../../components/Card"
import { Layout } from "../../components/Layout"
import { useFetch } from "../../hooks/useFetch"

export const Home = () => {
    const products = useFetch({ url: "https://fakestoreapi.com/products?limit=10" });
    return (
        <Layout>
            <div className="grid gap-3 grid-cols-4 w-full max-w-screen-lg">
                {
                    products?.map(product => (
                        <Card category={product.category}
                            {...product}
                            key={product.id}
                        />
                    ))
                }
            </div>
        </Layout>
    )
}
