import React, { useEffect } from 'react';
import {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Cart from './Cart';
import Header from './header'
import {db, auth, provider} from './firebase'
import Login from './Login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [cartItem, setCartItem] = useState([])
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
  const getCartItem  = () =>{
    db.collection('CartItems').onSnapshot((snapshot) => {
      let tempItem = []

      tempItem = snapshot.docs.map((doc) => ({
        id:doc.id,
        product:doc.data()
      }))

      setCartItem(tempItem)
    })
  }
  const signOut = () =>{
    auth.signOut().then(()=>{
      localStorage.removeItem('user')
      setUser(null)
    })
  }
  useEffect(()=>{
    getCartItem()
  },[])

  console.log(cartItem)
  return (
  <Router>
    {
      !user? (
          <Login setUser={setUser} />
      ):(
        <div className="App">
          <Header user={user} cartItems={cartItem} signOut={signOut}/>
          <Switch>
              <Route path="/cart">
                <Cart cartItems={cartItem}/>
              </Route> 
              <Route path="/">
                <Home />
              </Route>
          </Switch>
      </div>
      )
    }
    
    </Router> 
  );
}

export default App;
