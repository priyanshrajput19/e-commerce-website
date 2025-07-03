const sequelize = require('./config/db');
const Product = require('./Models/Product');
const Order = require('./Models/Order');

// Sample products data
const sampleProducts = [
  {
    name: 'iPhone 15 Pro',
    price: 999.99,
    image: 'https://via.placeholder.com/300x300?text=iPhone+15+Pro',
    description: 'Latest iPhone with advanced camera system and A17 Pro chip'
  },
  {
    name: 'MacBook Air M2',
    price: 1199.99,
    image: 'https://via.placeholder.com/300x300?text=MacBook+Air+M2',
    description: 'Ultra-thin laptop with M2 chip and all-day battery life'
  },
  {
    name: 'AirPods Pro',
    price: 249.99,
    image: 'https://via.placeholder.com/300x300?text=AirPods+Pro',
    description: 'Wireless earbuds with active noise cancellation'
  },
  {
    name: 'iPad Air',
    price: 599.99,
    image: 'https://via.placeholder.com/300x300?text=iPad+Air',
    description: 'Powerful tablet with M1 chip and stunning display'
  },
  {
    name: 'Apple Watch Series 9',
    price: 399.99,
    image: 'https://via.placeholder.com/300x300?text=Apple+Watch+9',
    description: 'Advanced health monitoring and fitness tracking'
  }
];

async function setupDatabase() {
  try {
    console.log('🔄 Setting up database...');
    
    // Sync database (create tables)
    await sequelize.sync({ force: true });
    console.log('✅ Database tables created successfully');
    
    // Insert sample products
    await Product.bulkCreate(sampleProducts);
    console.log('✅ Sample products inserted successfully');
    
    console.log('\n🎉 Setup completed successfully!');
    console.log('\n📋 Next steps:');
    console.log('1. Create a .env file in the Backend directory');
    console.log('2. Add your Stripe API keys to the .env file');
    console.log('3. Update the Stripe publishable key in frontend/src/pages/Checkout.js');
    console.log('4. Start the backend server: npm run dev');
    console.log('5. Start the frontend: npm start (from frontend directory)');
    
  } catch (error) {
    console.error('❌ Setup failed:', error.message);
    console.log('\n🔧 Troubleshooting:');
    console.log('1. Make sure MySQL is running');
    console.log('2. Check your database credentials in .env file');
    console.log('3. Ensure the database "quickshop_db" exists');
  }
}

setupDatabase(); 