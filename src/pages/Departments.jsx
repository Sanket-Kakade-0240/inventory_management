import React from 'react'
import styled from "styled-components";
import Left from '../components/Left';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const Container = styled.div`
padding: 0 30px 30px 30px ;
display: flex;
`

const Right = styled.div`
flex: 6;
padding: 20px;
display: flex;
flex-wrap: wrap;
`
const Departments = () => {
  return (
    <div>
      <Navbar/>
      <Container>
      <Left/>
      <Right>
      <div className="card">
      <Link to={`/inv/productlist`} style={{ textDecoration: 'none', color: 'black' }}>
          <h2>Kitchen</h2>  
      </Link>
      </div>
      <div className="card">
      <Link to={`/inv/productlist`} style={{ textDecoration: 'none', color: 'black' }}>
          <h2>Clothing</h2>
      </Link>
      </div>
      <div className="card">
      <Link to={`/inv/productlist`} style={{ textDecoration: 'none', color: 'black' }}>
          <h2>Toys</h2>
      </Link>
      </div>

      </Right>
      </Container>
    </div>
  )
}

export default Departments