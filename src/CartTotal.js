import { Container } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
function CartTotal({cartItems}) {
    let TotalPrice = 0;
    let getPrice = () =>{
        cartItems.forEach((item) => {
            TotalPrice += item.product.quantity * item.product.price;
        });
        return TotalPrice;
    }
    let count = 0;
    let getCount = () => {
        cartItems.forEach((item) => {
            count += item.product.quantity;
        });
        return count;
    }
    return (
        <Cantainer>
            <Heading>Cart total</Heading>
            <hr></hr>
            <SubHeading>Total Items : <span>{getCount()}</span></SubHeading> 
            <SubHeading>Total Price : <span>${getPrice()}</span></SubHeading>
            <CheckOut>Proceed To Checkout</CheckOut>
        </Cantainer>
    )
}

export default CartTotal

const Cantainer = styled.div`
      
`
const Heading = styled.h1`
    padding-bottom:8px;
      
`
const SubHeading = styled.h4`
    padding:10px;
      
`
const CheckOut = styled.h4`
    padding:10px;
    justify-content:center;
    padding:10px 16px 10px 16px;
    background-color:orange;
    border-radius:10px;
    text-align:center;
    margin:35px 0px 0px 0px;
    color:white;
    :hover{
        background-color:white;
        color:orange;
        border: 1px solid orange;
    }
    
      
`