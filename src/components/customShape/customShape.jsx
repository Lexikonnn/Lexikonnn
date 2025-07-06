import './style.css';
import TagBooble from './TagBooble';

const CustomShape = () => {
    return (
        <div className="shape-container">
            <TagBooble content="Adaptive +" top="10%" left="5%" borderRadius="16px 16px 0 16px" />
            <TagBooble content="Ready for opportunity" top="80%" left="44%" borderRadius="16px" />

            <div className="shape-visual-wrapper">
                <img src="/assets/shape.svg" alt="Custom Shape" className="custom-shape" />

                <div className="photo-wrapper">
                    <img src="/assets/photo.png" alt="skrzeczek photo" className="photo" />
                </div>
            </div>
        </div>
    );
}

export default CustomShape;