import { useContext } from "react";
import { CheckoutSideMenu } from "../../components/CheckoutSideMenu";
import { MainContext } from "../../Context/mainContext";

export const Layout = ({children}) => {
  const {isOpenCheckout} = useContext(MainContext);
  return (
    <div className="flex flex-col mt-20 items-center">
        {
            children
        }
        { isOpenCheckout && <CheckoutSideMenu />}
    </div>
  )
}
