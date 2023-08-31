import { MyAccount } from "../MyAccount"
import { Home } from '../Home'
import { NotFound } from '../NotFound'
import { SignIn } from '../SignIn'
import { MyOrder } from "../MyOrder"
import { MyOrders } from "../MyOrders"

function App() {

  return (
    <>
      <h1 className='bg-red-600'>Hola Mundo</h1>
      <Home />
      <MyAccount />
      <MyOrder/>
      <MyOrders/>
      <NotFound />
      <SignIn />
    </>
  )
}

export default App
