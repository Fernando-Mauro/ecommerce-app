import { useContext } from "react"
import { Layout } from "../../components/Layout"
import { MainContext } from "../../Context/mainContext"
import { ProfileView } from "./ProfileView";
import { LoginView } from "./LoginView";

export const SignIn = () => {
    const { loginView } = useContext(MainContext);
    
    return (
        <>
            <Layout>Sign In</Layout>
            <div className="flex justify-center items-center">
                {
                    loginView ?
                    <ProfileView />:
                    <LoginView />
                }
            </div>
        </>
    )
}
