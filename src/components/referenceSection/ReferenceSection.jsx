import './style.css';

const ReferenceSection = ({ image, title, content, imagePosition = "left" }) => {
    return (
        <div className={`reference-wrapper ${imagePosition === "right" ? "reverse" : ""}`}>
            <img src={image} alt="img" className="reference-img" />
            <div className='re-content-wrapper'>
                <h2 className='lg-text manrope'>{title}</h2>
                <p className='md-text inter'>{content}</p>
            </div>
        </div>
    );
}

export default ReferenceSection;