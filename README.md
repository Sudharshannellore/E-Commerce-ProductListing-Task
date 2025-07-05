
  <h1>🛒 MERN E-Commerce Product Listing + Cart App</h1>

  <p>A simple full-stack E-Commerce web application built using the <strong>MERN stack (MongoDB, Express.js, React, Node.js)</strong>. It supports product listing, cart management, and backend persistence — perfect for learning full-stack development!</p>

  <h2>🚀 Features</h2>
  <h3>🛍️ Product Listing</h3>
  <ul>
    <li>View all products with title, image, price, and description</li>
    <li>Optional: Pagination, search, and filters</li>
  </ul>

  <h3>🛒 Cart Functionality</h3>
  <ul>
    <li>Add/remove products to/from cart</li>
    <li>View item quantity and total cart price</li>
  </ul>

  <h2>🧰 Tech Stack</h2>
  <table>
    <tr><th>Layer</th><th>Technology</th></tr>
    <tr><td>Frontend</td><td>React, Axios, React Router</td></tr>
    <tr><td>Backend</td><td>Node.js, Express.js</td></tr>
    <tr><td>Database</td><td>MongoDB Atlas</td></tr>
    <tr><td>State Mgmt</td><td>React Context API (or Redux optional)</td></tr>
  </table>

  <h2>📁 Project Structure</h2>
  <pre><code>
root/
├── client/          # React frontend
└── server/          # Express backend + MongoDB
  </code></pre>

  <h2>🖥️ Backend Setup</h2>
  <ol>
    <li><strong>Navigate to backend folder:</strong>
      <pre><code>cd server</code></pre>
    </li>
    <li><strong>Install dependencies:</strong>
      <pre><code>npm install</code></pre>
    </li>
    <li><strong>Create <code>.env</code> file:</strong>
      <pre><code>
MONGO_URI=mongodb://localhost:27017/
PORT=5000
      </code></pre>
    </li>
    <li><strong>Start server:</strong>
      <pre><code>npm run dev</code></pre>
    </li>
  </ol>

  <h2>🌐 Frontend Setup</h2>
  <ol>
    <li><strong>Navigate to frontend folder:</strong>
      <pre><code>cd client</code></pre>
    </li>
    <li><strong>Install dependencies:</strong>
      <pre><code>npm install</code></pre>
    </li>
    <li><strong>Start frontend:</strong>
      <pre><code>npm run dev</code></pre>
    </li>
  </ol>

  <p>Frontend runs on <code>http://localhost:5173</code></p>

  <h2>📡 API Endpoints</h2>
  <h3>🔹 Product Routes</h3>
  <table>
    <tr><th>Method</th><th>Route</th><th>Description</th></tr>
    <tr><td>GET</td><td>/products/get</td><td>Get all products</td></tr>
    <tr><td>GET</td><td>/products/get/:id</td><td>Get product by ID</td></tr>
  </table>

  <h3>🔹 Cart Routes</h3>
  <table>
    <tr><th>Method</th><th>Route</th><th>Description</th></tr>
    <tr><td>GET</td><td>/cart/get</td><td>Get cart items</td></tr>
    <tr><td>POST</td><td>/cart/save</td><td>Add item to cart</td></tr>
    <tr><td>DELETE</td><td>/cart/:_id</td><td>Remove item from cart</td></tr>
  </table>

  <h2>🧪 Sample Product Data</h2>
  <pre><code>{
  "title": "Apple iPhone 15",
  "description": "Latest iPhone model with A16 Bionic",
  "price": 79999,
  "image": "https://via.placeholder.com/150"
}
  </code></pre>



