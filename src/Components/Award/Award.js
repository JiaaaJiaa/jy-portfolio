import React from 'react';
import './Award.css'
import titlebackground from '../../assets/titlebackground.png';

const Award = () => {
    return ( 
        <div className="Award">
            <div className="Award-title">
                <h1>Awards</h1>
                <img src={titlebackground} alt="" />
            </div>
        </ div>
     );
}
 
export default Award;