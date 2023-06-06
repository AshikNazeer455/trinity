const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const multer = require('multer')();
const bodyParser = require('body-parser');
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const con = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "trinity"
})




app.post('/register', (req, res) => {

  console.log("Addsaasdsd")
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    const password= req.body.password;

    con.query("INSERT INTO register (fname, lname, email, password) VALUES (?, ?, ?,?)", [fname,lname,email,password], 
        (err, result) => {
            if(result){
                res.send(result);
            }else{
                res.send({message: "ENTER CORRECT ASKED DETAILS!"})
     }
   })
})

app.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    con.query("SELECT * FROM register WHERE email = ? AND password = ?", [email, password], 
        (err, result) => {
            if(err){
                req.setEncoding({err: err});
            }else{
                if(result.length > 0){
                    res.send(result);
                }else{
                   res.send({message: "WRONG EMAIL OR PASSWORD!"})
                }
            }
        }
    )
})


app.get("/users", (req, res) => {
    con.query("SELECT * FROM register", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });


  app.get("/product", (req, res) => {
    con.query("SELECT * FROM product", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    con.query("DELETE FROM register WHERE id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });


  app.delete("/del/:id", (req, res) => {
    const id = req.params.id;
    con.query("DELETE FROM product WHERE id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });


  app.put("/update", (req, res) => {
   const id = req.params.id
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    const password= req.body.password;

    // const { fname } = req.body;
    // const {lname} = req.body;
    // const {email} = req.body;
    // const {password} = req.body;

    // let mysql = "UPDATE register SET fname = ?, lname = ?, email = ?, password = ? WHERE id = ?";
    // con.query(mysql, [fname, lname, email, password, id],
    // con.query("UPDATE  register SET (fname, lname, email, password) VALUES (?, ?, ?,?)", [fname,lname,email,password],
     
    con.query(`UPDATE register SET fname='${fname}',lname='${lname}',email='${email}',password='${password}' where id=${id}`,
        [fname,lname,email,password, id],
         (err, result) => {
      if (err) {
        console.log('Error while updating the employee');
        res.send(err);
      } else {
        console.log("Employee updated successfully");
        res.send(result);
      }
    });
  });

  app.post('/product',multer.array("file"), (req, res) => {

    console.log("fdfdfgf")
    console.log(req.body)
    const name = req.body.name;
    const brand = req.body.brand;
    const price = req.body.price;
    const images = req.body.images;
    
    console.log(name)
    console.log(brand)
    console.log(price)
    console.log(images)

   
    con.query("INSERT INTO product (name, brand, price, images) VALUES (?, ?, ?,?)", [name,brand,price,images], 
        (err, result) => {
          console.log("jhj")
          console.log(result)
            if(result) {
                res.send(result);
            }else{
                res.send({message: "ENTER CORRECT ASKED DETAILS!"})
            }
         
   })
})

  

app.listen(3001, () => {
    console.log("running backend server");
})