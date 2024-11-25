<h1 align="center">GetShoes - E-commerce Full-Stack Website</h1>

<p align="center">
  GetShoes is a fully functional e-commerce platform for seamless online shoe shopping. Built with modern technologies, it offers a user-friendly and efficient shopping experience.
</p>

---

## 🛠 Technologies Used
<ul>
  <li><strong>Frontend:</strong> React.js</li>
  <li><strong>Backend:</strong> Node.js (Express.js)</li>
  <li><strong>Database:</strong> MySQL</li>
</ul>

---

## 🚀 Features
<ul>
  <li>🛒 <strong>Product Catalog:</strong> Browse shoes across various categories.</li>
  <li>🔍 <strong>Search and Filter:</strong> Search products by name, price range, or category.</li>
  <li>🛍️ <strong>Cart and Checkout:</strong> Add products to your cart and place orders.</li>
  <li>🔐 <strong>User Management:</strong>
    <ul>
      <li>Register and login with JWT-based authentication.</li>
      <li>Manage user profiles.</li>
    </ul>
  </li>
  <li>📦 <strong>Order Tracking:</strong> View and track your order history.</li>
  <li>📊 <strong>Admin Panel:</strong>
    <ul>
      <li>Add, edit, and delete products.</li>
      <li>Manage user orders.</li>
    </ul>
  </li>
</ul>

---

## 📋 Setup Instructions

### Prerequisites
Ensure you have the following installed on your system:
<ul>
  <li>Node.js</li>
  <li>MySQL</li>
</ul>

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/GetShoes.git
   cd GetShoes
2. **Install dependencies:**
   - Navigate to the client directory and install frontend dependencies:
     ```bash
     cd getshoes-front
     npm install
     ```
   - Navigate to the server directory and install backend dependencies:
     ```bash
     cd getshoes-back
     npm install
     ```

3. **Set up the database:**
   - Create a new MySQL database.
   - Import the provided `schema.sql` file to initialize the tables:
     ```bash
     mysql -u yourusername -p yourdatabase < schema.sql
     ```
   - Update the `.env` file in the `server` directory with your database credentials:
     ```env
     DB_HOST=localhost
     DB_USER=yourusername
     DB_PASSWORD=yourpassword
     DB_NAME=yourdatabase
     ```

4. **Run the application:**
   - Start the backend server:
     ```bash
     cd server
     npm start
     ```
   - Start the frontend:
     ```bash
     cd ../client
     npm start
     ```

5. **Access the application:**
   - Open your browser and navigate to:
     ```
     http://localhost:3000
     ```

---



