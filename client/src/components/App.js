import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import PetLandingPage from "./views/LandingPage/Pet/PetLandingPage.js";
import AccessoriesLandingPage from "./views/LandingPage/Accessories/AccessoriesLandingPage.js";
import PetFoodLandingPage from "./views/LandingPage/PetFood/PetFoodLandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import UploadProductPage from "./views/UploadProductPage/UploadProductPage";
import DetailProductPage from './views/DetailProductPage/DetailProductPage';
import CartPage from './views/CartPage/CartPage';
import HistoryPage from './views/HistoryPage/HistoryPage';

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={Auth(PetLandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/product/upload" component={Auth(UploadProductPage, true)} />
          <Route exact path="/product/pet/:productId" component={Auth(DetailProductPage, null)} />
          <Route exact path="/user/cart" component={Auth(CartPage, true)} />
          <Route exact path="/history" component={Auth(HistoryPage, true)} />

          <Route exact path="/product/pet" component={Auth(PetLandingPage, null)} />
          <Route exact path="/product/pet-food" component={Auth(PetFoodLandingPage, null)} />
          <Route exact path="/product/accessories" component={Auth(AccessoriesLandingPage, null)} />
          <Route exact path="/booking-service" component={Auth(PetLandingPage, null)} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
