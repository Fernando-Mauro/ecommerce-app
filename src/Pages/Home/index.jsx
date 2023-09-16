import { useContext } from "react";
import { Card } from "../../components/Card"
import { Layout } from "../../components/Layout"
import { ProductDetail } from "../../components/ProductDetail";
import { useFetch } from "../../hooks/useFetch"
import { MainContext } from "../../Context/mainContext";

export const Home = () => {
    const products = useFetch({ url: "https://fakestoreapi.com/products?limit=20" });
    const { isOpenDetail } = useContext(MainContext);
    return (
        <Layout>
            <div className="grid gap-4 grid-cols-auto justify-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {
                    products?.map(product => (
                        <Card category={product.category}
                            {...product}
                            key={product.id}
                            id={product.id}
                        />
                    ))
                }
            </div>
            {isOpenDetail && <ProductDetail/>}
        </Layout>
    )
}
