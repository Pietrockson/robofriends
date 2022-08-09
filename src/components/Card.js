import React from 'react';

const Card = ({id, name, email})=> {
    return(
        <div className='tc bg-light-green dib br3 pa3 bw2 ma2 grow shadow-5'>
            <img alt="roobots" src={`https://robohash.org/${id}`} width={'250'}/>
            <div>
            <h2>{name}</h2>
            <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;