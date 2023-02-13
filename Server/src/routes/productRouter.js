const { Router } = require("express");
const app = Router();
const Products = require("../models/product");

// uploading images using multer
const multer = require("multer");

//Configuration for Multer
const productStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/home/roshan/E-commerce/Server/src/uploads");
  },
  filename: function (req, file, cb) {
    // console.log(file)
    cb(null, file.originalname);
  },
});
const productImg = multer({ storage: productStorage }).single("product");

app.post("/products", productImg, async (req, res, next) => {
  // console.log(req.body)
  // console.log(req.file.filename)

  req.body.image = req.file.filename;
  // console.log(body)
  try {
    // console.log(req.body)
    const products = await Products.create(req.body);
    // console.log(products)
    if (products) {
      res.json({
        mgs: "products uploaded",
        prdouctDetails: products,
      });
    } else {
      res.json({
        msg: "something went wrong",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

// get all products
app.get("/products", async (req, res) => {
  const productsData = await Products.find();
  if (productsData) {
    res.json(productsData);
  } else {
    res.json({
      msg: "something went wrong",
    });
  }
});

// find  product by id

app.get("/products/:id", async (req, res) => {
  const productsData = await Products.findById(req.params.id);
  if (productsData) {
    res.json({
      data: productsData,
    });
  } else {
    res.json({
      msg: "something went wrong",
    });
  }
});

// delete order by id

// app.delete('/products/:id',async(req,res)=>{
//     const productsData=await Products.findByIdAndRemove(req.params.id)
//     if(productsData){
//         res.json({
//             msg:"product deleted"
//         })
//     }
//     else{
//         res.json({
//             msg:"something went wrong"
//         })
//     }
//    })

// update order by id
app.put("/products/:id", async (req, res) => {
  const productsData = await Products.findByIdAndUpdate(req.params.id);
  if (productsData) {
    res.json({
      msg: "product updated",
    });
  } else {
    res.json({
      msg: "something went wrong",
    });
  }
});

//get products by category

app.get("/products/:categ", async (req, res) => {
  console.log(req.query);
  // const productsData=await Products.find(req.query)
  // if(productsData){
  //     res.json({
  //         msg:"product updated"
  //     })
  // }
  // else{
  //     res.json({
  //         msg:"something went wrong"
  //     })
  // }
});

module.exports = app;
