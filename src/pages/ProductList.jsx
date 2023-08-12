import React from 'react'
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
  return (
    <div>
        <Navbar/>
        <Container>
        <Left/>
        <Right>
            <FilterContainer>
                <h2>Product</h2>
                <select name="language" id="language">
                    <option value="all-departments">All Departments</option>
                    <option value="kitchen">Kitchen</option>
                    <option value="clothing">Clothing</option>
                    <option value="toys">Toys</option>
                </select>
                <input type="checkbox" id="low-stock" name="low-stock" value="stock" />
                <label for="low-stock" style={{marginLeft:"-8rem"}}> Low stock items</label>
                <select name="language" id="language">
                    <option value="javascript">JavaScript</option>
                    <option value="python">Python</option>
                    <option value="c++">C++</option>
                    <option value="java">Java</option>
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
                
                {inventoryData.map((inventory) => (
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