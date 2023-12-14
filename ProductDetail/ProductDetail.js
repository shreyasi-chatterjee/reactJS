import React from "react";
import classes from './ProductDetail.module.css';

const ProductDetail = (props) => {
    const colorOptions = props.data.colorOptions.map((item, pos) => {
        const colorArr = [classes.strapcolor];
        if(pos==props.currentPrevImgPos){
            colorArr.push(classes.selectedProduct);
        }
        return(
            <img key={pos} className={colorArr.join(' ')} src={item.imageUrl} alt={item.styleName} onClick={() => props.onClickColorOpt(pos)}/>
        )
    });

    const featureList = props.data.featureList.map((item, pos) => {
        const featArr = [classes.featItem];
        if(pos==props.currentFeatOpt){
            featArr.push(classes.selectedFeat);
        }
        
        return(
            <button onClick={() => props.onClickFeatOpt(pos)} key={pos} className={featArr.join(' ')}>{item}</button>
        )
    })

    return(
    <div className={classes.Productdetail}>
    <h1>{props.data.title}</h1>
    <p>{props.data.description}</p>
    <br></br>
    <h3>Select Color</h3>
    <div className={classes.Colorchoice}>
        {colorOptions}
        {/* <img className={[classes.strapcolor, classes.selectedProduct].join(' ')} src='https://imgur.com/iOeUBV7.png' />
        <img className={classes.strapcolor} src='https://imgur.com/PTgQlim.png' />
        <img className={classes.strapcolor} src='https://imgur.com/Mplj1YR.png' />
        <img className={classes.strapcolor} src='https://imgur.com/xSIK4M8.png' /> */}
    </div>
    <br></br>
    <h3>Features</h3>
    <div className={classes.btnCont}>
        {featureList}
        <br></br>
        <button className={classes.buy}>Buy Now</button>
    </div>
    </div>
    );
}

export default ProductDetail;
