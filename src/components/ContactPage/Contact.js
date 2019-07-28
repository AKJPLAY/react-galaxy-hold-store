import React from 'react';
import Title from '../Title';


export default function Contact() {
    return <section className="py-5">
        <div className="row" style={{margin: "0px"}}>
            <div className=".col-10 mx-auto col-md-6 my-3">
                <Title title="Contact Us"/>
                <form className="mt-5" action="https://formspree.io/goboxify@gmail.com" method="POST">
                    {/** firstName */}
                    <div className="form-group">
                        <input type="text" name="FirstName" className="form-control" placeholder="Enter Name"/>
                    </div>
                    {/** email */}
                    <div className="form-group">
                        <input type="email" name="email" className="form-control" placeholder="Enter Email" />
                    </div>
                    {/** Subject */}
                    <div className="form-group">
                        <input type="text" name="Subject" className="form-control" placeholder="Enter Subject important!!!"/>
                    </div>
                    {/** text area */}
                    <div className="form">
                    <textarea name="message" className="w-100"   rows="10"  placeholder="Enter Your Message to us"></textarea>
                    </div>
                    {/** Submit */}
                    <div className="form-group mt-3">
                        <input type="submit" className="form-control bg-primary text-white" value="Send Mail"/>
                    </div>
                </form>
            </div>
        </div>
    </section>
}
