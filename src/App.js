import { Fragment } from "react";
import {Route, Routes, Navigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

import Layout from "./components/Layout/Layout";
import Home from "./components/pages/Home";
import Menu from "./components/pages/Menu";
import Cart from "./components/Cart/Cart";
import Overlay from "./components/UI/Overlay";
import CheckoutModal from "./components/UI/CheckoutModal";

function App() {
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const showCheckoutModal = useSelector(state => state.ui.isCheckoutValid);

  return (
    <Fragment>
      <Layout>
        <CheckoutModal/>
        {showCheckoutModal && <Overlay/>}
        {showCart && <Overlay/>}
        <Cart/>
        <Routes>
          <Route path="/" element={<Navigate to="/home"/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/menu" element={<Menu/>}></Route>
          <Route path="*" element={<Navigate to="/home"/>}></Route>
        </Routes>
      </Layout>
    </Fragment>
  )
}

export default App;
