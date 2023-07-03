import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound';
import SignIn from '../SignIn';
import NavBar from '../../Components/NavBar';
import Layout from '../../Components/Layout/Layout';
import CheckoutSideMenu from '../../Components/CheckoutSideMenu/Index';
import PrivateRoutes from '../../Utils/PrivateRoutes';
import { ShopiContext } from '../../Context/ShopiContext';
import './App.css'


function App() {
  return (
    <>
      <ShopiContext>
        <BrowserRouter>
          <NavBar />
          <Layout>
            <Routes>

              <Route path='/' element={<Home/>} />
              <Route path='/:category' element={<Home/>} />
              <Route path='/sign-in' element={<SignIn/>} />
              <Route path='/*' element={<NotFound/>} />

              <Route element={<PrivateRoutes/>} >
                <Route path='/my-account' element={<MyAccount/>} />
                <Route path='/my-order' element={<MyOrder/>} />
                <Route path='/my-order/last' element={<MyOrder/>} />
                <Route path='/my-order/:id' element={<MyOrder/>} />
                <Route path='/my-orders' element={<MyOrders/>} />
              </Route>

            </Routes>
            <CheckoutSideMenu />
          </Layout>
        </BrowserRouter>
      </ShopiContext>
    </>
  )
}

export default App;