import React, { useContext, useRef, useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import commonContext from '../../contexts/common/commonContext';
import useForm from '../../hooks/useForm';
import useOutsideClose from '../../hooks/useOutsideClose';
import useScrollDisable from '../../hooks/useScrollDisable';
import Modal from 'react-bootstrap/Modal';
import Axios from "axios";
import axios from 'axios';


const AccountForm = () => {


    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [registerStatus, setRegisterStatus] = useState("");
    const [loginStatus, setLoginStatus] = useState("");
 

   
  const submit = () =>{
    axios.post("/register").then((res)=>{
      console.log()
    })
    .catch((err)=>{
      console.log(err)
    })
  }



    const login = (e) => {
		e.preventDefault();
		Axios.post("http://localhost:3001/login", {
		  email: email,
		  password: password,
		}).then((response) => {
		  if(response.data.message){
			setLoginStatus(response.data.message);
		  }else{
			setLoginStatus('login success');
			window.location.href = "/";
		  }
		if( email === 'admin@gmail.com' && password === 'admin'){
			setLoginStatus('Welcome Admin');
			window.location.href = "/Dash";
		}

	
		})
	  }




  
    const register = (e) => {
      e.preventDefault();
      Axios.post("http://localhost:3001/register", {
        fname: fname,
        lname: lname,
        email: email,
        password: password,
  
        
      
      }).then((response) => {
        // setRegisterStatus(response);
        // console.log(response);
        if(response.data.message){
          setRegisterStatus(response.data.message);
        }else{
          setRegisterStatus("ACCOUNT CREATED SUCCESSFULLY");
          window.location.href = "/";
        }
      })
    }
  




    const { isFormOpen, toggleForm } = useContext(commonContext);
    const { inputValues, handleInputValues, handleFormSubmit } = useForm();

    const formRef = useRef();

    useOutsideClose(formRef, () => {
        toggleForm(false);
    });

    useScrollDisable(isFormOpen);

    const [isSignupVisible, setIsSignupVisible] = useState(false);


    // Signup-form visibility toggling
    const handleIsSignupVisible = () => {
        setIsSignupVisible(prevState => !prevState);
    };
    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    return (
        <>
        <>
        <Modal show={show1} onHide={handleClose1} animation={false}>              
        <Modal.Body class="ol">	<div class="wrap">
        <h5 class="text-center mb-4">Registration form</h5>
        <div class="login p-5 bg-dark mx-auto mw-100">
        <form action="" method="post">
         
        <input className="input_field" type="text" name="fname" onChange={(e) =>{setFname(e.target.value)}} placeholder="Enter your First Name" required /><br></br>
        <input className="input_field" type="username" name="lname" onChange={(e) =>{setLname(e.target.value)}} placeholder="Enter your Last Name" required /> <br></br>
        <input className="input_field" type="email"   name="email" onChange={(e) =>{setEmail(e.target.value)}} placeholder="Enter your Email" required /><br></br>         
        <input className="input_field" type="password" name="password" onChange={(e) =>{setPassword(e.target.value)}} placeholder="Enter your Password" required /> <br></br>
        <input  class="btn btn-primary submit mb-4" type="submit" onClick={register} value="Create an account" />
        <h1 style={{fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{registerStatus}</h1>                 
        </form>

        <button type="submit" onClick={handleIsSignupVisible} class="btn btn-primary submit mb-4">Sign up</button>
        </div>            
        </div>
             
       </Modal.Body>       
       </Modal>
</>
        {
        isFormOpen && (
        <div className="backdrop">
        <div className="modal_centered">
        <form id="account_form" ref={formRef} onSubmit={handleFormSubmit}>

        {/*===== Form-Header =====*/}
        <div className="form_head">
        <h2>{isSignupVisible ? 'Signup' : 'Login'}</h2>
        <p>
        {isSignupVisible ? 'Already have an account ?' : 'New to Trinty ?'}
        &nbsp;&nbsp;
        <button type="button" onClick={(e)=>{handleShow1();submit()}}>
        <font color="red">Login</font>:<font color="red">Create an account</font> 
        </button>
        </p>
        </div>

      {/*===== Form-Body =====*/}
      <div className="form_body">                             
      <div className="input_box">                                  
      </div>
      <div className="input_box">
      <input  type="email" name="email" onChange={(e) => {setEmail(e.target.value)}}  placeholder='Enter your email' required />
      </div>

      <div className="input_box">
      <input type="password" name="password" onChange={(e) => {setPassword(e.target.value)}} placeholder="Enter your Password" required />
      </div>

      <input className="button" type="submit" onClick={login} value="Login" />  &nbsp; &nbsp; &nbsp; &nbsp;
      <h1 style={{color: 'red', fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{loginStatus}</h1>

                                    {/* <button
                                        type="submit"
                                        className="btn login_btn"
                                    >
                                        {isSignupVisible ? 'Signup' : 'Login'}
                                    </button> */}

      </div>

      {/*===== Form-Footer =====*/}
      <div className="form_foot">
      <p>or login with</p>
      <div className="login_options">
      <Link to="/">Facebook</Link>
      <Link to="/">Google</Link>
      <Link to="/">Twitter</Link>
       </div>
      </div>

      {/*===== Form-Close-Btn =====*/}
      <div
      className="close_btn"
      title="Close"
      onClick={() => toggleForm(false)}
      >
      &times;
      </div>

      </form>
      </div>
      </div>
      )
      }
      </>
      );
      };

export default AccountForm;