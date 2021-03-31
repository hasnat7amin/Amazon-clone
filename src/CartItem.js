import React from 'react'
import styled from 'styled-components'
import {db} from "./firebase"
function CartItem({id,product}) {
    let option = []
    for(let i = 1; i<Math.max(product.quantity+1,20 ); i++){
        option.push(<option value={i}>Qty:{i}</option>)
    }

    let deleteProduct =  () => {
        
        db.collection('CartItems').doc(id).delete()
        .then(()=>{console.log("successfully deleted! ")})
        .catch((error)=>{ console.log("Error removing document:", error)})
    }

    let changeQuantity = (newQuantity) =>{
        db.collection('CartItems').doc(id).update({
            quantity: parseInt(newQuantity)
        })
        
    }

    return (
        <Container>
            <ContainerImage>
                <img src={product.image}></img>
            </ContainerImage>
            <ContainerInfo>
                <InfoTop>
                    <Name>
                        <p>{product.name}</p>
                    </Name>
                </InfoTop>
                <InfoBottom>
                    <Quantity>
                        <select 
                            value={product.quantity}
                            onChange={(e) => {changeQuantity(e.target.value)}}
                        >
                            {option}
                        </select>
                        
                    </Quantity>
                    <Delete>
                        
                        <button onClick={deleteProduct}>Delete</button>
                    </Delete>
                </InfoBottom>
            </ContainerInfo>
            <ContainerPrice>
                ${product.price}
            </ContainerPrice>
        </Container>
    )
}

export default CartItem

const Container = styled.div`
    display:flex;
    padding:20px;
    border-bottom: 1px solid black;
`
const ContainerImage = styled.div`
    width:400px;
    img{
        height:200px;
        weight:180px;
    }
`
const ContainerInfo = styled.div`
    padding:5px;
    flex-grow:1;
`
const InfoTop = styled.div`
    flex-grow:1;
`
const InfoBottom = styled.div`
    display:flex;
    padding:14px;
`
const ContainerPrice = styled.div`
    diplay:flex;
    font-size:18px; 
    font-weight:bold;
    align-item:right;
    justify-content:right;
`
const Name = styled.div`
    width:400px;

`
const Quantity = styled.div`
    
    select{
        background-color: #2F0F2F2;
        padding:8px;
        border-radius:10px;
        width:100px;
    }
`
const Delete = styled.div`
    button{
        background-color: #2F0F2F2;
        padding:8px;
        border-radius:10px;
        width:100px;
    }
`
