import React, { Component } from 'react';
import { linkData } from './linkData';
import { socialData } from './socialData';

const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {
    state = {
        sideBarOpen: false,
        cartOpen: false,
        cartItems:0,
        links: linkData,
        socialIcons: socialData,
        cart: []
    }

    // Handle Side Bar
    handleSidbar = () => {
        this.setState({sideBarOpen: !this.state.sideBarOpen})
    }

    // Handle Cart
    handleCart = () => {
        this.setState({cartOpen: !this.state.cartOpen})
    }

    // Close Cart 
    closeCart = () => {
        this.setState({cartOpen: false})
    }

    // Open Cart
    openCart = () => {
        this.setState({cartOpen: true})
    }
    render() {
        return(
            <ProductContext.Provider value={{
                ...this.state,
                handleSidbar: this.handleSidbar,
                handleCart: this.handleCart,
                closeCart: this.closeCart,
                openCart: this.openCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};