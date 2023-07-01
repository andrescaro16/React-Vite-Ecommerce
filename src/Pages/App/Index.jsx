import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound';
import SignIn from '../SignIn';
import NavBar from '../../Components/NavBar';
import Layout from '../../Components/Layout/Layout';
import CheckoutSideMenu from '../../Components/CheckoutSideMenu/Index';
import { ShopiContext } from '../../Context/ShopiContext';
import './App.css'


const AppRoutes = () => {
  const routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/my-account', element: <MyAccount />},
    {path: '/my-order', element: <MyOrder />},
    {path: '/my-order/last', element: <MyOrder />},
    {path: '/my-order/:id', element: <MyOrder />},
    {path: '/my-orders', element: <MyOrders />},
    {path: '/sign-in', element: <SignIn />},
    {path: '/*', element: <NotFound />},
  ])
  return routes
}


function App() {
  return (
    <>
      <ShopiContext>
        <BrowserRouter>
          <NavBar />
          <Layout>
            <AppRoutes />
            <CheckoutSideMenu />
          </Layout>
        </BrowserRouter>
      </ShopiContext>
    </>
  )
}

export default App