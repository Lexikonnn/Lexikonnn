import './style.css';

const BeanArea = () => {
    return (

        <div className="bean-card-container br-shadow" >
            <div className='area-wrapper'>
                <img src="/assets/beans.svg" alt="img" className='beans-img' />
            </div>
            <div className='card-wrapper-bento'>
                <p className='inter md-text white'>
                    <span className='inter highlight'>Flexible </span>
                    & strive for innovations
                </p>
            </div>
        </div>
    );
}

export default BeanArea;