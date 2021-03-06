import React from 'react';
import Title from '../Title';
import aboutBcg from '../../images/aboutBcg.jpeg';

export default function info() {
    return (
        <section className="py-5">
            <Title title="about us" center/>
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <img src={aboutBcg} className="img-fluid img-thumbnail" alt="About Us Image" style={{background: "var(--darkGray)"}}/>
                    </div>
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <Title title="our store"/>
                        <p className="text-lead text-muted my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                        <p className="text-lead text-muted my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>
                        <button className="main-link" type="button">more info</button>
                    </div>
                </div>
            </div>
            
        </section>
    )
}
