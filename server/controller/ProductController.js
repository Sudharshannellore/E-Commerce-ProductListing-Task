const Product = require('../models/Product')

exports.saveProduct = async(req, res) => {

      const { title, image, price, description} = req.body;

    try {
        let product = new Product({title, image, price, description});
        let savedProduct = await product.save();
        res.status(200).json(savedProduct);
    } catch (error) {
        console.log(error);
        res.status(400).json({err : error});
    } 
};

exports.getProducts = async(req, res) =>{
    
      try {
        let products = await Product.find();
        if (products.length > 0) {
            res.status(200).json(products);
        } else {
            res.status(204).json({message: "Products Not Found"})
        }

      } catch (error) {
        console.log(error);
        res.status(500).json({message : "Internal Server Error"})
        
      }
};

exports.getProductsById = async(req, res)=>{
      
    try {
        let product = await Product.find({_id: req.params.id});
        if (product.length > 0) {
            res.status(200).json(product);
        } else {
            res.status(204).json({message: "Products Not Found"})
        }

      } catch (error) {
        console.log(error);
        res.status(500).json({message : "Internal Server Error"})
        
      }

}