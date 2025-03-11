import './style.css'

const TechSection = ({ title, content, icon }) => {
    return (
        <div className='tech-wrapper'>
            <img src={icon} alt="img" className="tech-icon" />
            <div>
                <h2 className='manrope md-text'>{title}</h2>
                <p className='inter sm-text'>{content}</p>
            </div>
        </div>
    );
}

export default TechSection;