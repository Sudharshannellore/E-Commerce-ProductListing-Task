const Cart = require('../models/Cart');

exports.saveCart = async (req, res) => {
  const { product, quantity } = req.body;

  try {
    const cart = new Cart({
      product,
      quantity,
    });

    await cart.save();
    res.status(200).json({ message: 'Cart Saved' });
  } catch (error) {
    console.log(error);
    res.status(400).json({ err: error });
  }
};

exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.find();
    if (cart.length > 0) {
      res.status(200).json(cart);
    } else {
      res.status(204).json({ message: 'Cart Not Found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.deleteCart = async (req, res)=>{
    try {
        let response = await Cart.findByIdAndDelete(req.params.id);
        if (response) {
            res.status(200).json({message: 'Successfully Deleted'});
        } else {
            res.status(404).json({message: 'Category Not Found'});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error Please Check You Credentials '})
    }
};
