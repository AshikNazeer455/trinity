import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import Axios from "axios";

function Products() {
    const [loginStatus, setLoginStatus] = useState("");
    const [product, setProduct] = useState([]);
    const [productList, setProductList] = useState([]);
  ;

    useEffect(() => {
        getProduct();
    }, []);

    function getProduct() {
    Axios.get("http://localhost:3001/product").then(function(response) {
    console.log(response.data);
    setProduct(response.data);
    });
    }

    const deleteProduct = (id) => {
    Axios.delete(`http://localhost:3001/del/${id}`).then((response) => {
    if(response.data.message){
    setLoginStatus(response.data.message);
    }else{
    setLoginStatus('product deleted');
    window.location.href = "/products";
    }
    setProductList(
    productList.filter((pro) => {
    return pro.id !== id;      
    })
    );

    });
    };


  return (
         <div>Products
         <div className="row">
         <div className="col-12">
          <h1>List products</h1>
          <table class="table table-bordered table-striped">
          <thead>
           <tr>
                      <th>Name</th>
                      <th>Brand</th>
                      <th>Price</th>
                      <th>Actions</th>
                        
          </tr>
          </thead>
          <tbody>
          {product.map((pro, key) =>
          <tr key={key}>
                            <td>{pro.name}</td>
                            <td>{pro.brand}</td>
                            <td>{pro.price}</td>
                          
          <td>
          {/* <Link to={`/update/${user.id}`} className="btn btn-success" style={{marginRight: "10px"}}>Edit</Link> */}
          {/* <Link to={`/${user.id}/edit`} className="btn btn-success" style={{marginRight: "10px"}}>Edit</Link> */}
          <button onClick={() => deleteProduct(pro.id) } className="btn btn-danger">Delete</button>
          </td>
          </tr>
          )}
          </tbody>
          </table>
          </div>
        </div>

    </div>
  )
}

export default Products