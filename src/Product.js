import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import ProductItem from './ProductItem'
import {db} from './firebase';
function Product(props) {
    const [product, setProduct] = useState([])

    const getProduct = () =>{
        db.collection('Products').onSnapshot((snapshot) => {
            let tempProduct = []

            tempProduct =  snapshot.docs.map((doc) => ({
                id : doc.id,
                product : doc.data()
            }))
            setProduct(tempProduct)
            
        })
    }
    useEffect(()=>{
        console.log("calling product")
        getProduct()
    },[])
    return (
        <Container>
            <PartOne>
            {
                product.map((data) => (
                    <ProductItem 
                        name = {data.product.name}
                        price = {data.product.price}
                        image = {data.product.image}
                        id = {data.id}
                    />
                ))
            }
            </PartOne>
        </Container>
    )
}

export default Product
const Container = styled.div`
    
`
const PartOne = styled.div`

    margin-top:-350px;
    display:flex;
    flex-decoration:row;
    justify-content:center;
    align-item:space-between;
    width:214vh;


`
const PartTwo = styled.div`

    margin-top:30px;
    display:flex;
    justify-content:center;
    align-item:space-between;
    width:214vh;
`