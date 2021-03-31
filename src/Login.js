import React from 'react'
import styled from 'styled-components'
import {auth, provider } from './firebase'

function Login({ setUser }) {

    const signIn = () =>{
        auth.signInWithPopup(provider).then((result)=>{
            let user = result.user;
            const newUser = {
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            }
            localStorage.setItem('user',JSON.stringify(newUser))
            setUser(newUser)
        }).catch((error)=>{
            alert(error.message)
        })
    }

    return (
        <Container>
            <Content>
                <img src="https://thumbs.dreamstime.com/b/amazon-155631949.jpg"></img>
                <h1>Sign into Amazon</h1>
                <button onClick={signIn}>Sign in with google</button>
            </Content>
        </Container>
    )
}

export default Login

const Container = styled.div`
    width:214vh;
    height:80vh;
    display:grid;
    place-items:center;
    
`
const Content = styled.div`
    background-color:white;
    width:400px;
    height:300px;
    text-align:center;
    padding:30px 0 20px 0;
    box-shadow: 9px 9px 20px black;
    img{
        width:200px;
    }
    h1{
        padding:30px 0 20px 0;
        font-size:38px;
    }
    button{
        margin:50px 0 0 0;
        padding:7px 30px;
        font-size:18px;
        background-color:orange;
        color:white;
        border-radius:20px;
        border: 2px solid orange;
        :hover{
            background-color:white;
            color:orange;
            border-radius:20px;
            border: 2px solid orange;
        }
    }
`