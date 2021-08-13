import React from 'react';
import {item} from '../CardItem/Items';
import CradItem from '../CardItem/CradItem';

function HomeCard() {

    let items = [];

    return (
        <div className="subcard">
            {
                item.map((item, index)=>{
                    return (
                        <CradItem type="card" item={item.article}/>
                    )
                })
            }
        </div>
    )
}

export default HomeCard;
