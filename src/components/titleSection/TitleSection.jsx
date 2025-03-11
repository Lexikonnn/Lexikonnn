import './style.css';

const TitleSection = ({ title, text }) => {
    return (
        <div className="title-container">
            <h3 className='manrope xl-text'>{text}</h3>
            <h4 className='inter sm-text'>{title}</h4>
        </div>
    );
}

export default TitleSection;