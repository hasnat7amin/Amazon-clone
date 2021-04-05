import React from 'react'
import styled from 'styled-components'
import {db} from './firebase'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
  
function ProductItem({name, image, price,id}) {
    const addToCart = () =>{
        const CartItem = db.collection("CartItems").doc(id).get()
        .then((doc)=>{
            if(doc.exists){
                CartItem.update({
                    quantity: doc.data().quantity + 1
                })
            }
            else{
                db.collection("CartItems").doc(id).set({
                    name:name,
                    image:image,
                    price:price,
                    quantity:1
                })
            }
        })
        .catch((error)=>{console.log("Got an error : "+ error.message)})
    }
    return (
        <Container>
            <ProductTitle>{name}</ProductTitle>
            
            <ProductPrice>{price}</ProductPrice>
            <ProductImage src={image} ></ProductImage>
            <Button>
            <Link to="/cart">
                <ProductBuy onClick={addToCart} type='submit'>Buy now</ProductBuy>
            </Link>
            </Button>
        </Container>
    )
}

export default ProductItem
const ProductPrice = styled.p`
`
const Container = styled.div`
    padding:20px 20px 0px 20px;
    display:flex;
    flex-direction:column;
    border:2px solid orange;
    background-color:white;
    height:64vh;
    width:43vh;
    margin-left:10px;
    :hover{
        box-shadow: 3px 3px 8px 3px;
    }
`
const ProductTitle = styled.h4`
`
const ProductImage = styled.img`
    width:250px;
    height:150px;
    padding: 10px 0;
    flex-grow:1;
`
const ProductBuy = styled.button`
    width:100px;
    background-color:orange;
    color:white;
    font-size:16px;
    padding:8px;
    border:none;
    border-radius:20px;
    margin-left:80px;
    margin-top:20px;
    margin-bottom:20px;
    :hover{
        color:orange;
        border-bottom:2px solid orange;
        border-top:2px solid orange;
        background-color:white;
    }
`
const Button = styled.div`
    width:250px;
    justify-content:center;
    
`