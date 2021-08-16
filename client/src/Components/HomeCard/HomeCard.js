import React from 'react';
import {item} from '../CardItem/Items';
import CradItem from '../CardItem/CradItem';

function HomeCard() {

    return (
        <div className="subcard">
            {
                item.map((item, index)=>{
                    return (
                        <CradItem type="card" item={item}/>
                    )
                })
            }
        </div>
    )
}

export default HomeCard;
