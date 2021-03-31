import React from 'react'
import styled  from 'styled-components'
import CartItem from './CartItem'
function CartItems({cartItems}) {
    return (
        <Container>
            <Head>
                <h1>Shopping Cart</h1>
            </Head>
            <hr></hr>
            <div>{
                cartItems.map((item)=>(
                    <CartItem 
                        id={item.id} 
                        product={item.product}
                    />
                    
                ))
            }</div>
           
        </Container>
    )
}

export default CartItems

const Container = styled.div`
`
const Head = styled.div`
    padding-bottom: 10px;
`