import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Buton/Button';

function CradItem(props) {
    let article= props.item.article;
    let id = props.item.id
    let type = props.type;
    return (
        type==="card" ? (
            <div className="card">
                <Link to={`/article/${id}`}>
                    <img src={`./articleImage/${article.image}`} alt="article" className="card-img"/>
                </Link>
                <p className="card-type">{article.categorie}</p>
                <p className="card-name">{article.nom_article}</p>
                <p className="card-price"> {article.prix}</p>
            </div>
        ) : (
            <div className="card-detail">
                <img src={`./articleImage/chemin_de_table+serviettes_de_table+bogolan.jpg`} className="card-detail-image" alt="article" />
                <div className="card-detail-description">
                    <span className="card-detail-categorie" >{article.categorie}</span>
                    <span className="card-detail-name" >{article.nom_article}</span>
                    <span className="card-detail-type" > {article.type}</span>
                    <span className="card-detail-describe" >{article.description}</span>
                    <span className="card-detail-prix" >{article.prix}</span>
                    <Button btnStyle="btn-primary">Buy Now</Button>
                </div>
            </div>
        )
    )
}

export default CradItem
