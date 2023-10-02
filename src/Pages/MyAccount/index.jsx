import { useContext } from "react"
import { Layout } from "../../components/Layout"
import { MainContext } from "../../Context/mainContext"

export const MyAccount = () => {
    const {account} = useContext(MainContext);

    const {name, email} = account;
    return (
        <Layout>
            MyAccount
            <div className='flex flex-col w-80'>
                <p>
                    <span className='font-light text-sm'>Name: </span>
                    <span>{name}</span>
                </p>
                <p>
                    <span className='font-light text-sm'>Email: </span>
                    <span>{email}</span>
                </p>
            </div>
        </Layout>
    )
}
