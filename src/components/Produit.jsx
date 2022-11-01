import React from 'react';

const Produit = (props) => {
    return (
        <div className='card'>
             <img src={props.produit.images[0]}/>
            <h2>{props.produit.title}</h2>
            <button>Plus de details</button>
        </div>
    );
}

export default Produit;
