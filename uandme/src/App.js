import './App.css';
import data from './data';

function App() {
  return (
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
        <div className="row center">
        {data.products.map( (product) => (
            <div key={product.key} className="card">
            <a href="/product">
              
              <img className="medium" src={product.image} alt="products"/>
                </a>
              <div className="card-body">
                <a href="/product">
                  <h2>{product.name}</h2>

                </a>
                <div className="rating">
                  <span>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>

                  </span>
                </div>
                <div className="price">
                  {product.currency}
                  {product.price}
                </div>
              </div>
            </div>
           
 
          ))
         }
            
                     
            
            
        </div>
    </main>
                  <footer className="row center">
                    <div className="footer">
                      All rights reserved
                    </div>
                  </footer>
                </div>
                );
}

                export default App;
