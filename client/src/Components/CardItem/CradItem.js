import React from 'react'

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
            <div>
                <div >
                    <img src="card-detail-img" alt="" srcset="" />
                </div>
            </div>
        )
    )
}

export default CradItem
