import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import Axios from "axios";

function Users() {
    const [loginStatus, setLoginStatus] = useState("");
    const [users, setUsers] = useState([]);
    const [usersList, setUsersList] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);


    function getUsers() {
    Axios.get("http://localhost:3001/users").then(function(response) {
    console.log(response.data);
    setUsers(response.data);
    });
    }

    const deleteUser = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
    if(response.data.message){
    setLoginStatus(response.data.message);
    }else{
    setLoginStatus('login success');
    window.location.href = "/users";
    }
    setUsersList(

    usersList.filter((user) => {
    return user.id != id;
                     
    })
    );        
    });
    };
    
   


   
       return (
        <div>


        <div className="row">
        <div className="col-12">
        <h1>List Users</h1>
        <table class="table table-bordered table-striped">
        <thead>

        <tr>
                       
                        <th>First Name</th>
                        <th>Lirst Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {users.map((user, key) =>
                        <tr key={key}>
                            <td>{user.fname}</td>
                            <td>{user.lname}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td>
    <Link to={`/update/${user.id}`} className="btn btn-success" style={{marginRight: "10px"}}>Edit</Link>
    {/* <Link to={`/${user.id}/edit`} className="btn btn-success" style={{marginRight: "10px"}}>Edit</Link> */}
    <button onClick={() => deleteUser(user.id) } className="btn btn-danger">Delete</button>

    </td>
    </tr>
    )}
                     
         </tbody>
         </table>
        </div>
        </div>
        </div>
    
    )}

export default Users