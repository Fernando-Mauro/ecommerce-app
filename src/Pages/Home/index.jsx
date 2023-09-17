import { useContext, useEffect } from "react";
import { Card } from "../../components/Card"
import { Layout } from "../../components/Layout"
import { ProductDetail } from "../../components/ProductDetail";
import { MainContext } from "../../Context/mainContext";
import { useParams } from "react-router-dom";

export const Home = () => {
    const { isOpenDetail, filteredProducts , setUrl} = useContext(MainContext);
    const params = useParams();
    const baseUrl = params.category ? `https://fakestoreapi.com/products/category/${params.category}?limit=30` : "https://fakestoreapi.com/products?limit=30";
    useEffect(() => {
        setUrl(baseUrl);
    }, [baseUrl]);
    
    return (
        <Layout>
            <div className="flex items-center justify-center relative  w-80 mb-4">
                <h1 className="font-medium text-xl"> Home </h1>
            </div>

            <div className="grid gap-4 grid-cols-auto justify-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {   
                    filteredProducts?.length !== 0 ?
                    filteredProducts?.map(product => (
                        <Card category={product.category}
                            {...product}
                            key={product.id}
                            id={product.id}
                        />
                    )) :
                    <p className="text-center col-span-4"> No products found</p>
                }
            </div>
            {isOpenDetail && <ProductDetail />}
        </Layout>
    )
}
