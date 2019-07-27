import React from 'react';
import {FaBars, FaCartPlus} from 'react-icons/fa';
import styled from 'styled-components';
import { ProductConsumer } from '../context';

export default function Navbar() {
    return <ProductConsumer>
        {value => {
            const{cartItems, handleSidbar, handleCart} = value;
            return <NavWrapper>
                <div className="nav-center">
                    <FaBars className="nav-icon" onClick={handleSidbar}/>
                    <img src={require('../images/logo.png')} alt="goboxify logo"/>
                    <div className="nav-cart">
                        <FaCartPlus className="nav-icon" onClick={handleCart}/>
                        <div className="cart-items">{cartItems}</div>
                    </div>
                </div>
            </NavWrapper>
        }}
    </ProductConsumer>
}

const NavWrapper = styled.nav`
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    width: 100%;
    padding: 1rem 1.5rem;
    background: var(--lenColor);
    border-bottom: 3px solid var(--primaryColor);
    .nav-center {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 1170px;
        margin: auto;
    }
    .nav-icon {
        font-size: 1.5rem;
        cursor: pointer;
    }
    .nav-cart {
        position: relative;
    }
    .cart-items {
        background: var(--primaryColor);
        font-size: 0.85rem;
        position: absolute;
        top: -8px;
        right: -8px;
        padding: 0 5px;
        border-radius: 50%;
    }

`
