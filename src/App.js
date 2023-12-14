import React, { Component } from 'react';
import classes from './App.module.css';
import ProductData from './ProductData';
import ProductDetail from './ProductDetail/ProductDetail';
import ProductPrev from './ProductPreview/ProductPrev';

class App extends Component {
  state = {
    productData: ProductData,
    currentPrevImgPos: 0,
    currentFeatOpt: 0
  }

  onClickColorOpt = (pos) => {
    this.setState({currentPrevImgPos: pos});
  }
  onClickFeatOpt = (pos) => {
    this.setState({currentFeatOpt: pos});
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <nav className={classes.Topbar}>
            <img src={window.location.origin + '/amazonLogo.png'} alt="logo" />
          </nav>
          <main>
            <div className={classes.Productcont}>
              <div className={classes.ProductPrev}>
              <ProductPrev currentPrevImage={this.state.productData.colorOptions[this.state.currentPrevImgPos].imageUrl}
              currentFeatOpt={this.state.currentFeatOpt} />
              </div>
                <ProductDetail data={this.state.productData} onClickColorOpt={this.onClickColorOpt} 
                currentPrevImgPos={this.state.currentPrevImgPos} onClickFeatOpt={this.onClickFeatOpt}
                currentFeatOpt={this.state.currentFeatOpt}/>
            </div>
          </main>
  
        </header>
      </div>
    );
  }
  
};

export default App;
