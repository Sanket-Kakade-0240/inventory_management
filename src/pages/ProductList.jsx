import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Left from '../components/Left'
import Navbar from '../components/Navbar'
import styled from "styled-components";
import { inventoryData } from '../data';

const Container = styled.div`
padding: 0 30px 30px 30px ;
display: flex;
`
const Right = styled.div`
flex: 6;
padding: 20px;
`
const FilterContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
const ProductContainer = styled.div`
`
const Add = styled.button`
padding: 0.5rem 1rem;
background-color: #1a75ff;
border: none;
border-radius: 5px;
color: white;
`
const ProductList = () => {
    const [filterDepartment, setFilterDepartment] = useState('All');
    const [filterLowStock, setFilterLowStock] = useState(false);
    const [sortBy, setSortBy] = useState('');
  
    const filteredInventory = inventoryData
      .filter(item => (filterDepartment === 'All' || item.department === filterDepartment))
      .filter(item => (!filterLowStock || item.stock <= 10))
      .sort((a, b) => {
        if (sortBy === 'name') {
          return a.name.localeCompare(b.name);
        } else if (sortBy === 'price') {
          return a.price - b.price;
        } else if (sortBy === 'stock') {
          return a.stock - b.stock;
        }
        return 0;
      });
      
  return (
    <div>
        <Navbar/>
        <Container>
        <Left/>
        <Right>
            <FilterContainer>
                <h2>Product</h2>
                <select value={filterDepartment} onChange={e => setFilterDepartment(e.target.value)}>
                    <option value="All">All departments</option>
                    <option value="Kitchen">Kitchen</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Toys">Toys</option>
                </select>
                <label for="low-stock" style={{marginLeft:"-8rem"}}>
                <input type="checkbox" checked={filterLowStock}
            onChange={e => setFilterLowStock(e.target.checked)} />
                 Low stock items</label>
                <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
                    <option value="name">Name</option>
                    <option value="price">Price</option>
                    <option value="stock">Stock</option>
                    
                </select>
                <Link to={`/inv/productmanagement`} style={{ textDecoration: 'none', color: 'black' }}>
                    <Add>New</Add>
                </Link>
            </FilterContainer>
            <ProductContainer>
            <table>
                <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Supplier</th>
                </tr> 
                </thead>
                <tbody>
                
                {filteredInventory.map((inventory) => (
                    <tr key={inventory.id}>
                    <td><img src={inventory.imageUrl} alt={inventory.id} height={"150px"} width={"150px"} /></td>
                    <td>{inventory.name}</td>
                    <td>{inventory.description}</td>
                    <td>{inventory.price}</td>
                    <td>{inventory.stock}</td>
                    <td>{inventory.supplier}</td>
                    </tr>
                ))}
                </tbody>
            </table>                
            </ProductContainer>
        </Right>
        </Container>
    </div>
  )
}

export default ProductList