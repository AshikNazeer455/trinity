import React, {useState} from 'react'
import { Card } from 'react-bootstrap'
import Axios from "axios";
import { Link } from 'react-router-dom';

function Product() {

  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");

     const saveFile = (e) => {
      setFile(e.target.files[0]);
      setFileName(e.target.files[0].name);
      };

 

       const [name, setName] = useState("");
       const [brand, setBrand] = useState("");
       const [price, setPrice] = useState("");

       const [productStatus, setProductStatus] = useState("");


   // const uploadFile = async (e) => {
  //   const formData = new FormData();
  //   formData.append("file", file);
  //   formData.append("fileName", fileName);
  //   try {
  //     const res = await Axios.post(
  //       "http://localhost:3000/upload",
  //       formData
  //     );
  //     console.log(res);
  //   } catch (ex) {
  //     console.log(ex);
  //   }
  // };


 
          const product = (e) => {
          const formData = new FormData();
          formData.append("file", file);
          formData.append("fileName", fileName);
          e.preventDefault();
          Axios.post("http://localhost:3001/product", {
     
              name: name,
              brand: brand,
              price: price,

    
            }).then((response) => {
      // setRegisterStatus(response);
      // console.log(response);
               if(response.data.message){
               setProductStatus(response.data.message);
                }else{
                setProductStatus("ACCOUNT CREATED SUCCESSFULLY");
                 window.location.href = "/product";
                 }
                 })
                 }

       return (
    <>  

               <section class="vh-100" >
               <div class="container h-100">
               <div class="row d-flex justify-content-center align-items-center h-100">
               <div class="col-lg-12 col-xl-11">
               <div class="card text-black" >
               <div class="card-body p-md-5">
               <div class="row justify-content-center">
               <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

              <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Add New Product</p>

              <form class="mx-1 mx-md-4"  enctype="multipart/form-data">
              <div class="d-flex flex-row align-items-center mb-4">
                   
              <div class="form-outline flex-fill mb-0">
              <label class="form-label" for="form3Example1c">Product Name</label>
              <input className="textInput" type="text" name="fname" onChange={(e) =>{setName(e.target.value)}} placeholder="" required />
              </div>
              </div>

              <div class="d-flex flex-row align-items-center mb-4">            
              <div class="form-outline flex-fill mb-0">             
              <label class="form-label" for="form3Example3c">Brand</label>
              <input className="textInput" type="text" name="fname" onChange={(e) =>{setBrand(e.target.value)}} placeholder="" required />
              </div>
              </div>

              <div class="d-flex flex-row align-items-center mb-4">                    
              <div class="form-outline flex-fill mb-0">
                      
              <label class="form-label" for="form3Example4c">Price</label>
              <input className="textInput" type="text" name="fname" onChange={(e) =>{setPrice(e.target.value)}} placeholder="" required />
              </div>
              </div>

              <div class="d-flex flex-row align-items-center mb-4">        
              <div class="form-outline flex-fill mb-0">                     
              <input type="file" onChange={saveFile} />
              <button onClick={product}>Upload</button>
              </div>
              </div>                

            <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
            <input className="button" type="submit" onClick={product} value="Add a new Product" />
            <h1 style={{fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{productStatus}</h1>
            </div>

            </form>
            <Link to={`/products`} className="btn btn-success" style={{marginRight: "10px"}}>show products</Link>
            </div>            
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </section>
            </>
            )
            }

export default Product



