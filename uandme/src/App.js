import React from 'react'
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import {HomeScreen} from './screens/HomeScreen';
import {ProductScreen} from './screens/ProductScreen';
function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="row">
        <div>
          <a href="/index" className="brand-name">U & Me</a>
        </div>
        <div className="">
          <a href="/cart">Cart</a>
          <a href="/sign-in">Sign-in</a>
        </div>
      </header>

      <main>

        <Route path="/product/:id" component={ProductScreen} ></Route>
        <Route path="/" component={HomeScreen} exact ></Route>
        
                     
            
            
        
    </main>
                  <footer className="row center">
                    <div className="footer">
                      All rights reserved
                    </div>
                  </footer>
                </div>
                </BrowserRouter>
                );
}

                export default App;
