import React from 'react'
import styled from 'styled-components'
import Product from './Product'
function Banner() {
    return (
        <Container>
            {/* <Image src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"></Image> */}
            
        </Container>
    )
}

export default Banner

const Container = styled.div`
    background-image: url('https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg');
    width:214vh;
    height:600px;
    background-repeat: no-repeat;
    background-size: cover;

`