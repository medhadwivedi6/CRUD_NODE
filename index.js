const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model');
const productRoute = require('./routes/product.route');
const app = express();

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
app.use('/api/products', productRoute);

app.get('/', (req, res) => {
  res.send('Hello World!!!');
});

// app.get('/api/products', async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.get('/api/product/:id', async (req, res) => {

//   try {
//     const { id } = req.params;
//     const product = await Product.findById(id);
//     res.status(200).json(product);

//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }

// });


// app.post('/api/products', async (req, res) => {
//   try {
//     const product = await Product.create(req.body);
//     res.status(200).json({ message: 'Product created successfully', product });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

//update a product

// app.put('/api/product/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndUpdate(id, req.body);
//     if (!product) {
//       return res.status(404).json({ message: 'Product not found' });
//     }
//     const updatedProcut = await Product.findById(id);
//     res.status(200).json({ message: 'Product updated successfully', updatedProcut });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

//delete a product

// app.delete('/api/product/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndDelete(id);
//     if (!product) {
//       return res.status(404).json({message: "Product not found"}) 
//     }
//     res.status(200).json({ message: 'Product deleted successfully'});
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });



mongoose.connect("mongodb+srv://medhadwivedi06:3Z5DJeT7TTxggOeU@database.csvv89c.mongodb.net/Node-API?retryWrites=true&w=majority&appName=database")
  .then(() => {
    console.log("Connected to the database!");
    app.listen(3000, () => {
      console.log('Server is running on http://localhost:3000');
    });
  })
  .catch((err) => {
    console.error("Connection failed!", err);
  });
