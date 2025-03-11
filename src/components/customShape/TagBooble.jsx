import './style.css';

const TagBooble = ({ content, top, left, borderRadius }) => {
    return ( 
        <div className='booble-wrapper b-shadow' style={{ top, left, borderRadius }}>
            <p className='manrope sm-text'>{content}</p>
        </div>
    );
}

export default TagBooble;