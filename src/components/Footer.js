import React from 'react';
import { ProductConsumer } from '../context';
import styled from 'styled-components';

export default function Footer() {
    return <ProductConsumer>
        {value => {
            return <FooterWrapper >
            <div className="container py-3">
                <div className="row">
                    <div className="col-md-6">
                    <p className="text-capitalize text-center">
                        Copyright &copy; goBoxify {new Date().getFullYear} all rights reserved
                    </p>
                    </div>
                    
                    <div className="col-md-6 d-flex justify-content-around">
                        {value.socialIcons.map(item => <a href={item.url} key={item.id}>{item.icon}</a>
                        )}
                    </div>
                </div>
            </div>
        </FooterWrapper>
        }}
        
    </ProductConsumer>
}

const FooterWrapper = styled.footer`
    width: 100%;
    background: var(--lenColor);
    color: var(--mainWhite);
    z-index: 2;
    .icon {
        font-size: 1.5rem;
        color: var(--mainWhite);
        transition: var(--mainTransition);
        cursor: pointer;        
    }

    .icon:hover {
        color: var(--primaryColor);
    }

`

