
import styled from "styled-components";
import React, { useState } from 'react';
// import { inventoryData } from '../data';
import Navbar from "../components/Navbar";
import Left from "../components/Left";


const Container = styled.div`
padding: 0 30px 30px 30px ;
display: flex;
`

const Right = styled.div`
flex: 6;
padding: 20px;
display: flex;
flex-wrap: wrap;
flex-direction: column;

`
const Title = styled.h2`
`
const Form = styled.form`
display: flex;
flex-direction: column;
`
const Add = styled.button`
padding: 0.5rem 1rem;
background-color: #1a75ff;
border: none;
border-radius: 5px;
color: white;
width: 20vh;
margin-top: 1rem;
`
const Input = styled.input`
padding: 8px;
margin-top: 0.4rem;
width: 60vh;
border: 1px solid lightgray;
`
const Textarea = styled.textarea`
padding: 8px;
margin-top: 0.4rem;
width: 60vh;
border: 1px solid lightgray;
`
const ProductManagement = ({ onProductAdded }) => {
  const [newProduct, setNewProduct] = useState({
    department: '',
    name: '',
    description: '',
    price: 0,
    stock: 0,
    sku: '',
    supplier: '',
    delivered: 0,
    imageUrl: '',
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setNewProduct(prevProduct => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleAddProduct = () => {
    onProductAdded(newProduct);
    setNewProduct({
      department: '',
      name: '',
      description: '',
      price: 0,
      stock: 0,
      sku: '',
      supplier: '',
      delivered: 0,
      imageUrl: '',
    });
  };

  return (
    <div>
      <Navbar/>
      <Container>
        <Left/>
        <Right>
          <Title>Add New Product</Title>
          <Form>
            <label>
              Department: <br />
              <Input
                type="text"
                name="department"
                value={newProduct.department}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Product Name: <br />
              <Input
                type="text"
                name="name"
                value={newProduct.name}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Description: <br />
              <Textarea
                type="text"
                name="description"
                value={newProduct.description}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Price: <br />
              <Input
                type="number"
                name="price"
                value={newProduct.price}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Stock (quantity): <br />
              <Input
                type="number"
                name="stock"
                value={newProduct.stock}
                onChange={handleInputChange}
              />
            </label>
            <label>
              SKU (stocking unit): <br />
              <Input
                type="text"
                name="sku"
                value={newProduct.sku}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Supplier: <br />
              <Input
                type="text"
                name="supplier"
                value={newProduct.supplier}
                onChange={handleInputChange}
              />
            </label>
            <label>
            Delivered:  <br />
              <Input
                type="text"
                name="delivered"
                value={newProduct.delivered}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Image URL:  <br />
              <Input
                type="text"
                name="imageUrl"
                value={newProduct.imageUrl}
                onChange={handleInputChange}
              />
            </label>
            <Add type="button" onClick={handleAddProduct}>
              Add Product
            </Add>
          </Form>
        </Right>
      </Container>
    </div>
  )
}

export default ProductManagement