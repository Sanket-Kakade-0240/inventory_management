import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { ViewStacked,Bag,Building } from 'react-bootstrap-icons';


const LeftContainer = styled.div`
padding: 30px;
flex: 1;
font-size: 20px;
flex-direction: column;

`
const MenuItem = styled.div`
display: flex;
margin-bottom: 1rem;
`

const Left = () => {
  return (
    <LeftContainer>
                <MenuItem> 
                  <Link to={`/`} style={{ textDecoration: 'none', color: 'black' }}>
                    <ViewStacked style={{marginRight: "1rem"}}/> Dashboard 
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to={`/inv/departments`} style={{ textDecoration: 'none', color: 'black' }}>
                  <Building style={{marginRight: "1rem"}}/> Departments
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to={`/inv/productlist`} style={{ textDecoration: 'none', color: 'black' }}>
                  <Bag style={{marginRight: "1rem"}}/> Products 
                  </Link>
                </MenuItem>
                

            </LeftContainer>
  )
}

export default Left;