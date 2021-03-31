import React from 'react'
import styled from "styled-components"
import CartItems from './CartItems'
import CartTotal from './CartTotal'

function Cart({cartItems}) {
    return (
        <Container>
            <PartOne>
                <CartItems cartItems={cartItems}/>
            </PartOne>
            <PartTwo>
                 <CartTotal cartItems={cartItems}/>
            </PartTwo>
        </Container>
    )
}

export default Cart

const Container = styled.div`
    display:flex;
    width:214vh;

`
const PartOne = styled.div`
    flex-grow:0.7;
    
    padding:20px;
    margin:10px;
    background-color:white;
`
const PartTwo = styled.div`
    flex-grow:0.3;
   height:200px;
    padding:20px;
    margin:10px;
    background-color:white;
`