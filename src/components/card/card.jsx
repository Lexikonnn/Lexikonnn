import './style.css';
import '../../global.css';
import React from 'react';

const Card = ({ children, title, content, orientation = 'row' }) => {
    return (
        <div className={`card-container br-shadow ${orientation === 'column' ? 'column' : 'row'}`}>
            <div className='img-wrapper'>
                {React.isValidElement(children) ? React.cloneElement(children, { className: 'responsive-img' }) : null}
            </div>
            <div className='card-wrapper'>
                <p className='inter md-text'>
                    <span className='inter highlight'>{title}</span>
                    {content}
                </p>
            </div>
        </div>
    );
}

export default Card;