import React, { useState } from 'react';


  
const Contact = () =>{
// const [data,setdata]=useState({
//     email:"",
//     mobile:"",
// });

// const InputEvent = (event) =>{
//     const{name,value}=event.target;

//     setdata((preVal) =>{
//         return {
//             ...preVal,
//             [name]:value,
//         }
        
//         const InputEvent = (event) =>{
//             const{name,value}=event.target;
        
//             setdata((preVal) =>{
//                 return {
//                     ...preVal,
//                     [name]:value,
//                 }const formSubmit = () => {};
//             })
//         };
//     })
// };

//  const formSubmit = () => {};
  
  return ( <>
    <div className="my-5">
        <h1 className="text-center">Contact us</h1>
         
    </div>
    <div className="container contact_div">
        <div className="row">
            <div className="col-md-6 col-10 mx-auto">
                
                <form>
  <div className="form-group">
    <label>Email address</label>
    <input type="email" 
    className="form-control" 
    id="exampleInputEmail1"  
    // name="Email"
    // value={data.email}
    // onChange={InputEvent}
    />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label>Mobile</label>
    <input type="number" 
    className="form-control" 
    id="exampleInputPassword1"
    // name="Mobile"
    // value={data.mobile}
    // onChange={InputEvent}
  />
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
               
            </div>
        </div>

    </div>
    </>
    );
};


export default Contact;