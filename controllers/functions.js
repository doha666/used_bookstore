const Path = require('path');
const cart = require('../model/bookstore');








  // new user
  const createadmin = new cart({
      name : req.body.name,
      email : req.body.email,
      gender: req.body.gender,

  })

  // save user in the database
  createadmin
      .save(createadmin)
      .then(data => {
          //res.send(data)
          res.redirect('/add-user');
      })
      .catch(err =>{
          res.status(500).send({
              message : err.message || "Some error occurred while creating a create operation"
          });
      });






   
   


const updateUser = ((req, res) => {
   
    const id = Number(req.params.UserID)
    const index = users.findIndex(user => user.id === id)
    const updatedUser = {
        id: users[index].id,
        name: req.body.name,
       
    }

    users[index] = updatedUser
    res.status(200).json('User updated')
});

const deleteUser = ((req, res) => {
    const id = Number(req.params.UserID)
    const index = users.findIndex(user => user.id === id)
    users.splice(index,1)
    res.status(200).json('User deleted')
});



const createCustomer = ((req, res) => {
  var customer = new customers({
    customerID: req.body.IDD,
    username: req.body.uname,
    phoneNumber: req.body.emaile,
      
    });
 
 
    user
      .save(user)
      .then(data => {
        res.send("the user has been added to the database");
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
});


const addItemTocart = ((req, res) => {
    var Item = new Items({
      productID: req.body.iidd,
      cartID:req.body.iidd,
       
      });
   
   
      Item
        .save(Item)
        .then(data => {
          res.send("the Item has been added to the cart and the database of the cart has been modified");
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "An error occurred."
          });
        });
});



const deleteCartitem = ((req, res) => {
    const id = Number(req.params. productID)
    const index = Items.findIndex(Item => Item.id === id)
    Item.splice(index,1)
    res.status(200).json('item deleted')
});




const updatCustomer = ((req, res) => {
   
  const id = Number(req.params.IDD)
  const index = customers.findIndex(customer => customer.id === id)
  const updatedCustomer = {
      id: customers[index].id,
      name: req.body.uname,
     
  }

  customers[index] = updatCustomer
  res.status(200).json('customer updated')
});



const deleteCustomer = ((req, res) => {
  const id = Number(req.params.IDD)
  const index = customers.findIndex(customer => customer.id === id)
  customers.splice(index,1)
  res.status(200).json('customer deleted')
});


module.exports = {
  createadmin,
  addItemTocart,
  deleteCartitem,
  createCustomer,
  deleteCustomer,
  updatCustomer
   }
