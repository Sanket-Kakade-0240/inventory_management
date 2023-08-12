import { useState } from 'react';
import './App.css';
import InventoryDashboard from './pages/InventoryDashboard';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Departments from './pages/Departments';
import ProductList from './pages/ProductList';
import ProductManagement from './pages/ProductManagement';
import { inventoryData } from './data';

const App = () => {
  const [inventory, setInventory] = useState(inventoryData);

  const handleProductAdded = newProduct => {
    setInventory(prevInventory => [...prevInventory, newProduct]);
  };
  return (
    <Router>
      <Routes>
      <Route path="/" element={<InventoryDashboard inventory={inventory}/>} />
      <Route path="/inv/departments" element={<Departments/>} />
      <Route path="/inv/productlist" element={<ProductList />} />
      <Route path="/inv/productmanagement" element={<ProductManagement onProductAdded={handleProductAdded} /> } />
      </Routes>
    </Router>
  );
};

export default App;
