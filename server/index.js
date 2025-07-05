const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
const productRoute = require('./routes/ProductRoute')
const cartRoute = require('./routes/CartRoute')

dotenv.config()

const app = express()
app.use(cors());

app.use(express.json());


// MongoDB connection
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("MongoDB Successfully Connected"))
.catch((error) => console.error("MongoDB connection error:", error));

// Product Routes
app.use('/products', productRoute);

// Cart Route
app.use('/cart', cartRoute)

// Server Testing
app.get('/', (req, res) => res.send('Hello E-Commerce!'))

// Server Running
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server running on port ${port}`))