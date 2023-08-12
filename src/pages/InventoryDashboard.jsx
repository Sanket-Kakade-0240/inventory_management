import React from 'react'
import Left from '../components/Left'
import Navbar from '../components/Navbar'
import styled from "styled-components";


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


const InventoryDashboard = ({ inventory }) => {
    const totalStock = inventory.reduce((acc, item) => acc + item.stock, 0);
    const totalDelivered = inventory.reduce((acc, item) => acc + item.delivered, 0);
    const lowStockItemsCount = inventory.filter(item => item.stock <= 10).length;

  return (
    <div>
        <Navbar/>
        
        <Container>
            <Left/>
            <Right>
            <div className="card">
                <h2 className="card-h1">Total Stock</h2>
                <p>{totalStock}</p>
            </div>
            <div className="card">
                <h2 className="card-h2">Total Delivered</h2>
                <p>{totalDelivered}</p>
            </div>
            <div className="card">
                <h2 className="card-h3">Low Stock Items</h2>
                <p> {lowStockItemsCount} </p>
            </div>
            </Right>
        </Container>
    </div>
  )
}

export default InventoryDashboard