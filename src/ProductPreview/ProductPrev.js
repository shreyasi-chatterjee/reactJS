import { faHeartPulse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import classes from './ProductPrev.module.css';

const ProductPrev = (props) => {
    const currentHour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
    const currentMinute = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes();
    return(
        <div className={classes.Productview}>
            <img src={props.currentPrevImage} alt='Preview image' />
            
                {
                props.currentFeatOpt === 1 ?
                    <div className={classes.heartbeat}>
                    <FontAwesomeIcon icon={faHeartPulse} beat size="s" color='red' />
                    <p>72</p>
                    </div>
                    :
                    <div className={classes.FeatureData}>
                        <p>{`${currentHour} : ${currentMinute}`}</p>
                    </div>
                }
        </div>
    );
}

export default ProductPrev;