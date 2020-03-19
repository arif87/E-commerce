import React, { Component } from 'react';
import './App.css';
import { Route, Switch, } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import { auth } from './firebase/firebase.utils';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
    
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth =  auth.onAuthStateChanged((user)=>{
         this.setState({ currentUser: user })
         console.log(user);
         
    })
  }

  componentWillUnmount() { 
    this.unsubscribeFromAuth();
  }
  
  
  render() {
    return (
      <div>
        <Header {...this.state}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    );
  }
}
 

export default App;
