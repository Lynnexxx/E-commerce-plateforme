import React from 'react';
import Button from '../Buton/Button';

function CradItem(props) {
    const article= props.item;
    const type = props.type;
    return (
        type==="card" ? (
            <div className="card">
                <img src={`./articleImage/${article.image}`} alt="article" className="card-img"/>
                <p className="card-type">{article.categorie}</p>
                <p className="card-name">{article.nom_article}</p>
                <p className="card-price"> {article.prix}</p>
            </div>
        ) : (
            <div className="card-detail">
                <img src="./articleImage/egouttoir_en_bois_naturel.jpg" className="card-detail-image" alt="article" />
                <div className="card-detail-description">
                    <span className="card-detail-categorie" >vaisselle artisanale</span>
                    <span className="card-detail-name" >egouttoir à vaisselle simple en bois naturel</span>
                    <span className="card-detail-type" > Type : bois</span>
                    <span className="card-detail-describe" >Un égouttoir simple biodegradables,beaux </span>
                    <span className="card-detail-prix" >5500 FCFA</span>
                    <Button btnStyle="btn-primary">Buy Now</Button>
                </div>
            </div>
        )
    )
}

export default CradItem
