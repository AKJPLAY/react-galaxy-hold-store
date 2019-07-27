import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Switch} from 'react-router-dom';
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Contact from './pages/ContactPage';
import Cart from './pages/CartPage';
import Default from './pages/Default';
import SingalProduct from './pages/SingalProductPage';
import Products from './pages/ProductsPage';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import SideCart from './components/SideCart';


function App() {
  return (
    <>
    {/*navbar sidebar, cart, footer */}
    <Navbar />
    <Sidebar />
    <SideCart />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/About"  component={About} />
      <Route path="/Contact"  component={Contact} />
      <Route path="/Cart"  component={Cart} />
      <Route path="/Products/:id"  component={SingalProduct} />
      <Route path="/Products" exact component={Products} />
      <Route path="/" exact component={Home} />
      <Route component={Default} />
    </Switch>
    <Footer />
    </>
  );
}

export default App;
