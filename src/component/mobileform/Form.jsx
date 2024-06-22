import"./form.scss"

const Form = () => {
    return (
     
       
    
          <div className="enquiry-form-container">
          <h1>get in touch with us</h1>
          <hr style={{width:"12%", background:"black", height:"5px"}}/>
              <p>
                Fill in the details below and out advisory will
               
                get in touch with you in the next 24 hours
              </p>
            <div className="form-center-col">
              <form>
                <div className="form-col">
                  <div className="input-col">
                    <label htmlFor="">First Name</label>
                    <input type="text" name="firstName" />
                  </div>
                  <div className="input-col">
                    <label htmlFor="">Last Name</label>
                    <input type="text" name="lastName" />
                  </div>
                 
                </div>
                <div className="form-col">
                  <div className="input-col">
                    <label htmlFor="">Email Adress</label>
                    <input type="text" name="email" />
                  </div>
                  <div className="input-col">
                    <label htmlFor="">Phone Number</label>
                    <input type="text" placeholder="+91" name="phone_number" />
                  </div>
                </div>
    
                <div className="form-col">
                  <div className="input-col">
                    <label htmlFor="">Message</label>
                    <textarea name="message" />
                  </div>
                </div>
                <button type="submit">Submit Query</button>
              </form>
            </div>
          </div>

     
      );
    };

export default Form;