import React from 'react';
//EMAILJS
import emailjs from '@emailjs/browser';


function App() {


    function sendEmail(e) {
        e.preventDefault();

      //emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
        emailjs.sendForm('service_ywwk2sr', 'template_19kn1x6', e.target, 'BSEIUHgJWf4_aUDy4')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
    }


    return(
        <div>
            <div className="container">
                <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default App;