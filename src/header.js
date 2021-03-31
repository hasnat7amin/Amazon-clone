import React from 'react'
import styled from 'styled-components'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
  
function Header({user,cartItems, signOut}) {
    let count = 0;
    let getCount = () => {
        cartItems.forEach((item) => {
            count += item.product.quantity;
        });
        return count;
    }
    return (
        
            <Container>
                    <ImageIcon>
                        <Link to="/">
                            <Image  src="https://www.valuewalk.com/wp-content/uploads/2013/04/Amazon-logo.jpg" alt='photo'></Image>
                        </Link>
                   </ImageIcon>
                    <LocationIcon>
                        <LocationOnIcon />
                    </LocationIcon>
                    <LocationArea>
                        <p>Deliver to</p>
                        <p>Pakistan</p>
                    </LocationArea>
                    <SearchArea>
                        <InputSearch type='text' />
                        <IconSearch>
                            <SearchIcon></SearchIcon>
                        </IconSearch>
                    </SearchArea>
                    <Language>
                        <LanguageIcon />
                    </Language>
                    <SignInText onClick={signOut}>
                        <p>Hello, {user.name}</p>
                        <p>Accounts and Lists</p>
                    </SignInText>
                    <RAndOrder>
                        <p>Returns</p>
                        <p>& Orders</p>
                    </RAndOrder>
                    <CartPart>
                        <Link to="/cart">
                            <AddShoppingCartOutlinedIcon />
                            <span>{getCount()}</span>
                        </Link>
                       
                    </CartPart>
            </Container>
       
    )
}

export default Header;

const Container = styled.div`
    height:60px;
    width:214vh;
    display:sticky-top;
    background-color:black;
    color:white;
    display:flex;
    align-items:center;
    justify-content:space-around;
`
const ImageIcon = styled.div`
    display:flexbox;
   a{
       display:flex;
       color:white;
       text-decoration:none;

   }

`
const Image = styled.img`
    width: 20vh;
    height: 60px;
    padding:4px;
    

`
const LocationIcon = styled.div`
    :hover{
        border:2px solid white;
        padding:4px;
        margin-right:2px;

    }
`

const SignInText = styled.div`
    margin-right:10px;
    margin-left:10px;
    :hover{
        border:2px solid white;
        padding:4px;
    }
`
const SearchArea = styled.div`
    display:flex;

    
`
const InputSearch = styled.input`
    display:flex;
    height:40px;
    outline:none;
    position:reletive;
    width:100vh;
    border-radius:4px;
`
const IconSearch = styled.div`
    display:flex;
    padding:3px;
    background-color:orange;
    color:black;
    padding-top:10px;
    padding-left:9px;
    padding-right:7px;
    border-radius:4px;
    outline:none;
    margin-right:5px;
`

const LocationArea = styled.div`
    margin-right:4px;
    :hover{
        border:2px solid white;
        padding:4px;
        margin-right:2px;

    }
`
const Language = styled.div`
    margin-right:5px;
    :hover{
        border:2px solid white;
        padding:4px;

    }
`
const RAndOrder = styled.div`
    margin-right:10px;
    margin-left:10px;
    :hover{
        border:2px solid white;
        padding:4px;
        margin-right:2px;

    }
`
const CartPart = styled.div`
    display:flex;
    font-size:18px;
    a{
        display:flex;
        color:white;
        text-decoration:white;
        cursor:pointer; 
    }
    :hover{
        border:2px solid white;
        padding:4px;
        margin-right:2px;

    }
`